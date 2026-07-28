let mediaRecorder;
let recordedChunks = [];
window.currentMusic = null;
window.musicObject = null;
window.isPlaying = false;
window.timelineTimeouts = [];
let currentPreview = null;
let currentAudio = null;
let videoRecorder;
let videoChunks = [];
let isVideoRecording = false;
let cameraStream = null;

let refreshTimeout;
function debouncedRefresh() {
  clearTimeout(refreshTimeout);
  refreshTimeout = setTimeout(() => {
    if (typeof window.refreshLayers === "function") {
      window.refreshLayers();
    }
  }, 50); // 50ms ka delay taaki baar-baar call na ho
}

window.refreshLayers = function () {
  if (typeof activeCanvas === "undefined" || !activeCanvas) return;
  const container = document.getElementById("layers-list");
  const ruler = document.getElementById("timeline-ruler");
  if (!container || !ruler) return;

  const allObjects = activeCanvas.getObjects();
  const filteredObjects = allObjects.filter((obj) => {
    // Agar object ka role pageeffect hai, toh use timeline mein dikhao (bhale hi wo helper ho)
    if (obj.role === "pageeffect") return true;

    // Baaki sabhi objects ke liye purana rule: helpers ko chhupa do
    return !obj.isHelper;
  });
  if (window.musicObject) {
    filteredObjects.push(window.musicObject);
  }
  // --- CANVA SETTINGS ---
  const pxPerSec = 30; // 1 second = 30px (Canva style zoom)
  const labelInterval = 10; // 0s, 10s, 20s pe number dikhega

  // 1. DYNAMIC LENGTH CALCULATION
  // Sabse aakhri object ka end point dhoondhein
  let maxTimeMs = 30000; // Default minimum 30 seconds

  filteredObjects.forEach((obj) => {
    // const endTime = (obj.animationDelay || 0) + (obj.animationDuration || 1000);
    // if (endTime > maxTimeMs) maxTimeMs = endTime;
    const endTime = (obj.animationDelay || 0) + (obj.totalDuration || 5000);
    if (endTime > maxTimeMs) maxTimeMs = endTime;
  });

  const totalSeconds = Math.ceil(maxTimeMs / 1000) + 10; // 10s extra buffer
  const totalWidthPx = totalSeconds * pxPerSec;

  // Sync widths
  container.style.width = `${totalWidthPx + 100}px`; // +100 for left sidebar offset
  ruler.style.width = `${totalWidthPx + 100}px`;

  // 2. RULER GENERATION (Major & Minor ticks)
  let rulerHTML = "";
  for (let i = 0; i <= totalSeconds; i++) {
    const isMajor = i % labelInterval === 0;
    rulerHTML += `
      <div class="flex-shrink-0 border-l ${isMajor ? "border-gray-500" : "border-[#252627]"} h-8 relative" style="width:${pxPerSec}px">
          ${isMajor ? `<span class="absolute left-1 top-1 text-[9px] text-gray-400 font-bold">${i}s</span>` : ""}
          <div class="absolute bottom-0 left-0 w-[1px] ${isMajor ? "h-3 bg-gray-500" : "h-1 bg-gray-700"}"></div>
      </div>`;
  }
  ruler.innerHTML = rulerHTML;

  if (filteredObjects.length === 0) {
    container.innerHTML = `<div class="p-10 text-center text-gray-600 text-[10px]">No layers found</div>`;
    return;
  }

  // 3. TRACKS GENERATION
  container.innerHTML = filteredObjects
    .map((obj) => {
      const realIndex = allObjects.indexOf(obj);
      const isSelected = activeCanvas.getActiveObject() === obj;
      const delay = (obj.animationDelay || 0) / 1000;
      // let duration = (obj.animationDuration || 1000) / 1000;
      let duration = (obj.totalDuration || 5000) / 1000;
      let displayContent = "";

      // Role-based logic (Clean & Scalable)
      const role = obj.role || obj.type; // Fallback to type if role is missing

      if (role === "textbox") {
        const txt = obj.text || "";
        displayContent = `<span>${txt.length > 15 ? txt.substring(0, 15) + "..." : txt}</span>`;
      } // Check for the role you assigned
      else if (role === "pageeffect") {
        // Agar obj.effectType save hai toh wo lein, nahi toh global state se uthayein
        const effectName =
          obj.effectType || window.activePageEffect || "Effect";

        displayContent = `
        <div class="flex items-center gap-2">
            <div class="w-2 h-2 rounded-full bg-pink-500 shadow-[0_0_5px_#ec4899]"></div>
            <span class="text-pink-500 font-bold uppercase tracking-tighter" style="font-size: 10px;">
                ${effectName.replace("_", " ")}
            </span>
        </div>
    `;
      } else if (role === "textstyle" || obj.type === "group") {
        // Fabric.js uses _objects (with underscore) for groups
        const groupChildren = obj._objects || [];

        const combinedText = groupChildren
          .filter((child) => child.type === "textbox")
          .map((child) => child.text || "")
          .join(" ")
          .trim();

        const preview =
          combinedText.length > 15
            ? combinedText.substring(0, 15) + "..."
            : combinedText || "Styled Text";

        displayContent = `
    <div class="flex items-center gap-2">
      <div class="w-2 h-2 rounded-full bg-indigo-500"></div>
      <span class="text-gray-200">${preview}</span>
    </div>
  `;
      } else if (role === "background") {
        const imgSrc = obj.src || (obj._element && obj._element.src);

        // Use custom name if it exists, otherwise use 'Background'
        const displayName = obj.name || "Background Image";

        displayContent = `
    <div class="flex items-center gap-2">
      <div class="w-5 h-5 flex-shrink-0">
        ${
          imgSrc
            ? `<img src="${imgSrc}" class="w-full h-full object-cover rounded border border-white/10" />`
            : `<div class="w-full h-full bg-slate-800 rounded border border-white/5"></div>`
        }
      </div>

      <span class="text-[10px] font-bold text-gray-200 uppercase tracking-wide">
        ${displayName}
      </span>
    </div>
  `;
      } else if (role === "image") {
        const imgSrc =
          obj._element && obj._element.src ? obj._element.src : obj.src || "";
        displayContent = `
    <div class="flex items-center">
      <img src="${imgSrc}" class="w-5 h-5 object-cover rounded-sm mr-2" />
      <span class="text-[10px]">Image</span>
    </div>`;
      } else if (role === "video") {
        // Video ke liye thumbnail agar hai, nahi toh icon
        const videoThumb = obj.thumbnail || "";
        displayContent = `
    <div class="flex items-center">
      ${videoThumb ? `<img src="${videoThumb}" class="w-5 h-5 object-cover rounded-sm mr-2" />` : '<span class="mr-2">🎬</span>'}
      <span class="text-[10px]">Video</span>
    </div>`;
      } else if (role === "music") {
        const barWidth = 3;
        const totalBars = Math.floor((duration * pxPerSec) / barWidth);
        if (!obj.waveform || obj.waveform.length !== totalBars) {
          obj.waveform = Array.from({ length: totalBars }).map(
            () => Math.floor(Math.random() * 12) + 4,
          );
        }
        displayContent = `
    <div class="flex items-center gap-2 w-full h-full">
      <span class="text-[10px]">🎵</span>
      <div class="flex items-end h-5 flex-1 overflow-hidden">
        ${obj.waveform
          .map(
            (h, i) => `
          <div class="wave-bar ${window.isPlaying ? "wave-animate" : ""}" 
               style="height:${h}px; width:2px; margin-right:1px; animation-delay:${i * 0.02}s;">
          </div>`,
          )
          .join("")}
      </div>
    </div>`;
      } else if (role === "voice") {
        // Voice ke liye simple static representation
        displayContent = `
    <div class="flex items-center gap-2 px-1">
      <span class="text-[12px]">🎙️</span>
      <div class="flex gap-[1px]">
         <div class="w-1 h-3 bg-blue-400 rounded-full"></div>
         <div class="w-1 h-4 bg-blue-400 rounded-full"></div>
         <div class="w-1 h-2 bg-blue-400 rounded-full"></div>
      </div>
      <span class="text-[10px] opacity-80">Voiceover</span>
    </div>`;
      } else if (role === "shape") {
        displayContent = `<span class="mr-2">square</span> <span class="text-[10px]">Shape</span>`;
      }

      // ... baaki code same ...
      return `
<div 
    class="layer-row flex items-center h-12 border-b border-[#252627]/30 relative w-full group transition-all" 
    data-index="${realIndex}"
    draggable="true"
    ondragstart="window.handleDragStart(event)"
    ondragend="window.handleDragEnd(event)"
    ondragover="window.handleDragOver(event)"
    ondragleave="window.handleDragLeave(event)"
    ondrop="window.handleDrop(event)"
>
    <div class="sticky left-0 z-50 w-[100px] bg-[#18191b] border-r border-[#252627] h-full flex items-center px-2 shadow-2xl">
        
        <div class="flex items-center gap-2 px-2 h-8 rounded-lg border w-full cursor-grab active:cursor-grabbing transition-all
            ${isSelected ? "bg-indigo-600 border-indigo-400 shadow-[0_0_10px_rgba(79,70,229,0.4)]" : "bg-[#252627] border-[#313235] hover:border-gray-500"}"
        >
            <i data-lucide="grip-vertical" class="w-3 h-3 text-gray-500"></i>
            
            <span class="text-[10px] font-bold ${isSelected ? "text-white" : "text-gray-400"} uppercase tracking-wider">
                L${realIndex + 1}
            </span>

            <button class="ml-auto visibility-btn" onclick="event.stopPropagation(); window.toggleLayerVisibility(${realIndex})">
                <i data-lucide="${obj.visible ? "eye" : "eye-off"}" class="w-3 h-3 ${isSelected ? "text-indigo-200" : "text-gray-600"}"></i>
            </button>
            <button 
  class="ml-1 delete-btn"
  onclick="
    event.stopPropagation();
    window.selectLayer(${realIndex});
    deleteObject();
  "
>
  <i data-lucide="trash-2" class="w-3 h-3 text-gray-600 hover:text-red-500"></i>
</button>
        </div>
    </div>

    <div 
        id="bar-${realIndex}"
        class="absolute h-8 rounded-lg border-2 flex items-center pointer-events-auto
        ${isSelected ? "bg-indigo-600/40 border-indigo-400 z-30 shadow-lg" : "bg-[#252627] border-[#313235] z-20"}"
        style="left: ${100 + delay * pxPerSec}px; width: ${duration * pxPerSec}px; top: 8px;"
    >
        <div onmousedown="event.stopPropagation(); window.startTimelineEdit(event, ${realIndex}, 'left')"
             class="absolute -left-1 top-0 bottom-0 w-4 cursor-ew-resize z-50 flex items-center justify-center">
             <div class="w-1.5 h-4 bg-white/80 rounded-full"></div>
        </div>

        <div 
            class="flex-1 h-full cursor-move flex items-center px-3 overflow-hidden select-none z-10"
            onmousedown="event.stopPropagation(); window.startTimelineEdit(event, ${realIndex}, 'move')"
        >
            <div class="text-[9px] font-bold text-white uppercase pointer-events-none truncate">
                ${displayContent}
            </div>
        </div>

        <div onmousedown="event.stopPropagation(); window.startTimelineEdit(event, ${realIndex}, 'right')"
             class="absolute -right-1 top-0 bottom-0 w-4 cursor-ew-resize z-50 flex items-center justify-center">
             <div class="w-1.5 h-4 bg-white/80 rounded-full"></div>
        </div>
    </div>
</div>`;
    })
    .reverse()
    .join("");

  if (window.lucide) lucide.createIcons();
};

