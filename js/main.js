let exportWorker = null;
// let mediaRecorder = null; need to change another var name bcoz its already exist for othere fun
let chunks = [];
let exportTime = 0;

// =========================
// INIT WORKER
// =========================
function initWorker() {
  exportWorker = new Worker("/js/export-worker.js");

  exportWorker.onmessage = (e) => {
    const data = e.data;

    // =========================
    // FRAME UPDATE
    // =========================
    if (data.type === "FRAME") {
      exportTime = data.time;
      renderExportFrame(data.timeline, exportTime);
    }

    // =========================
    // STOP EXPORT
    // =========================
    if (data.type === "STOP") {
      console.log("🛑 Worker finished → stopping recorder");

      setTimeout(() => {
        if (mediaRecorder && mediaRecorder.state !== "inactive") {
          mediaRecorder.stop();
        }
      }, 300); // flush buffer
    }
  };
}

// =========================
// EXPORT START (FIXED)
// =========================
function exportVideoWorker() {
  console.log("🚀 Export Started");

  if (!activeCanvas) {
    console.error("❌ activeCanvas missing");
    return;
  }

  if (!exportWorker) initWorker();

  chunks = [];

  // =========================
  // CANVAS STREAM
  // =========================
  const canvasStream = activeCanvas.lowerCanvasEl.captureStream(30);

  // =========================
  // SNAPSHOT TIMELINE
  // =========================
  const timeline = getTimelineSnapshot(activeCanvas);

  // =========================
  // COLLECT AUDIO TRACKS
  // =========================
  const audioTracks = [];
  timeline.forEach((obj) => {
    if (obj.musicSrc) {
      const audio = new Audio(obj.musicSrc);
      audio.crossOrigin = "anonymous";
      audio.loop = false;
      audio.play();

      const audioStream = audio.captureStream();
      audioStream.getAudioTracks().forEach((track) => {
        audioTracks.push(track);
      });
    }
  });

  // =========================
  // MERGE STREAMS
  // =========================
  const combinedStream = new MediaStream([
    ...canvasStream.getTracks(),
    ...audioTracks,
  ]);

  // =========================
  // MEDIA RECORDER
  // =========================
  mediaRecorder = new MediaRecorder(combinedStream, {
    mimeType: "video/webm; codecs=vp9",
    videoBitsPerSecond: 8000000,
  });

  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) {
      chunks.push(e.data);
    }
  };

  mediaRecorder.onstop = () => {
    console.log("📦 Finalizing export...");

    setTimeout(() => {
      const blob = new Blob(chunks, { type: "video/webm" });

      console.log("✅ Blob size:", blob.size);

      if (blob.size === 0) {
        console.error("❌ EMPTY EXPORT (render issue)");
        return;
      }

      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `export-${Date.now()}.webm`;
      a.click();

      chunks = [];
    }, 300);
  };

  // =========================
  // START WORKER
  // =========================
  exportWorker.postMessage({
    type: "START_EXPORT",
    timeline,
    width: activeCanvas.width,
    height: activeCanvas.height,
  });

  mediaRecorder.start();
  console.log("🎬 Recorder started");
}

// =========================
// FRAME RENDER ENGINE
// =========================
function renderExportFrame(timeline, time) {
  const objects = activeCanvas.getObjects();

  objects.forEach((obj) => {
    const start = obj.animationDelay || 0;
    const end = start + (obj.totalDuration || obj.animationDuration || 1000);

    // visibility control
    if (time >= start && time <= end) {
      obj.set("opacity", 1);
      obj.set("visible", true);
    } else {
      obj.set("opacity", 0);
      obj.set("visible", false);
    }
  });

  activeCanvas.requestRenderAll();
}

// =========================
// TIMELINE SNAPSHOT
// =========================
function getTimelineSnapshot(canvas) {
  return canvas
    .getObjects()
    .filter((obj) => !obj.isHelper)
    .map((obj) => ({
      dbId: obj.dbId,
      role: obj.role,
      delay: obj.animationDelay || 0,
      duration: obj.totalDuration || obj.animationDuration || 1000,
      videoSrc: obj.videoUrl || null,
      musicSrc: obj.musicUrl || obj.voiceUrl || null,
    }));
}

// =========================
// BUTTON
// =========================
document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("exportBtn")
    .addEventListener("click", exportVideoWorker);
});