window.syncTimelineVisibility = function (
  manualElapsedMs,
  isPlayingMode = false,
) {
  if (!activeCanvas) return;

  const playhead = document.getElementById("playhead");
  const pxPerSec = 30;
  const startOffset = 100;
  const elapsedMs =
    manualElapsedMs !== undefined
      ? manualElapsedMs
      : (((parseFloat(playhead?.style.left) || startOffset) - startOffset) /
          pxPerSec) *
        1000;

  activeCanvas.getObjects().forEach((obj) => {
    if (obj.isHelper) return;

    const start = obj.animationDelay || 0;
    const duration = obj.totalDuration || 1000;
    const end = start + duration;

    // 🔴 Case 1: Bilkul bahar (Past ya Future)
    if (elapsedMs < start || elapsedMs > end) {
      obj.set({ opacity: 0, visible: false });
    }
    // 🟢 Case 2: Active Zone (Iske andar hi video sync hoga)
    else {
      // Agar playing mode hai aur animation start hone wali hai (Start point),
      // toh opacity 0 rakhte hain taaki playPreview isse handle kare.
      // Lekin sirf tab jab elapsed bilkul start par ho.
      if (isPlayingMode && Math.abs(elapsedMs - start) < 10) {
        // Animation trigger hone tak wait karega
        obj.set({ opacity: 0, visible: true });
      } else {
        obj.set({ opacity: 1, visible: true });
      }

      // Video/Audio Seek logic
      if (obj.role === "video" || obj.isVideo) {
        const videoEl = obj.getElement();
        if (videoEl) {
          const seekTime =
            (obj.videoStartOffset || 0) + (elapsedMs - start) / 1000;
          if (Math.abs(videoEl.currentTime - seekTime) > 0.1) {
            videoEl.currentTime = seekTime;
          }
        }
      }
    }
  });
  activeCanvas.requestRenderAll();
};

// 1. Initial Setup
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("layers-list");

  // Drag Start
  container.addEventListener("dragstart", (e) => {
    const row = e.target.closest(".layer-row");
    if (row) {
      draggedItemIndex = parseInt(row.dataset.index);
      e.dataTransfer.setData("text/plain", draggedItemIndex);
      row.classList.add("opacity-50");
      console.log("Drag Started Index:", draggedItemIndex);
    }
  });

  // Drag Over
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const row = e.target.closest(".layer-row");
    if (row) row.style.borderTop = "2px solid #6366f1";
  });

  // Drag Leave
  container.addEventListener("dragleave", (e) => {
    const row = e.target.closest(".layer-row");
    if (row) row.style.borderTop = "none";
  });

  // Drop
  container.addEventListener("drop", (e) => {
    e.preventDefault();
    const row = e.target.closest(".layer-row");
    if (row && draggedItemIndex !== null) {
      const targetIndex = parseInt(row.dataset.index);
      row.style.borderTop = "none";
      console.log(`Swapping ${draggedItemIndex} to ${targetIndex}`);

      if (draggedItemIndex !== targetIndex) {
        window.reorderLayers(draggedItemIndex, targetIndex);
      }
    }
    draggedItemIndex = null;
  });

  window.reorderLayers = function (fromIndex, toIndex) {
    const objects = activeCanvas.getObjects();
    const movingObj = objects[fromIndex];
    if (movingObj) {
      movingObj.moveTo(toIndex);
      activeCanvas.renderAll();
      window.refreshLayers(); // UI update karega bina inline error ke
    }
  };

  // Drag End
  container.addEventListener("dragend", (e) => {
    const row = e.target.closest(".layer-row");
    if (row) row.classList.remove("opacity-50");
    document
      .querySelectorAll(".layer-row")
      .forEach((r) => (r.style.borderTop = "none"));
  });

  // Drag End
  container.addEventListener("dragend", (e) => {
    const row = e.target.closest(".layer-row");
    if (row) row.classList.remove("opacity-50");
    document
      .querySelectorAll(".layer-row")
      .forEach((r) => (r.style.borderTop = "none"));
  });

  // Click events (Visibility toggle and Selection)
  container.addEventListener("click", (e) => {
    const visBtn = e.target.closest(".visibility-btn");
    if (visBtn) {
      window.toggleLayerVisibility(parseInt(visBtn.dataset.index));
      return;
    }

    const row = e.target.closest(".layer-row");
    if (row) {
      window.selectLayer(parseInt(row.dataset.index));
    }
  });
});
window.selectLayer = function (index) {
  const obj = activeCanvas.getObjects()[index];
  if (!obj) return;
  activeCanvas.setActiveObject(obj);
  activeCanvas.renderAll();
  refreshLayers(); // 🔥 Yeh line zaroori hai!
};

let isResizing = false;
let startX, startWidth, resizingObjIndex;

// 1. Global State
window.timelineEditing = {
  isEditing: false,
  side: null,
  startX: 0,
  startDelay: 0,
  startDuration: 0,
  objIndex: null,
};

// 2. Start Function
window.startTimelineEdit = function (e, index, side) {
  e.preventDefault();
  e.stopPropagation();

  if (typeof window.stopAllPlayback === "function") {
    window.stopAllPlayback();
    console.log("DEBUG: Playback stopped for editing.");
  }

  const allObjects = activeCanvas.getObjects();
  const obj = allObjects[index];

  if (!obj) {
    console.error(`DEBUG ERROR: Object at index ${index} not found!`);
    return;
  }

  console.log(`DEBUG: Resize START - Side: ${side}, Index: ${index}`);

  window.timelineEditing = {
    isEditing: true,
    side: side,
    startX: e.clientX,
    startDelay: obj.animationDelay || 0,
    startDuration: obj.totalDuration || 5000,
    objIndex: index,
  };

  // ✅ Window reference ke saath listeners lagayein
  document.addEventListener("mousemove", window.handleTimelineEdit);
  document.addEventListener("mouseup", window.stopTimelineEdit);

  document.body.style.cursor = "ew-resize";
};

// 3. Handle/Move Function
window.handleTimelineEdit = function (e) {
  if (!window.timelineEditing || !window.timelineEditing.isEditing) return;

  const { side, startX, startDelay, startDuration, objIndex } =
    window.timelineEditing;
  const dx = e.clientX - startX;
  const pxPerSec = 30;
  const msChange = Math.round((dx / pxPerSec) * 1000);

  const allObjects = activeCanvas.getObjects().filter((o) => !o.isHelper);
  const obj = allObjects[objIndex];
  if (!obj) return;

  if (side === "right") {
    // Right handle khichne par sirf total duration badhegi
    const newDuration = Math.max(200, startDuration + msChange);
    obj.set("totalDuration", newDuration); // <--- Fix
  } else if (side === "left") {
    // Left handle khichne par delay badhega aur duration utni hi kam hogi
    const newDelay = Math.max(0, startDelay + msChange);
    const diff = newDelay - startDelay;
    const newDuration = Math.max(200, startDuration - diff);

    obj.set("animationDelay", newDelay);
    obj.set("totalDuration", newDuration); // <--- Fix
  } else if (side === "move") {
    // Puri bar move karne par sirf delay badlega
    const newDelay = Math.max(0, startDelay + msChange);
    obj.set("animationDelay", newDelay);

    // Move karte waqt duration wahi rehni chahiye jo start mein thi
    obj.set("totalDuration", startDuration);
  }

  // Instant UI refresh taaki bar resizing "live" dikhe
  if (typeof refreshLayers === "function") refreshLayers();
  activeCanvas.requestRenderAll();
};

window.stopTimelineEdit = function () {
  if (window.timelineEditing.isEditing) {
    window.timelineEditing.isEditing = false;

    // Clean up listeners
    document.removeEventListener("mousemove", window.handleTimelineEdit);
    document.removeEventListener("mouseup", window.stopTimelineEdit);

    document.body.style.cursor = "default";

    // Save history only once after editing stops
    if (typeof saveHistory === "function") saveHistory();
    if (activeCanvas) activeCanvas.requestRenderAll();
  }
};
window.isSequenced = false; // Sequence state track karne ke liye

window.autoSequence = function () {
  if (typeof stopAllPlayback === "function") {
    stopAllPlayback();
  }
  const objects = activeCanvas.getObjects().filter((obj) => !obj.isHelper);

  if (window.isSequenced) {
    // ⏪ RESET: Sabko wapas 0 delay par le aao
    console.log("DEBUG: Resetting all delays to 0");
    objects.forEach((obj) => {
      obj.set("animationDelay", 0);
    });
    window.isSequenced = false;
  } else {
    // ⏩ SEQUENCE: Ek ke baad ek arrange karo
    console.log("DEBUG: Sequencing layers with 1.2s gap");
    objects.forEach((obj, i) => {
      const newDelay = i * 1200; // 1.2 second ka gap
      obj.set("animationDelay", newDelay);
    });
    window.isSequenced = true;
  }

  // ✅ UI aur Canvas update karein
  if (typeof refreshLayers === "function") refreshLayers();
  activeCanvas.renderAll();

  if (typeof saveHistory === "function") saveHistory();
  if (window.fullStop) {
    window.fullStop();
  }
};
window.toggleLayerVisibility = function (index) {
  const objects = activeCanvas.getObjects();
  const obj = objects[index];
  if (!obj) return;

  // 1. Toggle visibility status
  const newVisibility = !obj.visible;
  obj.set("visible", newVisibility);

  // 2. AGAR OBJECT GAYAB HO RAHA HAI (newVisibility is false)
  // Toh uski selection bhi hata do taaki controls na dikhein
  if (!newVisibility) {
    const activeObj = activeCanvas.getActiveObject();
    // Check karein ki kya wahi object selected hai jise hide kiya ja raha hai
    if (activeObj === obj) {
      activeCanvas.discardActiveObject();
    }
  }

  // 3. Canvas ko refresh karein
  activeCanvas.renderAll();

  // 4. Layer UI ko refresh karein (eye icon change karne ke liye)
  refreshLayers();

  // 5. History save karein
  if (typeof saveHistory === "function") saveHistory();
};

// =========================================================
// 1. GLOBAL AUDIO SETUP (Function ke bahar declare karein)
// =========================================================
if (!window.exportAudioCtx) {
  window.exportAudioCtx = new (
    window.AudioContext || window.webkitAudioContext
  )();
  window.exportDest = window.exportAudioCtx.createMediaStreamDestination();
}

window.exportVideo = async function () {
  /**
   * 🎬 exportVideo()
   *
   * Exports Fabric canvas timeline as synced WebM video.
   *
   * Features:
   * - Captures canvas as video
   * - Merges video + music + voice into one stream
   * - Exports full timeline with animations
   * - Starts from exact 0s timeline state
   * - Fixes text showing early in first frame
   * - Syncs video/audio playback by layer timing
   * - Uses reusable AudioContext + media nodes
   * - Auto stops at timeline end
   * - Auto downloads exported .webm
   * - Restores original editor state after export
   */

  return new Promise(async (resolve, reject) => {
    try {
      console.log("🎬 [Export] Process Started");

      const audioCtx = window.exportAudioCtx;
      const dest = window.exportDest;

      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
        console.log("🎙️ [Export] AudioContext Resumed");
      }

      // =========================
      // INITIAL CLEANUP
      // =========================
      activeCanvas.discardActiveObject();
      activeCanvas.renderAll();

      const btn = document.getElementById("export-video-btn");
      if (btn) {
        btn.innerHTML = `<i data-lucide="loader-2" class="w-3.5 h-3.5 animate-spin"></i> Preparing Media...`;
        btn.disabled = true;
        if (window.lucide) lucide.createIcons();
      }

      const canvasElement =
        activeCanvas.lowerCanvasEl || document.querySelector("canvas");
      const objects = activeCanvas.getObjects().filter((obj) => !obj.isHelper);

      // =========================
      // DURATION CALC
      // =========================
      let maxEndTime = 0;
      objects.forEach((obj) => {
        const end =
          (obj.animationDelay || 0) +
          (obj.totalDuration || obj.animationDuration || 1000);
        if (end > maxEndTime) maxEndTime = end;
      });

      const finalDuration = Math.max(5000, maxEndTime + 500);
      console.log("⏱ [Export] Duration:", finalDuration, "ms");

      // =========================
      // PREP AUDIO SOURCES
      // =========================
      for (const obj of objects) {
        const isMusic = obj.role === "music" || obj.isMusic;
        const isVoice = obj.role === "voice" || obj.isVoice;

        if (!(isMusic || isVoice)) continue;

        try {
          if (!obj.audioInstance) {
            if (obj.dbId) {
              const blob = await getBlobFromExistingDB(obj.dbId);
              if (blob)
                obj.audioInstance = new Audio(URL.createObjectURL(blob));
            } else if (obj.musicUrl || obj.voiceUrl) {
              obj.audioInstance = new Audio(obj.musicUrl || obj.voiceUrl);
            }
          }

          if (obj.audioInstance) {
            obj.audioInstance.preload = "auto";
            obj.audioInstance.crossOrigin = "anonymous";
          }
        } catch (e) {
          console.warn(`⚠️ [Export] Prep Error for ${obj.role}:`, e.message);
        }
      }

      // =========================
      // STREAM & RECORDER SETUP
      // =========================
      const videoStream = canvasElement.captureStream(60);
      const combinedStream = new MediaStream();

      videoStream
        .getVideoTracks()
        .forEach((track) => combinedStream.addTrack(track));
      dest.stream
        .getAudioTracks()
        .forEach((track) => combinedStream.addTrack(track));

      const mediaRecorder = new MediaRecorder(combinedStream, {
        mimeType: "video/webm; codecs=vp9",
        videoBitsPerSecond: 8000000,
      });

      let recordedChunks = [];
      let isRecording = true;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) recordedChunks.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        console.log("🛑 [Export] Recorder Stopped");

        // =========================
        // RESTORE ORIGINAL EDITOR STATE
        // =========================
        objects.forEach((obj) => {
          if (!obj._exportBackup) return;

          obj.set({
            opacity: obj._exportBackup.opacity,
            visible: obj._exportBackup.visible,
            left: obj._exportBackup.left,
            top: obj._exportBackup.top,
            scaleX: obj._exportBackup.scaleX,
            scaleY: obj._exportBackup.scaleY,
            angle: obj._exportBackup.angle,
            objectCaching: obj._exportBackup.objectCaching,
            dirty: true,
          });

          delete obj._exportBackup;
        });

        activeCanvas.renderAll();

        const blob = new Blob(recordedChunks, { type: "video/webm" });
        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.href = url;
        a.download = `story-${Date.now()}.webm`;
        a.click();

        setTimeout(() => URL.revokeObjectURL(url), 3000);

        if (btn) {
          btn.innerHTML = `<i data-lucide="video" class="w-3.5 h-3.5"></i> Export Video`;
          btn.disabled = false;
          if (window.lucide) lucide.createIcons();
        }

        resolve();
      };

      // =========================
      // SAVE ORIGINAL EDITOR STATE
      // =========================
      objects.forEach((obj) => {
        obj._exportBackup = {
          opacity: obj.opacity,
          visible: obj.visible,
          left: obj.left,
          top: obj.top,
          scaleX: obj.scaleX,
          scaleY: obj.scaleY,
          angle: obj.angle,
          objectCaching: obj.objectCaching,
        };
      });

      // =========================
      // FORCE EXACT 0s FRAME
      // =========================
      objects.forEach((obj) => {
        const delay = obj.animationDelay || 0;
        const hasAnim = obj.animationType && obj.animationType !== "none";

        const isAudio = obj.role === "music" || obj.role === "voice";
        const isText =
          obj.type === "text" ||
          obj.type === "i-text" ||
          obj.type === "textbox";

        let visibleAtZero = delay <= 0;

        if (isAudio) visibleAtZero = false;

        obj.set({
          opacity: visibleAtZero && !hasAnim ? 1 : 0,
          visible: visibleAtZero,
          dirty: true,
        });

        if (isText) {
          obj.set({
            objectCaching: false,
            dirty: true,
          });
        }
      });

      activeCanvas.renderAll();

      objects.forEach((obj) => {
        obj.dirty = true;
      });

      activeCanvas.renderAll();

      // =========================
      // PLAYBACK LOGIC
      // =========================
      const renderLoop = () => {
        if (!isRecording) return;
        activeCanvas.renderAll();
        requestAnimationFrame(renderLoop);
      };

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          mediaRecorder.start();
          renderLoop();

          setTimeout(() => {
            objects.forEach((obj) => {
              const delay = obj.animationDelay || 0;
              const duration =
                obj.totalDuration || obj.animationDuration || 1000;

              setTimeout(() => {
                if (!isRecording) return;

                // =========================
                // VISUALS
                // =========================
                if (obj.animationType && obj.animationType !== "none") {
                  obj.set({
                    visible: true,
                    opacity: 0,
                    dirty: true,
                  });

                  window.playPreview?.(obj, obj.animationType);
                } else {
                  obj.set({
                    visible: true,
                    opacity: 1,
                    dirty: true,
                  });
                }

                // =========================
                // AUDIO / VIDEO
                // =========================
                const isVideo = obj.role === "video" || obj.isVideo;
                const mediaEl = isVideo
                  ? obj.getElement?.()
                  : obj.audioInstance;

                if (mediaEl) {
                  try {
                    if (!mediaEl._globalNode) {
                      mediaEl._globalNode =
                        audioCtx.createMediaElementSource(mediaEl);
                      console.log(
                        `🔗 [Export] Created Node for ${obj.role || "video"}`,
                      );
                    }

                    mediaEl._globalNode.disconnect();
                    mediaEl._globalNode.connect(dest);
                    mediaEl._globalNode.connect(audioCtx.destination);

                    mediaEl.currentTime = 0;
                    mediaEl.muted = false;
                    mediaEl.volume = obj.role === "music" ? 0.5 : 1.0;

                    mediaEl
                      .play()
                      .catch((e) => console.warn("Playback blocked:", e));

                    setTimeout(() => {
                      mediaEl.pause();
                    }, duration);
                  } catch (connErr) {
                    console.error(
                      "❌ [Export] Audio Connection Error:",
                      connErr,
                    );
                  }
                }
              }, delay);
            });
          }, 100);
        });
      });

      // =========================
      // STOP EXPORT
      // =========================
      setTimeout(() => {
        isRecording = false;
        if (mediaRecorder.state !== "inactive") mediaRecorder.stop();
      }, finalDuration);
    } catch (err) {
      console.error("❌ [Export] Fatal Error:", err);
      reject(err);
    }
  });
};

window.playAllAnimations = function () {
  if (!activeCanvas) return;

  window.isPlaying = true;
  if (window.timelineRAF) cancelAnimationFrame(window.timelineRAF);

  const playhead = document.getElementById("playhead");
  const pxPerSec = 30;
  const startOffset = 100;
  if (!playhead) return;

  activeCanvas.discardActiveObject();

  const currentLeft = parseFloat(playhead.style.left) || startOffset;
  const startTime = performance.now();

  // -----------------------------
  // OFFSET CALCULATION
  // -----------------------------
  const baseElapsedMs = ((currentLeft - startOffset) / pxPerSec) * 1000;

  const objects = activeCanvas.getObjects().filter((obj) => !obj.isHelper);

  // Sabhi objects ko reset karein taaki 0s wali animation dobara chal sake
  objects.forEach((obj) => {
    if (baseElapsedMs <= (obj.animationDelay || 0)) {
      obj._played = false;
    }
  });

  let maxEndTime = 0;
  objects.forEach((obj) => {
    const d = obj.totalDuration || 1000;
    const s = obj.animationDelay || 0;
    maxEndTime = Math.max(maxEndTime, s + d);
  });

  function loop() {
    if (!window.isPlaying) return;

    const now = performance.now();
    const elapsedMs = baseElapsedMs + (now - startTime);

    if (elapsedMs >= maxEndTime) {
      window.isPlaying = false;
      playhead.style.left = `${startOffset}px`;
      // Stop all media
      objects.forEach((o) => {
        const m =
          o.role === "video" || o.isVideo ? o.getElement() : o.audioInstance;
        if (m) m.pause();
      });
      if (window.fullStop) window.fullStop();
      return;
    }

    const playheadLeft = startOffset + (elapsedMs / 1000) * pxPerSec;
    playhead.style.left = `${playheadLeft}px`;

    objects.forEach((obj) => {
      const delay = obj.animationDelay || 0;
      const duration = obj.totalDuration || 1000;
      const endTime = delay + duration;

      const isActive = elapsedMs >= delay && elapsedMs <= endTime;
      const localTime = elapsedMs - delay;
      const isMedia =
        obj.role === "video" ||
        obj.isVideo ||
        obj.role === "music" ||
        obj.isMusic ||
        obj.role === "voice" ||
        obj.isVoice;

      if (isActive) {
        // --- ACTIVE ZONE ---
        if (isMedia) {
          obj.set({ opacity: 1, visible: true });
          const media =
            obj.role === "video" || obj.isVideo
              ? obj.getElement()
              : obj.audioInstance ||
                (obj.audioInstance = new Audio(
                  obj.voiceUrl || obj.musicUrl || obj.src,
                ));
          if (media) {
            const targetTime = (obj.videoStartOffset || 0) + localTime / 1000;
            if (Math.abs(media.currentTime - targetTime) > 0.5)
              media.currentTime = targetTime;
            if (media.paused) media.play().catch(() => {});
          }
        } else {
          // --- TEXT/IMAGE ANIMATION ---
          if (!obj._played) {
            obj._played = true;
            obj.set({ opacity: 1, visible: true }); // Pehle show karo
            if (window.playPreview) {
              window.playPreview(obj, obj.animationType || "fadeIn");
            }
          }
        }
      } else {
        // --- OUT OF ZONE ---
        // Agar playhead delay se peeche hai ya end se aage, toh hide karo
        if (elapsedMs < delay || elapsedMs > endTime) {
          obj.set({ opacity: 0, visible: false });
          if (elapsedMs < delay) obj._played = false; // Reset for rewind
        }

        if (isMedia) {
          const media =
            obj.role === "video" || obj.isVideo
              ? obj.getElement()
              : obj.audioInstance;
          if (media && !media.paused) media.pause();
        }
      }
    });

    activeCanvas.renderAll();
    window.timelineRAF = requestAnimationFrame(loop);
  }

  window.timelineRAF = requestAnimationFrame(loop);
};
let draggedItemIndex = null;

let lastSwapIndex = null;

window.handleDragStart = function (e) {
  const row = e.currentTarget;
  draggedItemIndex = parseInt(row.getAttribute("data-index"));
  lastSwapIndex = draggedItemIndex;

  const dragImage = new Image();
  dragImage.src =
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  e.dataTransfer.setDragImage(dragImage, 0, 0);

  e.dataTransfer.setData("text/plain", draggedItemIndex);
  e.dataTransfer.effectAllowed = "move";

  setTimeout(() => {
    row.classList.add("dragging-active");
  }, 0);
};

window.handleDragEnd = function (e) {
  e.currentTarget.classList.remove("dragging-active");
  document
    .querySelectorAll(".layer-row")
    .forEach((r) => r.classList.remove("drag-over"));

  draggedItemIndex = null;
  lastSwapIndex = null;
};

window.handleDragOver = function (event) {
  event.preventDefault();
  const draggingIndex = window.draggingIndex; // Jo aapne dragstart par set kiya tha
  const targetRow = event.target.closest(".layer-row");

  if (targetRow) {
    const targetIndex = parseInt(targetRow.getAttribute("data-index"));
    if (draggingIndex !== targetIndex) {
      window.swapLayerRows(draggingIndex, targetIndex);
      window.draggingIndex = targetIndex; // Update dragging index after swap
    }
  }
};

window.handleDragLeave = function (e) {
  const row = e.currentTarget.closest(".layer-row");
  if (row) row.classList.remove("drag-over");
};

window.handleDrop = function (e) {
  e.preventDefault();
  document
    .querySelectorAll(".layer-row")
    .forEach((r) => r.classList.remove("drag-over"));
};

window.swapLayerRows = function (index1, index2) {
  // Error fix: 'layers' ko define karein
  const allObjects = activeCanvas.getObjects().filter((obj) => !obj.isHelper);

  const obj1 = allObjects[index1];
  const obj2 = allObjects[index2];

  if (obj1 && obj2) {
    // Fabric.js swap logic (Moving object in stack)
    // Note: index2 ke base par moveObject use karein
    activeCanvas.moveTo(obj1, index2);

    // UI update karein
    window.refreshLayers();
    activeCanvas.requestRenderAll();
  }
};

window.musicModal = function () {
  const container = document.getElementById("music-list-container");
  if (!container) return;

  // Hide scrollbar, but keep touch horizontal scroll
  container.className =
    "grid grid-rows-2 grid-flow-col gap-4 overflow-x-auto overflow-y-hidden pb-4 snap-x scrollbar-hide touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none]";

  // extra safe scrollbar hide
  container.style.webkitOverflowScrolling = "touch";
  container.style.scrollbarWidth = "none";
  container.style.msOverflowStyle = "none";

  let htmlContent = ``;

  window.MUSIC_LIBRARY.forEach((track) => {
    const url = `/INDIA/BOLLYWOOD/audio/${track.filename}`;
    htmlContent += musicBtn(
      track.title,
      url,
      "music",
      track.genre,
      track.id,
      track.thumbnail,
    );
  });

  container.innerHTML = htmlContent;
  if (window.lucide) window.lucide.createIcons();
  if (typeof openSub === "function") openSub("sub-modal-music");
};

window.musicBtn = function (
  title,
  url,
  icon,
  genre = "Pop",
  dbId = "",
  thumbnail = "",
) {
  const isCustom = !!dbId;
  const safeTitle = title.replace(/'/g, "\\'");

  const visualContent = thumbnail
    ? `<div class="absolute inset-0 z-0">
         <img src="/INDIA/BOLLYWOOD/audio/thumbnails/${thumbnail}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80" alt="${title}">
         <div class="absolute inset-0 bg-gradient-to-t from-[#0f1012] via-transparent to-transparent"></div>
       </div>`
    : `<div class="absolute inset-0 bg-[#1a1b1e] z-0 flex items-center justify-center overflow-hidden">
          <div class="flex items-end gap-1 h-8 wave-container opacity-20 pointer-events-none">
            <div class="w-[2px] bg-indigo-500 rounded-full h-4 wave-bar"></div>
            <div class="w-[2px] bg-indigo-500 rounded-full h-7 wave-bar"></div>
            <div class="w-[2px] bg-indigo-500 rounded-full h-5 wave-bar"></div>
          </div>
       </div>`;

  return `
    <div class="flex-shrink-0 w-36 group snap-start mb-6" data-music-wrapper="${url}">
      <div class="relative aspect-[1/1.2] bg-[#16171a] rounded-[24px] overflow-hidden border border-white/5 group-hover:border-indigo-500/50 transition-all duration-300 shadow-xl">
        
        <button 
          onclick="window.toggleMusicPreview(this, '${url}')"
          class="music-preview-btn absolute inset-0 z-10 w-full h-full bg-transparent flex flex-col justify-end p-4 text-left appearance-none">
          
          ${visualContent}

          <div class="flex items-center justify-between w-full relative z-20">
             <div class="play-state-icon text-white transition-transform active:scale-90">
                <i data-lucide="play" class="w-5 h-5 fill-current play-svg"></i>
                <i data-lucide="pause" class="w-5 h-5 fill-current pause-svg hidden"></i>
             </div>
             
             <div 
                onclick="
                  event.stopPropagation(); 
                  if(window.killMusicPreview) window.killMusicPreview(); 
                  window.addMusic('${url}', '${safeTitle}'); 
                  if(window.closeSubModal) window.closeSubModal();
                "
                class="text-white hover:text-indigo-400 transition-all active:scale-75 cursor-pointer pointer-events-auto">
                <i data-lucide="plus" class="w-5 h-5" style="stroke-width: 3.5px;"></i>
             </div>
          </div>
        </button>
      </div>

      <div class="mt-3 px-1">
        <h4 class="text-[12px] font-bold text-indigo-400 truncate tracking-tight drop-shadow-sm">${title}</h4>
        <p class="text-[9px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">${genre}</p>
      </div>
    </div>
  `;
};

window.toggleMusicPreview = function (btn, url) {
  if (!url) return;

  // FIXED CONDITION: Using .endsWith or .includes to handle absolute vs relative paths
  if (
    window.currentPreview &&
    window.currentPreview.src.includes(url) &&
    !window.currentPreview.paused
  ) {
    window.killMusicPreview();
    return;
  }

  window.killMusicPreview();

  window.currentPreview = new Audio(url);
  window.currentPreview.volume = 0.5;

  btn.classList.add("is-playing", "border-indigo-500");

  window.currentPreview
    .play()
    .then(() => console.log("Playback started."))
    .catch((e) => console.error("Error:", e));

  window.currentPreview.onended = () => window.killMusicPreview();
};

window.killMusicPreview = function () {
  // Reset all music buttons UI
  document.querySelectorAll(".music-preview-btn").forEach((btn) => {
    btn.classList.remove("is-playing", "border-indigo-500");
  });

  if (window.currentPreview) {
    window.currentPreview.pause();
    window.currentPreview.currentTime = 0;
    window.currentPreview = null;
  }
};

window.selectMusic = function (url) {
  // stop old music
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (!url) return; // No music option

  currentAudio = new Audio(url);
  currentAudio.loop = true;
  currentAudio.volume = 0.5;
  currentAudio.play();
};

window.stopAllPlayback = function () {
  window.isPlaying = false;

  const playhead = document.getElementById("playhead");

  if (playhead) {
    const computedLeft = window.getComputedStyle(playhead).left;
    playhead.style.transition = "none";
    playhead.style.left = computedLeft;
  }

  if (window.timelineTimeouts) {
    window.timelineTimeouts.forEach((t) => clearTimeout(t));
    window.timelineTimeouts = [];
  }

  activeCanvas.getObjects().forEach((obj) => {
    if (obj.audioInstance) {
      obj.audioInstance.pause();
    }

    if ((obj.role === "video" || obj.isVideo) && obj.getElement()) {
      const videoEl = obj.getElement();

      if (videoEl && typeof videoEl.pause === "function") {
        videoEl.pause();
        videoEl.currentTime = videoEl.currentTime;
      }
    }

    if (obj.opacity === 0 && !obj.isHelper) {
      obj.set("opacity", 1);
    }
  });

  const allPlayBtns = document.querySelectorAll(
    "button[onclick*='handlePlayToggle']",
  );

  allPlayBtns.forEach((btn) => {
    btn.style.backgroundColor = "#2563eb";
    btn.style.boxShadow = "0 4px 12px rgba(37, 99, 235, 0.3)";

    const iconSpan =
      btn.querySelector(".play-icon-container") || btn.querySelector("span");

    const textSpan =
      btn.querySelector(".play-text-container") ||
      btn.querySelector("#play-btn-text");

    if (iconSpan) {
      const isSidebar = btn.closest(".video-sidebar");
      const size = isSidebar ? "w-5 h-5" : "w-3.5 h-3.5";
      iconSpan.innerHTML = `<i data-lucide="play" class="${size} fill-current"></i>`;
    }

    if (textSpan) textSpan.innerText = "Play";
  });

  if (window.lucide) lucide.createIcons();

  activeCanvas.requestRenderAll();
  console.log("🛑 Playback paused at current position");
};

// ⏯️ Handle Play/Pause Toggle
window.handlePlayToggle = function () {
  // 1. State toggle
  window.isPlaying = !window.isPlaying;

  // 2. Play/Stop Logic Call
  if (window.isPlaying) {
    if (typeof window.playAllAnimations === "function")
      window.playAllAnimations();
  } else {
    if (typeof window.stopAllPlayback === "function") window.stopAllPlayback();
  }

  // 3. Sabhi Icons aur Texts ko dhoondhein
  const iconContainers = document.querySelectorAll(".play-icon-container");
  const textContainers = document.querySelectorAll(".play-text-container");
  const allPlayBtns = document.querySelectorAll(
    "[onclick='handlePlayToggle()']",
  );

  // 4. Icons Update Karein
  iconContainers.forEach((container) => {
    // Check karein ki ye sidebar ka hai ya timeline ka (size maintain karne ke liye)
    const isSidebar = container.closest(".video-sidebar");
    const iconSize = isSidebar ? "w-5 h-5" : "w-3.5 h-3.5";

    const iconName = window.isPlaying ? "pause" : "play";
    container.innerHTML = `<i data-lucide="${iconName}" class="${iconSize} fill-current"></i>`;
  });

  // 5. Text Update Karein (Play -> Stop)
  textContainers.forEach((txt) => {
    txt.innerText = window.isPlaying ? "Stop" : "Play";
  });

  // 6. Colors/Glow Update Karein (Capcut Style)
  allPlayBtns.forEach((btn) => {
    if (window.isPlaying) {
      btn.style.backgroundColor = "#f43f5e"; // Rose Red
      btn.style.boxShadow = "0 0 15px rgba(244, 63, 94, 0.4)";
    } else {
      btn.style.backgroundColor = "#2563eb"; // Capcut Blue
      btn.style.boxShadow = "0 0 15px rgba(37, 99, 235, 0.4)";
    }
  });

  // 7. Lucide Icons ko refresh karein (Ye step icons dikhane ke liye CRITICAL hai)
  if (window.lucide) {
    lucide.createIcons();
  }

  if (typeof window.refreshLayers === "function") window.refreshLayers();
};

// ⏹️ Full Stop & Reset to Start
window.fullStop = function () {
  window.stopAllPlayback();

  const playhead = document.getElementById("playhead");
  const startOffset = 100;

  if (playhead) {
    playhead.style.transition = "none";
    playhead.style.left = `${startOffset}px`;
  }

  activeCanvas.getObjects().forEach((obj) => {
    if (obj.audioInstance) {
      obj.audioInstance.currentTime = 0;
    }

    if ((obj.role === "video" || obj.isVideo) && obj.getElement()) {
      const videoEl = obj.getElement();
      videoEl.pause();
      videoEl.currentTime = obj.videoStartOffset || 0.1;
    }
  });

  const btnText = document.getElementById("play-btn-text");
  const btnIcon = document.getElementById("play-btn-icon");

  if (btnText) btnText.innerText = "Play";

  if (btnIcon) {
    btnIcon.innerHTML =
      '<i data-lucide="play" class="w-3 h-3 fill-current"></i>';
  }

  if (window.lucide) window.lucide.createIcons();

  activeCanvas.discardActiveObject();
  activeCanvas.requestRenderAll();
  if (window.syncTimelineVisibility) {
    window.syncTimelineVisibility();
  }
  console.log("⏹️ Full Stop: Timeline Reset to Zero");
};

// 💡 PRO TIP: playAllAnimations ke tEnd timeout (natural finish) par bhi window.fullStop() call karein

window.voiceModal = async function () {
  const container = document.getElementById("voice-list-container");
  if (!container) return;

  // Static Voices (Hamesha dikhengi)
  let htmlContent = `
    ${voiceBtn("No Voice", "", "mic-off", "None")}
    ${voiceBtn("Male Narrator", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", "user", "Male")}
    ${voiceBtn("Female AI", "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", "bot", "Female")}
  `;

  if (db) {
    try {
      // FIX: Store name 'recordings' use kiya hai
      const transaction = db.transaction(["recordings"], "readonly");
      const store = transaction.objectStore("recordings");
      const request = store.getAll();

      request.onsuccess = () => {
        const allData = request.result;
        // Sirf 'voice' type ka data filter karein
        const recordedVoices = allData.filter((item) => item.type === "voice");

        recordedVoices.forEach((v) => {
          // Blob se URL create karein agar direct URL nahi hai
          const blobUrl = v.audio ? URL.createObjectURL(v.audio) : v.url;
          htmlContent += voiceBtn(
            v.title || "Voice Note",
            blobUrl,
            "mic",
            "User",
            v.id,
          );
        });

        container.innerHTML = htmlContent;
        if (window.lucide) window.lucide.createIcons();
      };
    } catch (err) {
      console.error("Voice Modal DB Error:", err);
      container.innerHTML = htmlContent; // Error pe bhi static dikhao
    }
  } else {
    container.innerHTML = htmlContent;
  }

  if (typeof openSub === "function") openSub("sub-modal-voice");
};

window.voiceBtn = function (title, url, icon, voiceType = "Voice", dbId = "") {
  const isCustom = !!dbId;
  const safeTitle = title.replace(/'/g, "\\'"); // Single quotes escape karein taaki JS break na ho

  return `
    <div class="flex-shrink-0 flex flex-col items-center gap-2 group" data-voice-wrapper="${url}">
      <button 
        onclick="window.toggleVoicePreview(this, '${url}')"
        class="voice-preview-btn relative w-24 h-28 bg-[#1e1e20] hover:bg-[#25262a] rounded-2xl border border-white/5 hover:border-rose-500/50 transition-all duration-300 flex flex-col items-center justify-between py-4 shadow-xl overflow-hidden">
        
        <div class="absolute top-2 left-0 right-0 px-2 flex justify-between items-center w-full z-10">
            <div>
              ${
                isCustom
                  ? `
                <div onclick="event.stopPropagation(); window.deleteVoiceFromDB(${dbId});" class="p-1 hover:bg-red-500/20 rounded-md transition-colors text-gray-500 hover:text-red-500 cursor-pointer">
                  <i data-lucide="trash-2" class="w-3 h-3"></i>
                </div>
              `
                  : "<span></span>"
              }
            </div>
            
            <span class="text-[7px] font-bold text-gray-600 uppercase tracking-widest pointer-events-none">
               ${isCustom ? "Recorded" : "System"} 
            </span>
        </div>

        <div class="flex items-end gap-[3px] h-8 mt-6 pointer-events-none wave-container">
           <div class="w-[3px] bg-rose-500/40 rounded-full h-3 wave-bar"></div>
           <div class="w-[3px] bg-rose-500/60 rounded-full h-6 wave-bar"></div>
           <div class="w-[3px] bg-rose-500 rounded-full h-4 wave-bar"></div>
           <div class="w-[3px] bg-rose-500/60 rounded-full h-6 wave-bar"></div>
           <div class="w-[3px] bg-rose-500/40 rounded-full h-3 wave-bar"></div>
        </div>

        <div class="flex items-center justify-between w-full px-3 mt-auto relative z-30">
           <div class="play-state-icon text-rose-500">
              <i data-lucide="play" class="w-4 h-4 fill-current play-svg"></i>
              <i data-lucide="pause" class="w-4 h-4 fill-current pause-svg hidden"></i>
           </div>
           
           <div onclick="
                event.stopPropagation(); 
                if(window.killVoicePreview) window.killVoicePreview(); 
                window.addVoice('${url}', '${safeTitle}', '${dbId}'); 
                if(window.closeSubModal) window.closeSubModal();
              " 
                class="bg-white text-rose-900 hover:bg-rose-600 hover:text-white p-1 rounded-md transition-all active:scale-125 cursor-pointer shadow-lg border border-white/5">
              <i data-lucide="plus" class="w-3.5 h-3.5" style="stroke-width: 4px;"></i>
           </div>
        </div>
      </button>

      <span class="text-[10px] font-medium text-gray-400 text-center w-24 truncate">
        ${title}
      </span>
    </div>
  `;
};

window.voicePreviewAudio = null;

window.toggleVoicePreview = function (btn, url) {
  if (!url) return;

  // Agar wahi audio baj raha hai, toh kill karke return ho jao
  if (
    window.voicePreviewAudio &&
    window.voicePreviewAudio.src === url &&
    !window.voicePreviewAudio.paused
  ) {
    window.killVoicePreview();
    return;
  }

  // Purane sab band karo
  window.killVoicePreview();

  // Naya audio create karo
  window.voicePreviewAudio = new Audio(url);

  // UI Update: Class add karein (Isi se animation chalta hai)
  btn.classList.add("is-playing");
  btn.classList.add("border-rose-500"); // Optional: Border glow ke liye

  window.voicePreviewAudio.play();

  // Jab audio khatam ho jaye, animation rok do
  window.voicePreviewAudio.onended = () => {
    window.killVoicePreview();
  };
};

window.killVoicePreview = function () {
  // Sabhi buttons se animation class hatao
  document.querySelectorAll(".voice-preview-btn").forEach((b) => {
    b.classList.remove("is-playing");
    b.classList.remove("border-rose-500");
  });

  if (window.voicePreviewAudio) {
    window.voicePreviewAudio.pause();
    window.voicePreviewAudio.currentTime = 0;
    window.voicePreviewAudio = null;
  }
};

window.killVoicePreview = function () {
  // Sabhi buttons se pause icon hatao aur play dikhao
  document.querySelectorAll(".voice-preview-btn").forEach((btn) => {
    btn.querySelector(".play-svg").classList.remove("hidden");
    btn.querySelector(".pause-svg").classList.add("hidden");
    btn.classList.remove("ring-2", "ring-rose-400");
  });

  if (window.voicePreviewAudio) {
    window.voicePreviewAudio.pause();
    window.voicePreviewAudio.currentTime = 0;
    window.voicePreviewAudio = null;
  }
};

window.deleteVoiceFromDB = function (id) {
  if (!db) return;

  // Convert id to Number if it looks like one
  const numericId = isNaN(id) ? id : Number(id);

  if (!confirm("Delete this recording?")) return;

  try {
    const transaction = db.transaction(["recordings"], "readwrite");
    const store = transaction.objectStore("recordings");

    // Check if ID exists before deleting (For Debugging)
    const getReq = store.get(numericId);

    getReq.onsuccess = () => {
      if (getReq.result) {
        const request = store.delete(numericId);

        request.onsuccess = () => {
          console.log(
            "%c✅ Successfully deleted from DB:",
            "color: green",
            numericId,
          );
          // UI update turant karne ke liye modal call karein
          window.voiceModal();
        };
      } else {
        console.error(
          "%c❌ ID not found in DB store:",
          "color: red",
          numericId,
        );
        // Agar simple number se nahi mila, to shayad string format mein ho
        store.delete(id.toString());
      }
    };

    transaction.oncomplete = () => {
      console.log("Transaction fully committed.");
    };
  } catch (err) {
    console.error("Delete Transaction Error:", err);
  }
};

let audioChunks = [];

// Array to store recorded clips
window.recordedVoices = [];

window.toggleRecording = async function () {
  const btn = document.getElementById("record-voice-btn");
  const statusText = document.getElementById("record-status");

  // 🛑 STOP RECORDING LOGIC
  if (window.mediaRecorder && window.mediaRecorder.state === "recording") {
    window.mediaRecorder.stop();
    window.mediaRecorder.stream.getTracks().forEach((track) => track.stop());

    btn.classList.remove("animate-pulse", "bg-black");
    btn.classList.add("bg-red-500");
    return;
  }

  // 🎤 START RECORDING LOGIC
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    window.mediaRecorder = new MediaRecorder(stream);
    let chunks = [];

    window.mediaRecorder.ondataavailable = (e) => chunks.push(e.data);

    window.mediaRecorder.onstop = async () => {
      const audioBlob = new Blob(chunks, { type: "audio/mpeg" });
      const timestamp = new Date().toLocaleTimeString();

      // Meta-data properties
      const mediaType = "voice";
      const currentPageId = window.activePageId || "page_1"; // Apni page ID variable use karein

      // --- SAVE TO INDEXEDDB ---
      const transaction = db.transaction(["recordings"], "readwrite");
      const store = transaction.objectStore("recordings");

      const entry = {
        title: `Voice ${window.recordedVoices.length + 1}`,
        audio: audioBlob,
        timestamp: timestamp,
        type: mediaType,
        pageId: currentPageId,
      };

      const addRequest = store.add(entry);

      addRequest.onsuccess = (e) => {
        const newId = e.target.result;
        const audioUrl = URL.createObjectURL(audioBlob);

        // UI array update karein
        window.recordedVoices.push({
          id: newId,
          title: entry.title,
          url: audioUrl,
          time: timestamp,
          type: mediaType,
          pageId: currentPageId,
        });

        window.refreshVoiceList();
        statusText.innerText = "Saved to Storage! ✅";
        setTimeout(() => {
          statusText.innerText = "Tap to Record Voice";
        }, 2000);
      };
    };

    window.mediaRecorder.start();
    btn.classList.add("animate-pulse", "bg-black");
    btn.classList.remove("bg-red-500");
    statusText.innerText = "Recording... Tap to Stop";
  } catch (err) {
    console.error(err);
    alert("Microphone access denied or error occurred!");
  }
};

window.refreshVoiceList = function () {
  const container = document.getElementById("voice-list-container");
  if (!container) {
    console.warn("voice-list-container not found in DOM");
    return;
  }

  container.innerHTML = "";

  if (window.recordedVoices.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center w-full p-4 opacity-40">
        <i data-lucide="mic-off" class="w-8 h-8 mb-2"></i>
        <p class="text-[10px] font-bold uppercase">No Recordings Found</p>
      </div>
    `;
  } else {
    [...window.recordedVoices].reverse().forEach((v) => {
      // ✅ UPDATE: v.id ko 5th parameter (dbId) ke taur par bheja gaya hai
      container.innerHTML += window.voiceBtn(
        v.title,
        v.url,
        v.type === "video" ? "video" : "mic",
        "User",
        v.id, // 👈 Yeh dbId hai jo voiceBtn receive karega
      );
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// Video Button Helper
window.videoBtn = function (title, url, icon, type, dbId) {
  const isCustom = !!dbId;
  const videoId = `vid_${dbId || Math.random().toString(36).substr(2, 9)}`;
  const safeTitle = title.replace(/'/g, "\\'");

  return `
    <div class="flex-shrink-0 flex flex-col gap-2 group w-48" data-video-wrapper="${url}">
      <div class="relative w-full h-32 bg-[#18191b] rounded-2xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-all duration-300 shadow-xl">
        
        <video id="${videoId}" src="${url}" 
               class="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity pointer-events-none" 
               loop muted playsinline preload="metadata">
        </video>

        <div class="absolute top-2 left-0 right-0 px-2 flex justify-between items-center w-full z-20">
            <div>
              ${
                isCustom
                  ? `
                <div onclick="event.stopPropagation(); window.deleteVideoFromDB(${dbId});" 
                     class="bg-red-600/90 hover:bg-red-500 text-white p-1 rounded-md transition-all shadow-lg active:scale-125 cursor-pointer border border-white/10"
                     title="Delete Video">
                  <i data-lucide="trash-2" class="w-3 h-3"></i>
                </div>
              `
                  : "<span></span>"
              }
            </div>
            <span class="text-[7px] font-bold text-gray-300 uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded-full backdrop-blur-md border border-white/5">
               ${type || (isCustom ? "Recorded" : "Stock")} 
            </span>
        </div>

        <div onclick="window.toggleVideoPreview('${videoId}', this)" 
             class="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group-hover:bg-black/30 transition-all">
          <div class="play-icon-container bg-indigo-600/90 p-3 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
            <i data-lucide="play" class="w-5 h-5 text-white fill-current play-svg"></i>
            <i data-lucide="pause" class="w-5 h-5 text-white fill-current pause-svg hidden"></i>
          </div>
        </div>

        <div class="absolute bottom-2 right-2 z-30">
           <div onclick="event.stopPropagation(); window.killVideoPreview(); window.addVideo('${url}', '${safeTitle}', '${dbId}'); if(window.closeSubModal) window.closeSubModal();" 
                class="bg-white text-indigo-900 hover:bg-indigo-600 hover:text-white p-1.5 rounded-lg transition-all active:scale-125 cursor-pointer shadow-2xl">
              <i data-lucide="plus" class="w-4 h-4" style="stroke-width: 4px;"></i>
           </div>
        </div>

      </div>
      
      <span class="text-[10px] font-medium text-gray-400 truncate px-1 text-center">${title}</span>
    </div>
  `;
};

window.toggleVideoPreview = function (videoId, overlayElement) {
  const video = document.getElementById(videoId);
  const container = overlayElement.querySelector(".play-icon-container");
  const playIcon = container.querySelector(".play-svg");
  const pauseIcon = container.querySelector(".pause-svg");

  // 1. Agar ye video chal raha hai, toh stop karo
  if (!video.paused) {
    video.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
    container.classList.replace("bg-rose-600/90", "bg-indigo-600/90"); // Reset color
    return;
  }

  // 2. Stop all other videos
  window.killVideoPreview();

  // 3. Play current video
  video
    .play()
    .then(() => {
      playIcon.classList.add("hidden");
      pauseIcon.classList.remove("hidden");
      container.classList.replace("bg-indigo-600/90", "bg-rose-600/90"); // Highlight playing
      video.style.opacity = "1";
    })
    .catch((err) => console.error("Video play failed:", err));
};

window.killVideoPreview = function () {
  document.querySelectorAll("video").forEach((v) => {
    v.pause();
    v.style.opacity = ""; // Reset opacity

    // Reset icons of all videos
    const parent = v.parentElement;
    const playIcon = parent.querySelector(".play-svg");
    const pauseIcon = parent.querySelector(".pause-svg");
    const container = parent.querySelector(".play-icon-container");

    if (playIcon) playIcon.classList.remove("hidden");
    if (pauseIcon) pauseIcon.classList.add("hidden");
    if (container)
      container.classList.replace("bg-rose-600/90", "bg-indigo-600/90");
  });
};

window.deleteVideoFromDB = function (id) {
  if (!db) return;
  const numericId = isNaN(id) ? id : Number(id);

  if (!confirm("Are you sure you want to delete this video?")) return;

  const transaction = db.transaction(["recordings"], "readwrite");
  const store = transaction.objectStore("recordings");
  const request = store.delete(numericId);

  request.onsuccess = () => {
    console.log("✅ Video deleted from DB:", numericId);

    // --- MAIN FIX: Global Array se bhi delete karein ---
    if (window.recordedVoices) {
      window.recordedVoices = window.recordedVoices.filter(
        (v) => v.id !== numericId,
      );
    }

    // Ab list refresh karein, ye ab updated array uthayega
    window.refreshVideoList();
  };

  request.onerror = (err) => {
    console.error("Delete failed:", err);
  };
};

window.videoModal = function () {
  // 1. Pehle data ko refresh karo taaki latest uploads dikhein
  if (typeof window.refreshVideoList === "function") {
    window.refreshVideoList();
  } else {
    console.error("refreshVideoList function missing!");
  }

  // 2. Dedicated Video Modal ko open karo
  if (typeof window.openSub === "function") {
    window.openSub("sub-modal-video");
  } else {
    // Fallback agar openSub nahi hai
    document
      .querySelectorAll(".sub-tool-modal")
      .forEach((m) => (m.style.display = "none"));
    const vidModal = document.getElementById("sub-modal-video");
    if (vidModal) vidModal.style.display = "block";
  }

  // 3. Icons ko render karo (Lucide use kar rahe ho toh)
  if (window.lucide) {
    window.lucide.createIcons();
  }
};

// 2. Refresh List (Filter only videos)
window.refreshVideoList = function () {
  const container = document.getElementById("video-list-container");
  if (!container) return;

  container.innerHTML = "";
  const videoClips = (window.recordedVoices || []).filter(
    (v) => v.type === "video",
  );

  if (videoClips.length === 0) {
    container.innerHTML = `<p class="text-[10px] text-gray-400 py-6 italic w-full text-center">Library is empty. Upload a video to start!</p>`;
  } else {
    [...videoClips].reverse().forEach((v) => {
      container.innerHTML += window.videoBtn(
        v.title,
        v.url,
        "video",
        "Upload",
        v.id,
      );
    });
  }
  if (window.lucide) window.lucide.createIcons();
};

// 3. Handle File Upload to IndexedDB
window.handleVideoUpload = async function (event) {
  const file = event.target.files[0];
  if (!file || !db) return;

  // Basic Size Check (Optional)
  if (file.size > 50 * 1024 * 1024) {
    alert("File too large! Please keep it under 50MB.");
    return;
  }

  const transaction = db.transaction(["recordings"], "readwrite");
  const store = transaction.objectStore("recordings");

  const entry = {
    title: file.name.substring(0, 15),
    audio: file, // Saving file blob
    timestamp: new Date().toLocaleTimeString(),
    type: "video",
    pageId: window.activePageId || "page_1",
  };

  store.add(entry).onsuccess = (e) => {
    const newId = e.target.result;
    window.recordedVoices.push({
      id: newId,
      title: entry.title,
      url: URL.createObjectURL(file),
      type: "video",
    });
    window.refreshVideoList();
  };
};
