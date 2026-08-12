let canvas;
let color1 = "#93c5fd";
let canvasHistory = [];
let historyStep = -1;
let isStateChanging = false;
let activeMode = "select";
let zoomLevel = 1.0;
let clipboardObject = null;

let PAGE_WIDTH = 1152;
let PAGE_HEIGHT = 648;
let sizesState = { text: 36, shape: 2, brush: 16 };

const paintPalette = [
  "#000000",
  "#ffffff",
  "#7f7f7f",
  "#c3c3c3",
  "#4f46e5",
  "#a855f7",
  "#ed1c24",
  "#ff7f27",
  "#fff200",
  "#22b14c",
  "#00a2e8",
  "#3f48cc",
  "#ff6b6b", // 1. Cute Strawberry Pink / Soft Coral
  "#4ecdc4", // 2. Vibrant Turquoise / Magic Sky Blue
  "#10b981", // 3. Fresh Emerald Lime / Jungle Green
  "#f368e0", // 4. Playful Bright Magenta / Barbie Pink
  "#ff9f43", // 5. Sunlit Neon Orange / Tangerine
  "#ee5253", // 6. Festive Crimson Red / Bright Cherry
];

function checkKidsAuthStatus() {
  // चेक करें कि क्या लोकलस्टोरेज में नाम पहले से मौजूद है
  const savedUser = localStorage.getItem("kidspaint_username");

  if (!savedUser) {
    // अगर यूज़र नहीं है, तो मोडल को स्क्रीन पर दिखाएँ (Flex मोड में)
    const modal = document.getElementById("kids-auth-modal");
    if (modal) {
      modal.classList.replace("hidden", "flex");
    }
  } else {
    console.log(`✨ Welcome back artist: ${savedUser}`);
  }
}

let currentTemplateMeta = {
  id: "default-canvas",
  title: "Blank Canvas",
  category: "General",
  defaultTool: "select", // (Array ki jagah string better hai agar aap ek tool active kar rahe hain)
  label: "Free Drawing",
};

// 🛠️ 2. Helper to Update Template Metadata (Template Switch ke waqt use karein)
function setTemplateMeta(metaData = {}) {
  currentTemplateMeta = {
    id: metaData.id || "default-canvas",
    title: metaData.title || "Blank Canvas",
    category: metaData.category || "General",
    defaultTool: metaData.defaultTool || "select",
    label: metaData.label || "Free Drawing",
  };
}

// 🛠️ 3. Fabric.js toJSON Method Override: Root Level Metadata Binding
const originalCanvasToJSON = fabric.Canvas.prototype.toJSON;
fabric.Canvas.prototype.toJSON = function (propertiesToInclude) {
  const json = originalCanvasToJSON.call(this, propertiesToInclude);

  // Top-level properties binding (background ke sath)
  json.id = currentTemplateMeta.id;
  json.title = currentTemplateMeta.title;
  json.category = currentTemplateMeta.category;
  json.defaultTool = currentTemplateMeta.defaultTool;
  json.label = currentTemplateMeta.label;

  return json;
};

const baseDefaultObjectProps = {
  transparentCorners: false,
  cornerColor: "#ffffff",
  cornerStrokeColor: "#005afa",
  cornerSize: 8,
  cornerStyle: "rect",
  borderColor: "#005afa",
  hasRotatingPoint: false,
  lockRotation: true,
};

fabric.Object.prototype.set(baseDefaultObjectProps);

window.onload = () => {
  document.addEventListener("click", () => {
    hideShapesMenu();
  });

  // 🌟 यहाँ पर इस लाइन को जोड़ दें:
  // checkKidsAuthStatus();
  const paletteContainer = document.getElementById("palette-colors");
  paletteContainer.innerHTML = paintPalette
    .map(
      (color) =>
        `<div onclick="selectColor('${color}')" class="w-5 h-5 rounded border border-slate-300 cursor-pointer shadow-sm hover:scale-110 shrink-0" style="background: ${color}"></div>`,
    )
    .join("");

  // 📱 window.onload पर लाइव स्क्रीन साइज डिटेक्शन और कैनवास री-स्ट्रक्चरिंग
  if (window.innerWidth < 768) {
    // 📱 मोबाइल के लिए परफेक्ट वर्टिकल फ्रेम (100% फिट)
    PAGE_WIDTH = 800;
    PAGE_HEIGHT = 800;
  } else if (window.innerWidth >= 768 && window.innerWidth <= 1024) {
    // 📑 टैबलेट के लिए परफेक्ट फिट आनुपातिक साइज
    PAGE_WIDTH = 800;
    PAGE_HEIGHT = 600;
  } else {
    // 💻 डेस्कटॉप के लिए ओरिजिनल वाइडस्क्रीन साइज
    if (localStorage.getItem("kidspaint_width"))
      PAGE_WIDTH = parseInt(localStorage.getItem("kidspaint_width"), 10);
    if (localStorage.getItem("kidspaint_height"))
      PAGE_HEIGHT = parseInt(localStorage.getItem("kidspaint_height"), 10);
  }

  setupCanvas(PAGE_WIDTH, PAGE_HEIGHT, "#ffffff");
  setupKeyboardShortcuts();
  setupRightClickContextMenu();
  if (typeof lucide !== "undefined") lucide.createIcons();

  document.addEventListener("click", () => {
    hideShapesMenu();
  });
};

function toggleMoreShapesMenu(e) {
  e.stopPropagation();
  const btn = document.getElementById("shapes-toggle-btn");
  const drop = document.getElementById("more-shapes-dropdown");
  const rect = btn.getBoundingClientRect();
  drop.style.left = `${rect.left}px`;
  drop.style.top = `${rect.bottom + window.scrollY}px`;
  drop.classList.toggle("hidden");
}

function hideShapesMenu() {
  const drop = document.getElementById("more-shapes-dropdown");
  if (drop) drop.classList.add("hidden");
}

function setupCanvas(w, h, bgColor) {
  if (canvas) canvas.dispose();
  PAGE_WIDTH = w;
  PAGE_HEIGHT = h;

  document.getElementById("canvas-resolution-status").innerHTML =
    `<i data-lucide="maximize-2" class="w-3 h-3"></i> ${w}×${h}`;
  const wrapper = document.getElementById("canvas-wrapper");
  wrapper.style.width = w + "px";
  wrapper.style.height = h + "px";

  canvas = new fabric.Canvas("paintCanvas", {
    width: w,
    height: h,
    backgroundColor: bgColor,
    isDrawingMode: false,
    selection: true,
    preserveObjectStacking: true,
  });

  canvas.on("path:created", (e) => {
    disableObjectRotation(e.path);
    if (typeof saveCanvasHistory === "function") saveCanvasHistory();
    checkAnswer();
  });

  // 3. Click hone par agar galti se select ho jaye to turant active selection clear kar dein
  // canvas.on("mouse:down", function (options) {
  //   canvas.discardActiveObject(); // Selection box clear kar dega
  //   canvas.renderAll();
  // });
  canvas.on("object:added", (e) => {
    if (e.target.type === "line") {
      applyExclusiveLineControls(e.target);
    } else {
      disableObjectRotation(e.target);
    }
    if (!isStateChanging) saveCanvasHistory();
  });

  canvas.on("object:modified", () => {
    if (!isStateChanging) saveCanvasHistory();
  });

  canvas.on("object:scaling", (e) => {
    const obj = e.target;

    if (obj.type === "line") {
      obj.scaleY = 1; // Vertical scaling allow nahi
    }
  });
  canvas.on("object:removed", () => {
    if (!isStateChanging) saveCanvasHistory();
  });
  canvas.on("mouse:down", handleCanvasMouseDownClick);
  canvas.on("selection:created", handleSelectionChange);
  canvas.on("selection:updated", handleSelectionChange);
  canvas.on("selection:cleared", handleSelectionCleared);

  // PERSISTENCE SYNC AUTO-LOAD IMPLEMENTATION
  // PERSISTENCE SYNC AUTO-LOAD IMPLEMENTATION
  const savedJSON = localStorage.getItem("kidspaint_canvas_data");
  if (savedJSON && savedJSON !== "{}") {
    isStateChanging = true;

    // 1. JSON parse करके चेक करें कि क्या Template ID या defaultTool मौजूद है
    let parsedJSON = {};
    try {
      parsedJSON = JSON.parse(savedJSON);
    } catch (e) {
      console.error("Error parsing saved JSON:", e);
    }

    canvas.loadFromJSON(savedJSON, () => {
      canvas.getObjects().forEach((obj) => {
        if (
          obj.role === "background_art" ||
          obj.role === "color_segment" ||
          obj.type === "text" ||
          obj.type === "rect"
        ) {
          if (typeof applyStrictLayerLocks === "function")
            applyStrictLayerLocks(obj);
        } else if (obj.type === "line") {
          applyExclusiveLineControls(obj);
        } else {
          disableObjectRotation(obj);
        }
      });

      // 🎯 2. TEMPLATE META & DEFAULT TOOL RE-ACTIVATION (FIX)
      // सबसे पहले चेक करें कि क्या JSON में defaultTool सेव हुआ था
      const savedTool =
        parsedJSON.defaultTool ||
        (currentTemplateMeta && currentTemplateMeta.defaultTool);
      const savedTemplateId =
        parsedJSON.id || (currentTemplateMeta && currentTemplateMeta.id);

      // Global state और Metadata restore करें
      if (savedTemplateId) {
        if (typeof TEMPLATES_DATABASE !== "undefined") {
          const foundTemplate = TEMPLATES_DATABASE.find(
            (t) => t.id === savedTemplateId,
          );
          if (foundTemplate) {
            window.currentTemplate = foundTemplate;
            if (typeof currentTemplate !== "undefined")
              currentTemplate = foundTemplate;
          }
        }
      }

      if (savedTool) {
        // ⏱️ Small Delay ताकि Fabric Canvas पूरी तरह Render होने के बाद Pencil / Tool active हो
        setTimeout(() => {
          if (savedTool === "bucket") {
            setMode("bucket");
          } else if (savedTool === "brush") {
            startDrawing("brush");
          } else if (savedTool === "pen" || savedTool === "pencil") {
            startDrawing("pen");
          } else if (savedTool === "eraser") {
            startDrawing("eraser");
          } else {
            setMode(savedTool);
          }
        }, 100);
      } else {
        // Default fallback
        setMode("select");
      }

      setTimeout(() => {
        resetZoomToFit();
        canvas.renderAll();
      }, 50);

      isStateChanging = false;
      canvasHistory = [JSON.stringify(canvas.toJSON())];
      historyStep = 0;
    });
  } else {
    saveCanvasHistory();
    setTimeout(resetZoomToFit, 100);
  }

  updateCursor();
}

/* -------------------------------------------------------------
         ADVANCED ADAPTIVE EDUCATIONAL TEMPLATES
         ------------------------------------------------------------- */

/* -------------------------------------------------------------
         CANVAS OPERATIONS CONTROLLERS
         ------------------------------------------------------------- */

function handleSelectionChange(e) {
  syncSizeDropdownFromSelection(e);
  const activeObj = canvas.getActiveObject();
  const textSection = document.getElementById("text-styling-section");
  if (activeObj && activeObj.type === "textbox") {
    textSection.classList.remove("hidden");
    textSection.classList.add("flex");

    document.getElementById("text-font-family").value =
      activeObj.fontFamily || "Fredoka";
    document.getElementById("btn-bold").style.backgroundColor =
      activeObj.fontWeight === "bold" ? "#ddd6fe" : "#ffffff";
    document.getElementById("btn-italic").style.backgroundColor =
      activeObj.fontStyle === "italic" ? "#ddd6fe" : "#ffffff";
    document.getElementById("btn-underline").style.backgroundColor =
      activeObj.underline ? "#ddd6fe" : "#ffffff";
    document.getElementById("btn-strike").style.backgroundColor =
      activeObj.linethrough ? "#ddd6fe" : "#ffffff";
  } else {
    handleSelectionCleared();
  }
}

function handleSelectionCleared() {
  const textSection = document.getElementById("text-styling-section");
  if (textSection) {
    textSection.classList.remove("flex");
    textSection.classList.add("hidden");
  }
}

function setupKeyboardShortcuts() {
  window.addEventListener("keydown", (e) => {
    const activeObj = canvas ? canvas.getActiveObject() : null;

    if (e.ctrlKey && e.key.toLowerCase() === "z") {
      e.preventDefault(); // ब्राउज़र का डिफ़ॉल्ट एक्शन रोकें
      if (typeof undo === "function") undo();
      return;
    }

    // 2. REDO SHORTCUT (Ctrl + Y) - लाइव फ़िक्स
    if (e.ctrlKey && e.key.toLowerCase() === "y") {
      e.preventDefault(); // ब्राउज़र का डिफ़ॉल्ट एक्शन रोकें
      if (typeof redo === "function") redo();
      return;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
      e.preventDefault();
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setMode("select");
      if (activeObj && activeObj.isEditing) activeObj.exitEditing();
      return;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "n") {
      e.preventDefault();
      triggerNewCanvasModal();
      return;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "p") {
      e.preventDefault();
      downloadPaint();
      return;
    }
    if (!activeObj || activeObj.isEditing) return;

    const movementOffset = e.shiftKey ? 20 : 2;
    let moved = false;
    if (e.key === "ArrowUp") {
      activeObj.top -= movementOffset;
      moved = true;
    }
    if (e.key === "ArrowDown") {
      activeObj.top += movementOffset;
      moved = true;
    }
    if (e.key === "ArrowLeft") {
      activeObj.left -= movementOffset;
      moved = true;
    }
    if (e.key === "ArrowRight") {
      activeObj.left += movementOffset;
      moved = true;
    }

    if (moved) {
      e.preventDefault();
      activeObj.setCoords();
      canvas.renderAll();
      saveCanvasHistory();
      return;
    }
    if (e.ctrlKey && e.key.toLowerCase() === "c") {
      e.preventDefault();
      copySelected();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "v") {
      e.preventDefault();
      pasteSelected();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "x") {
      e.preventDefault();
      cutSelected();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "z") {
      e.preventDefault();
      undo();
    }
    if (e.ctrlKey && e.key.toLowerCase() === "y") {
      e.preventDefault();
      redo();
    }
    if (e.key === "Delete" || e.key === "Backspace") {
      e.preventDefault();
      deleteSelected();
    }
  });
}

function selectColor(hex) {
  color1 = hex;
  document.getElementById("box-color1").style.background = hex;
  if (canvas && canvas.isDrawingMode && canvas.freeDrawingBrush)
    canvas.freeDrawingBrush.color = color1;
  const activeObj = canvas.getActiveObject();
  if (activeObj) {
    if (activeObj.type === "activeSelection") {
      activeObj.forEachObject((obj) =>
        obj.set(obj.type === "textbox" ? "fill" : "stroke", color1),
      );
    } else {
      activeObj.set(activeObj.type === "textbox" ? "fill" : "stroke", color1);
    }
    canvas.renderAll();
    saveCanvasHistory();
  }
}

function setMode(mode) {
  activeMode = mode;
  document
    .querySelectorAll(".tool-btn-lg")
    .forEach((btn) => btn.classList.remove("active"));
  canvas.isDrawingMode = false;

  const btn =
    document.getElementById(`tool-${mode}`) ||
    document.getElementById(`shape-${mode}`);
  if (btn) btn.classList.add("active");

  canvas.selection = mode === "select";
  canvas.getObjects().forEach((obj) => (obj.selectable = mode === "select"));
  updateCursor();
}

function startDrawing(type) {
  setMode(type);
  canvas.isDrawingMode = true;
  let brush = new fabric.PencilBrush(canvas);
  if (type === "brush") brush.width = 14;
  else if (type === "pen") brush.width = 6;
  else if (type === "spray") {
    brush = new fabric.SprayBrush(canvas);
    brush.width = 25;
  } else if (type === "pattern") {
    brush = new fabric.PencilBrush(canvas);
    brush.strokeDashArray = [6, 8];
    brush.width = 6;
  } else if (type === "calli1") {
    brush = new fabric.PencilBrush(canvas);
    brush.strokeLineCap = "square";
    brush.width = 16;
  } else if (type === "calli2") {
    brush = new fabric.PencilBrush(canvas);
    brush.strokeLineCap = "round";
    brush.width = 10;
  } else if (type === "eraser") {
    brush.color = "#ffffff";
    brush.width = 28;
  }

  if (type !== "eraser") brush.color = color1;
  canvas.freeDrawingBrush = brush;
}

function setShapeMode(type) {
  setMode(type);
  const centerPointer = { x: PAGE_WIDTH / 2, y: PAGE_HEIGHT / 2 };
  const fillStyle = document.getElementById("shape-fill-style").value;

  let shapeObj;
  if (type === "line") {
    // डिफ़ॉल्ट रूप से 2px मोटाई (strokeWidth: 2) सेट की गई है
    shapeObj = new fabric.Line(
      [
        centerPointer.x - 100,
        centerPointer.y,
        centerPointer.x + 100,
        centerPointer.y,
      ],
      {
        stroke: color1,
        strokeWidth: 2,
      },
    );
  } else if (type === "rect") {
    shapeObj = new fabric.Rect({
      left: centerPointer.x,
      top: centerPointer.y,
      width: 140,
      height: 90,
      fill: fillStyle === "solid" ? color1 : "transparent",
      stroke: color1,
      strokeWidth: 4,
      originX: "center",
      originY: "center",
    });
  } else if (type === "circle") {
    shapeObj = new fabric.Circle({
      left: centerPointer.x,
      top: centerPointer.y,
      radius: 55,
      fill: fillStyle === "solid" ? color1 : "transparent",
      stroke: color1,
      strokeWidth: 4,
      originX: "center",
      originY: "center",
    });
  } else if (type === "triangle") {
    shapeObj = new fabric.Triangle({
      left: centerPointer.x,
      top: centerPointer.y,
      width: 120,
      height: 100,
      fill: fillStyle === "solid" ? color1 : "transparent",
      stroke: color1,
      strokeWidth: 4,
      originX: "center",
      originY: "center",
    });
  } else if (type === "diamond") {
    shapeObj = new fabric.Path("M 50 0 L 100 50 L 50 100 L 0 50 Z", {
      left: centerPointer.x,
      top: centerPointer.y,
      width: 100,
      height: 100,
      fill: fillStyle === "solid" ? color1 : "transparent",
      stroke: color1,
      strokeWidth: 4,
      originX: "center",
      originY: "center",
    });
  } else if (type === "pentagon") {
    shapeObj = new fabric.Path("M 50 0 L 100 38 L 81 100 L 19 100 L 0 38 Z", {
      left: centerPointer.x,
      top: centerPointer.y,
      width: 100,
      height: 100,
      fill: fillStyle === "solid" ? color1 : "transparent",
      stroke: color1,
      strokeWidth: 4,
      originX: "center",
      originY: "center",
    });
  } else if (type === "star") {
    shapeObj = new fabric.Path(
      "M 50 0 L 64 36 L 100 36 L 71 57 L 81 95 L 50 72 L 19 95 L 29 57 L 0 36 L 36 36 Z",
      {
        left: centerPointer.x,
        top: centerPointer.y,
        width: 100,
        height: 100,
        fill: fillStyle === "solid" ? color1 : "transparent",
        stroke: color1,
        strokeWidth: 4,
        originX: "center",
        originY: "center",
      },
    );
  } else if (type === "arrow") {
    shapeObj = new fabric.Path(
      "M 0 35 L 60 35 L 60 0 L 100 50 L 60 100 L 60 65 L 0 65 Z",
      {
        left: centerPointer.x,
        top: centerPointer.y,
        width: 120,
        height: 80,
        fill: fillStyle === "solid" ? color1 : "transparent",
        stroke: color1,
        strokeWidth: 4,
        originX: "center",
        originY: "center",
      },
    );
  } else if (type === "heart") {
    shapeObj = new fabric.Path(
      "M 50 20 C 50 20 38 0 19 0 C 8 0 0 9 0 21 C 0 39 25 57 50 80 C 75 57 100 39 100 21 C 100 9 92 0 81 0 C 62 0 50 20 50 20 Z",
      {
        left: centerPointer.x,
        top: centerPointer.y,
        width: 90,
        height: 90,
        fill: fillStyle === "solid" ? color1 : "transparent",
        stroke: color1,
        strokeWidth: 4,
        originX: "center",
        originY: "center",
      },
    );
  } else if (type === "lightning") {
    shapeObj = new fabric.Path(
      "M 40 0 L 0 55 L 35 55 L 15 100 L 70 35 L 35 35 Z",
      {
        left: centerPointer.x,
        top: centerPointer.y,
        width: 70,
        height: 100,
        fill: fillStyle === "solid" ? color1 : "transparent",
        stroke: color1,
        strokeWidth: 4,
        originX: "center",
        originY: "center",
      },
    );
  }

  if (shapeObj) {
    canvas.add(shapeObj);
    setMode("select");
    canvas.setActiveObject(shapeObj).renderAll();
  }
}

function handleCanvasMouseDownClick(options) {
  const pointer = canvas.getPointer(options.e);

  if (activeMode === "bucket") {
    const target = options.target;

    // Board value check logic
    const activeBoard =
      typeof currentTemplate !== "undefined" && currentTemplate?.board
        ? currentTemplate.board
        : typeof window.board !== "undefined"
          ? window.board
          : typeof board !== "undefined"
            ? board
            : null;

    const isCbseBoard = activeBoard === "CBSE";

    if (target) {
      // 🎨 Object / Shape par color fill karein
      target.set("fill", color1);
      if (target.type !== "textbox" && target.stroke !== "transparent")
        target.set("stroke", color1);
    } else {
      // 🪣 Agar Board "CBSE" NAHI hai (yaani undefined, null, ya general board hai)
      // tabhi Canvas Background Fill hoga
      if (!isCbseBoard) {
        canvas.setBackgroundColor(color1, canvas.renderAll.bind(canvas));
      }
    }

    // CBSE Board hone par active selection clear karein
    if (isCbseBoard) {
      canvas.discardActiveObject();
    }

    canvas.renderAll();
    saveCanvasHistory();
  } else if (activeMode === "text") {
    const txt = new fabric.Textbox("Type Here...", {
      left: pointer.x,
      top: pointer.y,
      fontFamily: "Fredoka",
      fontSize: sizesState.text,
      fill: color1,
      originX: "center",
      originY: "center",
    });
    disableObjectRotation(txt);
    canvas.add(txt).setActiveObject(txt);
    setMode("select");
    txt.enterEditing();
    txt.selectAll();
  }
}
function updateBrushSize(v) {
  const size = parseInt(v, 10);
  const activeObj = canvas.getActiveObject();
  if (activeObj) {
    activeObj.set(
      activeObj.type === "textbox" ? "fontSize" : "strokeWidth",
      size,
    );
    canvas.renderAll();
    saveCanvasHistory();
  }
}

function applyLineStyleChange(style) {
  const activeObj = canvas.getActiveObject();
  if (activeObj) {
    activeObj.set("strokeDashArray", style === "dashed" ? [8, 4] : null);
    canvas.renderAll();
  }
}

function applyFillStyleChange(style) {
  const activeObj = canvas.getActiveObject();
  if (activeObj && activeObj.type !== "textbox") {
    activeObj.set("fill", style === "solid" ? color1 : "transparent");
    canvas.renderAll();
  }
}

function syncSizeDropdownFromSelection() {
  const obj = canvas.getActiveObject();
  if (!obj) return;
  const dropdown = document.getElementById("brush-size-select");
  if (dropdown)
    dropdown.value = obj.type === "textbox" ? obj.fontSize : obj.strokeWidth;
}

function disableObjectRotation(obj) {
  if (!obj) return;
  obj.hasRotatingPoint = false;
  obj.lockRotation = true;
  if (obj.controls) delete obj.controls.mtr;
}

function rotateImage(deg) {
  const obj = canvas.getActiveObject();
  if (obj) {
    obj.set("angle", ((obj.angle || 0) + deg) % 360).setCoords();
    canvas.renderAll();
    saveCanvasHistory();
  }
}

function flipImage(dir) {
  const obj = canvas.getActiveObject();
  if (obj) {
    if (dir === "X") obj.set("flipX", !obj.flipX);
    else obj.set("flipY", !obj.flipY);
    canvas.renderAll();
    saveCanvasHistory();
  }
}

function triggerResizeModal() {
  document
    .getElementById("image-resize-modal")
    .classList.replace("hidden", "flex");
}
function closeResizeModal() {
  document
    .getElementById("image-resize-modal")
    .classList.replace("flex", "hidden");
}
function applyImageResize() {
  const obj = canvas.getActiveObject();
  const factor =
    parseFloat(document.getElementById("resize-factor-w").value) / 100;
  if (obj && factor) {
    obj
      .set({
        scaleX: (obj.scaleX || 1) * factor,
        scaleY: (obj.scaleY || 1) * factor,
      })
      .setCoords();
    canvas.renderAll();
    saveCanvasHistory();
  }
  closeResizeModal();
}

function uploadLocalImage(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (f) {
    fabric.Image.fromURL(f.target.result, (img) => {
      let maxScale = Math.min(
        (PAGE_WIDTH * 0.5) / img.width,
        (PAGE_HEIGHT * 0.5) / img.height,
      );
      img.set({
        left: PAGE_WIDTH / 2,
        top: PAGE_HEIGHT / 2,
        originX: "center",
        originY: "center",
        scaleX: maxScale,
        scaleY: maxScale,
      });
      disableObjectRotation(img);
      canvas.add(img);
      setMode("select");
      canvas.setActiveObject(img).renderAll();
    });
  };
  reader.readAsDataURL(file);
}

function toggleGridlines(active) {
  document
    .getElementById("editor-container")
    .classList.toggle("gridlines-active", active);
}
function changeZoom(val) {
  zoomLevel = Math.min(Math.max(0.2, zoomLevel + val), 2.0);
  applyZoomLevel();
}
function handleZoomSlider(v) {
  zoomLevel = parseFloat(v) / 100;
  applyZoomLevel();
}
function applyZoomLevel() {
  canvas.setZoom(zoomLevel);
  canvas.setWidth(PAGE_WIDTH * zoomLevel);
  canvas.setHeight(PAGE_HEIGHT * zoomLevel);
  document.getElementById("zoom-text").innerText =
    Math.round(zoomLevel * 100) + "%";
}
function resetZoomToFit() {
  const container = document.getElementById("editor-container");
  if (!container || container.clientWidth === 0) return;
  zoomLevel = Math.min(
    (container.clientWidth - 24) / PAGE_WIDTH,
    (container.clientHeight - 24) / PAGE_HEIGHT,
    1.0,
  );
  applyZoomLevel();
}

function handleNewCanvasClick() {
  // अगर मोबाइल स्क्रीन (768px से कम) है, तो बिना मोडल के सीधे नया पेज बनाएं
  if (window.innerWidth < 768) {
    if (
      confirm(
        "Do you want to create a new clean page? (Your current drawing will be removed)",
      )
    ) {
      localStorage.removeItem("kidspaint_canvas_data");
      setupCanvas(800, 800, "#ffffff"); // मोबाइल के लिए फिक्स परफेक्ट साइज
    }
  } else {
    // वेब (डेस्कटॉप) के लिए आपका पुराना मोडल पॉप-अप खुल जाएगा
    triggerNewCanvasModal();
  }
}

function triggerNewCanvasModal() {
  document
    .getElementById("new-canvas-modal")
    .classList.replace("hidden", "flex");
}
function closeNewCanvasModal() {
  document
    .getElementById("new-canvas-modal")
    .classList.replace("flex", "hidden");
}
function createNewCanvasFromModal() {
  const w =
    parseInt(document.getElementById("canvas-width-input").value) || 1152;
  const h =
    parseInt(document.getElementById("canvas-height-input").value) || 648;
  localStorage.removeItem("kidspaint_canvas_data");
  setupCanvas(w, h, "#ffffff");
  closeNewCanvasModal();
}

// PERSISTENCE SYNC IN STORAGE DECK
function saveCanvasHistory() {
  if (isStateChanging) return;

  // 🎯 toJSON में role, id, defaultTool आदि Fields जरूर include करें
  const snap = JSON.stringify(
    canvas.toJSON([
      "id",
      "title",
      "category",
      "defaultTool",
      "label",
      "role",
      "selectable",
      "evented",
      "hasControls",
      "hasBorders",
      "lockMovementX",
      "lockMovementY",
      "lockRotation",
      "hasRotatingPoint",
    ]),
  );

  if (historyStep < canvasHistory.length - 1)
    canvasHistory = canvasHistory.slice(0, historyStep + 1);
  canvasHistory.push(snap);

  historyStep++;

  localStorage.setItem("kidspaint_canvas_data", snap);
  localStorage.setItem("kidspaint_width", PAGE_WIDTH);
  localStorage.setItem("kidspaint_height", PAGE_HEIGHT);
}

function undo() {
  if (historyStep > 0) {
    isStateChanging = true;
    historyStep--;
    canvas.loadFromJSON(canvasHistory[historyStep], () => {
      canvas
        .getObjects()
        .forEach((obj) =>
          obj.type === "line"
            ? applyExclusiveLineControls(obj)
            : disableObjectRotation(obj),
        );
      canvas.renderAll();
      isStateChanging = false;
      localStorage.setItem(
        "kidspaint_canvas_data",
        JSON.stringify(canvas.toJSON()),
      );
    });
  }
}
function redo() {
  if (historyStep < canvasHistory.length - 1) {
    isStateChanging = true;
    historyStep++;
    canvas.loadFromJSON(canvasHistory[historyStep], () => {
      canvas
        .getObjects()
        .forEach((obj) =>
          obj.type === "line"
            ? applyExclusiveLineControls(obj)
            : disableObjectRotation(obj),
        );
      canvas.renderAll();
      isStateChanging = false;
      localStorage.setItem(
        "kidspaint_canvas_data",
        JSON.stringify(canvas.toJSON()),
      );
    });
  }
}

async function downloadPaint() {
  const overlay = document.getElementById("download-progress-overlay");
  if (overlay) overlay.classList.replace("hidden", "flex");

  const CLOUD_NAME = "dzay0p6hc";
  const API_KEY = "718694214558592";
  const API_SECRET = "BWkJK-QspQciZZCBkwkssjHogyE";
  const FOLDER = "kidspaint_temp";

  try {
    const random4Digit = Math.floor(1000 + Math.random() * 9000);
    const customFileName = `kidspaint_${random4Digit}`;

    const multiplier = PAGE_WIDTH / canvas.getWidth();
    const dataURL = canvas.toDataURL({
      format: "png",
      quality: 1.0,
      multiplier: multiplier,
    });

    const timestamp = Math.floor(Date.now() / 1000);
    const uploadSignStr = `folder=${FOLDER}&timestamp=${timestamp}${API_SECRET}`;
    const uploadSignature = CryptoJS.SHA1(uploadSignStr).toString();

    const formData = new FormData();
    formData.append("file", dataURL);
    formData.append("api_key", API_KEY);
    formData.append("timestamp", timestamp);
    formData.append("folder", FOLDER);
    formData.append("signature", uploadSignature);

    const uploadRes = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData },
    );

    const uploadData = await uploadRes.json();

    if (uploadData.secure_url) {
      // Custom filename forced-download URL
      const forcedDownloadUrl = uploadData.secure_url.replace(
        "/upload/",
        `/upload/fl_attachment:${customFileName}/`,
      );

      // Simple navigation trigger (InAppBrowser ka loadstart ise catch kar lega)
      window.location.href = forcedDownloadUrl;

      // Auto-Delete from Cloudinary after 15 seconds
      setTimeout(async () => {
        try {
          const delTimestamp = Math.floor(Date.now() / 1000);
          const delSignStr = `public_id=${uploadData.public_id}&timestamp=${delTimestamp}${API_SECRET}`;
          const delSignature = CryptoJS.SHA1(delSignStr).toString();

          const delData = new FormData();
          delData.append("public_id", uploadData.public_id);
          delData.append("api_key", API_KEY);
          delData.append("timestamp", delTimestamp);
          delData.append("signature", delSignature);

          await fetch(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/destroy`,
            { method: "POST", body: delData },
          );
        } catch (e) {
          console.error("Delete Error:", e);
        }
      }, 15000);
    } else {
      alert("Upload failed. Please try again.");
    }
  } catch (error) {
    alert("Download error: " + error.message);
  } finally {
    if (overlay) overlay.classList.replace("flex", "hidden");
  }
}
function deleteSelected() {
  canvas.getActiveObjects().forEach((obj) => canvas.remove(obj));
  canvas.discardActiveObject().renderAll();
  saveCanvasHistory();
}
function cutSelected() {
  copySelected();
  deleteSelected();
}
function copySelected() {
  clipboardObject = canvas.getActiveObject();
}
function pasteSelected() {
  if (clipboardObject) {
    clipboardObject.clone((cloned) => {
      cloned.set({ left: cloned.left + 24, top: cloned.top + 24 });
      if (cloned.type === "line") applyExclusiveLineControls(cloned);
      canvas.add(cloned).setActiveObject(cloned).renderAll();
      saveCanvasHistory();
    });
  }
}

function applyTextFont(fontName) {
  const activeObj = canvas.getActiveObject();
  if (activeObj && activeObj.type === "textbox") {
    activeObj.set("fontFamily", fontName);
    canvas.renderAll();
    saveCanvasHistory();
  }
}

function toggleTextStyle(styleType) {
  const activeObj = canvas.getActiveObject();
  if (!activeObj || activeObj.type !== "textbox") return;

  if (styleType === "bold") {
    const current = activeObj.get("fontWeight");
    activeObj.set("fontWeight", current === "bold" ? "normal" : "bold");
    document.getElementById("btn-bold").style.backgroundColor =
      activeObj.fontWeight === "bold" ? "#ddd6fe" : "#ffffff";
  } else if (styleType === "italic") {
    const current = activeObj.get("fontStyle");
    activeObj.set("fontStyle", current === "italic" ? "normal" : "italic");
    document.getElementById("btn-italic").style.backgroundColor =
      activeObj.fontStyle === "italic" ? "#ddd6fe" : "#ffffff";
  } else if (styleType === "underline") {
    const current = activeObj.get("underline");
    activeObj.set("underline", !current);
    document.getElementById("btn-underline").style.backgroundColor =
      activeObj.underline ? "#ddd6fe" : "#ffffff";
  } else if (styleType === "strike") {
    const current = activeObj.get("linethrough");
    activeObj.set("linethrough", !current);
    document.getElementById("btn-strike").style.backgroundColor =
      activeObj.linethrough ? "#ddd6fe" : "#ffffff";
  }

  canvas.renderAll();
  saveCanvasHistory();
}

function updateCursor() {
  canvas.defaultCursor =
    activeMode === "bucket"
      ? "cell"
      : canvas.isDrawingMode
        ? "crosshair"
        : "default";
}

function setupRightClickContextMenu() {
  const canvasWrapper =
    document.querySelector(".canvas-container") ||
    document.getElementById("canvas-wrapper") ||
    document.getElementById("paintCanvas");

  if (!canvasWrapper) return;

  canvasWrapper.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const contextMenu = document.getElementById("custom-context-menu");
    if (!contextMenu) return;

    // Direct viewport mouse coordinates (fixed position ke sath exact tip par khulega)
    contextMenu.style.left = `${e.clientX}px`;
    contextMenu.style.top = `${e.clientY}px`;
    contextMenu.style.display = "block";

    const pasteBtn = document.getElementById("context-paste-btn");
    if (pasteBtn) {
      pasteBtn.style.opacity =
        typeof clipboardObject !== "undefined" && clipboardObject ? "1" : "0.5";
    }
  });

  document.addEventListener("click", () => {
    if (typeof closeContextMenu === "function") {
      closeContextMenu();
    }
  });
}
function closeContextMenu() {
  document.getElementById("custom-context-menu").style.display = "none";
}
window.addEventListener("resize", resetZoomToFit);

document.addEventListener("DOMContentLoaded", () => {
  // 1. URL se dynamically current school name check karein
  const pathname = window.location.pathname;
  const match = pathname.match(/\/school\/([^\/]+)/);

  if (match && match[1]) {
    localStorage.setItem("schoolName", match[1]);
  }

  const savedSchool = localStorage.getItem("schoolName");

  if (!savedSchool || savedSchool.trim() === "") {
    console.warn(
      "KidsPaint Session initialization skipped: 'schoolName' not found.",
    );
    return;
  }

  const today = new Date().toDateString();
  let sessionData = JSON.parse(localStorage.getItem("kidsPaintSession"));
  const correctPassword = "123456";
  let attempts = 0;

  const modal = document.getElementById("teacher-auth-modal");
  const passInput = document.getElementById("teacher-password-input");
  const kidsPaintAlertBox = document.getElementById("kids-paint-alert-box");

  // Session Data Initialization / Reset Logic
  if (
    !sessionData ||
    sessionData.date !== today ||
    sessionData.school !== savedSchool
  ) {
    sessionData = {
      date: today,
      school: savedSchool,
      timeLeft: 0,
      isActivated: false,
      isPaused: false, // Explicit track for reload recovery
    };
    localStorage.setItem("kidsPaintSession", JSON.stringify(sessionData));
  }

  // Parse parsing safeguards to prevent type mismatch
  let timeLeftParsed = parseInt(sessionData.timeLeft, 10) || 0;

  // Direct routing conditions based on active structural state
  if (sessionData.isActivated && timeLeftParsed <= 0) {
    applyBlackOverlay();
    return;
  }

  if (sessionData.isActivated && timeLeftParsed > 0) {
    // Reload Safe Initialization
    startTimer(timeLeftParsed, sessionData.isPaused);
    return;
  }

  if (!sessionData.isActivated && timeLeftParsed === 0) {
    if (modal) {
      modal.style.display = "flex";
      modal.classList.remove("hidden");
    }
  }

  window.handleTeacherAuth = function (event) {
    event.preventDefault();

    if (passInput.value === correctPassword) {
      if (modal) {
        modal.style.setProperty("display", "none", "important");
        modal.classList.add("hidden");
      }

      sessionData.timeLeft = 20; // TESTING PURPOSE: 20 seconds
      sessionData.isActivated = true;
      sessionData.isPaused = false;
      localStorage.setItem("kidsPaintSession", JSON.stringify(sessionData));

      startTimer(20, false);
    } else {
      attempts++;
      if (kidsPaintAlertBox) {
        kidsPaintAlertBox.innerText = `Invalid Password! (${3 - attempts} attempts left)`;
        kidsPaintAlertBox.classList.remove("hidden");
        kidsPaintAlertBox.style.setProperty("display", "block", "important");
      }

      passInput.value = "";
      passInput.focus();

      if (attempts >= 3) {
        if (modal) {
          modal.style.setProperty("display", "none", "important");
          modal.classList.add("hidden");
        }
        applyBlackOverlay("❌ Access Denied: Too many incorrect attempts.");
      }
    }
  };

  function startTimer(secondsLeft, startAsPaused = false) {
    const timerBox = document.getElementById("timer-box");
    const countdownDisplay = document.getElementById("countdown");
    const controlBtn = document.getElementById("timer-control-btn");

    if (!timerBox || !countdownDisplay || !controlBtn) return;

    timerBox.style.setProperty("display", "flex", "important");

    let totalSeconds = parseInt(secondsLeft, 10);
    let isTimerRunning = !startAsPaused;

    // Update control UI on initialize
    if (isTimerRunning) {
      controlBtn.innerText = "⏸️";
      controlBtn.style.backgroundColor = "#ff4757";
    } else {
      controlBtn.innerText = "▶️";
      controlBtn.style.backgroundColor = "#2ed573";
    }

    const updateDisplay = (secs) => {
      let mins = Math.floor(secs / 60);
      let remSecs = secs % 60;
      countdownDisplay.innerText = `${mins.toString().padStart(2, "0")}:${remSecs.toString().padStart(2, "0")}`;
    };

    updateDisplay(totalSeconds);

    function runTicker() {
      if (window.kidsPaintInterval) clearInterval(window.kidsPaintInterval);

      window.kidsPaintInterval = setInterval(() => {
        if (!isTimerRunning) return;

        totalSeconds--;

        let currentSession =
          JSON.parse(localStorage.getItem("kidsPaintSession")) || {};
        currentSession.timeLeft = totalSeconds;
        currentSession.isPaused = !isTimerRunning;
        localStorage.setItem(
          "kidsPaintSession",
          JSON.stringify(currentSession),
        );

        updateDisplay(totalSeconds);

        if (totalSeconds <= 0) {
          clearInterval(window.kidsPaintInterval);
          applyBlackOverlay();
        }
      }, 1000);
    }

    // Sync active state ticker loop
    if (isTimerRunning) {
      runTicker();
    }

    const toggleState = (e) => {
      e.preventDefault();
      e.stopPropagation();

      let currentSession =
        JSON.parse(localStorage.getItem("kidsPaintSession")) || {};

      if (isTimerRunning) {
        isTimerRunning = false;
        controlBtn.innerText = "▶️";
        controlBtn.style.setProperty(
          "background-color",
          "#2ed573",
          "important",
        );

        currentSession.isPaused = true;
        localStorage.setItem(
          "kidsPaintSession",
          JSON.stringify(currentSession),
        );
      } else {
        isTimerRunning = true;
        controlBtn.innerText = "⏸️";
        controlBtn.style.setProperty(
          "background-color",
          "#ff4757",
          "important",
        );

        currentSession.isPaused = false;
        localStorage.setItem(
          "kidsPaintSession",
          JSON.stringify(currentSession),
        );
        runTicker();
      }
    };

    controlBtn.onclick = toggleState;
    controlBtn.addEventListener("touchstart", toggleState, {
      passive: false,
    });
  }

  function applyBlackOverlay(customMessage) {
    if (window.kidsPaintInterval) clearInterval(window.kidsPaintInterval);
    localStorage.removeItem("kidsPaintSession");
    let schoolDisplay = "KIDSPAINT AI INDIA";
    if (savedSchool) {
      schoolDisplay = savedSchool.includes("-")
        ? savedSchool.replace(/-/g, " ").toUpperCase()
        : savedSchool.toUpperCase();
    }

    const msg =
      customMessage ||
      "Time's up! Today's 20-minute computer lab session has ended. See you tomorrow!";

    const overlayHTML = `
        <div style="position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background: radial-gradient(circle at center, #111827 0%, #030712 100%) !important; color: #ffffff !important; display: flex !important; flex-direction: column !important; justify-content: center !important; align-items: center !important; z-index: 99999999 !important; font-family: 'Inter', system-ui, -apple-system, sans-serif !important; text-align: center !important; padding: 24px !important; box-sizing: border-box !important;">
            <div style="background: rgba(255, 255, 255, 0.03) !important; border: 1px solid rgba(255, 255, 255, 0.08) !important; backdrop-filter: blur(16px) !important; -webkit-backdrop-filter: blur(16px) !important; padding: 40px 32px !important; border-radius: 32px !important; max-width: 480px !important; width: 100% !important; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5) !important; box-sizing: border-box !important;">
                <div style="width: 72px !important; height: 72px !important; background: rgba(239, 68, 68, 0.1) !important; border: 1px solid rgba(239, 68, 68, 0.2) !important; border-radius: 24px !important; display: flex !important; align-items: center !important; justify-content: center !important; margin: 0 auto 24px auto !important; font-size: 2rem !important; box-shadow: 0 0 20px rgba(239, 68, 68, 0.15) !important;">🔒</div>
                <div style="color: #9ca3af !important; font-size: 0.75rem !important; font-weight: 800 !important; letter-spacing: 0.15em !important; margin-bottom: 8px !important; text-transform: uppercase !important; opacity: 0.9 !important;">${schoolDisplay}</div>
                <h1 style="color: #ffffff !important; font-size: 2rem !important; font-weight: 900 !important; letter-spacing: -0.025em !important; margin: 0 0 4px 0 !important;">Screen Locked</h1>
                <a href="https://kidspaint.cloud" target="_parent" style="color: #6366f1 !important; text-decoration: none !important; font-size: 0.8rem !important; font-weight: 700 !important; letter-spacing: 0.05em !important; margin-bottom: 28px !important; display: inline-block !important;">https://kidspaint.cloud</a>
                <p style="font-size: 1.05rem !important; color: #d1d5db !important; line-height: 1.6 !important; font-weight: 500 !important; margin: 0 !important; background: rgba(255, 255, 255, 0.02) !important; padding: 16px 20px !important; border-radius: 16px !important; border: 1px solid rgba(255, 255, 255, 0.04) !important;">${msg}</p>
            </div>
        </div>`;

    document.body.innerHTML = overlayHTML;
    document.body.style.setProperty("overflow", "hidden", "important");
    document.body.style.setProperty("background", "#030712", "important");
  }
});

// HTTPS API BASE URL
const API_BASE_URL = "https://api.jawedsiddiqui.cloud/api/kidspaint";
const API_TIMEOUT_MS = 15000; // 15 Seconds Threshold

let currentAuthData = {
  role: "parent",
  country: "IN",
  mobile: "",
  student: null,
  sessionTimeSec: 1200,
};

// ⏱️ Class-Based Dynamic Timer Calculation
function calculateSessionTimeByClass(classGrade) {
  if (!classGrade) return 1200;

  // Convert to string, trim spaces and lower case
  const gradeStr = String(classGrade).toLowerCase().trim();

  // Extract number from string (e.g., "Grade 2" -> 2, "2" -> 2)
  const match = gradeStr.match(/\d+/);
  const gradeNumber = match ? parseInt(match[0], 10) : null;

  // Class 1, 2, 3 ke liye 15 Minutes (900 seconds)
  if (gradeNumber !== null && gradeNumber >= 1 && gradeNumber <= 3) {
    return 900; // 15 Mins
  }

  // Class 4 se 8 aur baaki ke liye 20 Minutes (1200 seconds)
  return 1200; // 20 Mins
}

// 🌐 Timeout Wrapper For Fetch Requests
function fetchWithTimeout(url, options = {}, timeoutMs = API_TIMEOUT_MS) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("API_TIMEOUT")), timeoutMs),
    ),
  ]);
}

// 🔄 UI Button Loader Toggle
function setButtonLoading(buttonElem, isLoading, originalText) {
  if (!buttonElem) return;
  if (isLoading) {
    buttonElem.disabled = true;
    buttonElem.dataset.origText = originalText || buttonElem.innerHTML;
    buttonElem.innerHTML = `<span class="inline-block animate-spin mr-1">⏳</span> Processing...`;
    buttonElem.classList.add("opacity-75", "cursor-not-allowed");
  } else {
    buttonElem.disabled = false;
    buttonElem.innerHTML = buttonElem.dataset.origText || originalText;
    buttonElem.classList.remove("opacity-75", "cursor-not-allowed");
  }
}

// 🔀 Step Switch Helper Function
function switchStep(stepId) {
  hideAlert();
  document
    .querySelectorAll(".auth-step-container")
    .forEach((el) => el.classList.add("hidden"));
  const target = document.getElementById(stepId);
  if (target) target.classList.remove("hidden");
}

function showAlert(msg) {
  const alertBox = document.getElementById("kids-paint-alert-box");
  if (alertBox) {
    alertBox.innerText = msg;
    alertBox.classList.remove("hidden");
  }
}

function hideAlert() {
  const alertBox = document.getElementById("kids-paint-alert-box");
  if (alertBox) alertBox.classList.add("hidden");
}

// 1. Step 1 Submit: Mobile Check (With 15-Sec Fallback)
// 1. Step 1 Submit: Mobile Check (With Immediate Button Disable & 15-Sec Fallback)
async function handleCommonLoginSubmit(event) {
  event.preventDefault();
  hideAlert();

  // Submit button ko pakdein
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnText = "Continue 🚀";

  // 🔒 IMMEDIATELY DISABLE BUTTON & SHOW LOADING
  setButtonLoading(submitBtn, true, originalBtnText);

  currentAuthData.role = document.getElementById("user-role").value;
  currentAuthData.country = document.getElementById("user-country").value;
  currentAuthData.mobile = document.getElementById("user-mobile").value.trim();

  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/check-mobile`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobileNumber: currentAuthData.mobile }),
      },
      API_TIMEOUT_MS,
    );

    const data = await response.json();

    if (data.exists) {
      switchStep("step-enter-password");
    } else {
      switchStep("step-registration");
    }
  } catch (error) {
    console.warn(
      "Mobile Check API Failed or Timed Out (15s). Proceeding via Fallback.",
      error,
    );

    // Fallback Local Storage Check
    const registeredParents = JSON.parse(
      localStorage.getItem("registeredParents") || "{}",
    );

    if (registeredParents[currentAuthData.mobile]) {
      switchStep("step-enter-password");
    } else {
      switchStep("step-registration");
    }
  } finally {
    // 🔓 RESPONSE AANE YA TIMEOUT HONE PAR BUTTON KO VAPAS ENABLE KAREIN
    setButtonLoading(submitBtn, false, originalBtnText);
  }
} // 2. Step 2A Submit: Password Login (With 15-Sec Fallback)
async function handlePasswordSubmit(event) {
  event.preventDefault();
  hideAlert();

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnText = "🚀 Start 20-Min Session";
  const pwdInput = document.getElementById("teacher-password-input").value;

  setButtonLoading(submitBtn, true, originalBtnText);

  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mobileNumber: currentAuthData.mobile,
          password: pwdInput,
        }),
      },
      API_TIMEOUT_MS,
    );

    const data = await response.json();
    setButtonLoading(submitBtn, false, originalBtnText);

    if (response.ok && data.success) {
      localStorage.setItem("kidsPaintToken", data.token);
      localStorage.setItem("kidsPaintUser", JSON.stringify(data.user));

      const studentClass = data.user?.classGrade || "";
      const classBasedTime = calculateSessionTimeByClass(studentClass);

      finishAuthAndStartSession(classBasedTime);
    } else {
      showAlert(`❌ ${data.message || "Invalid password! Try again."}`);
    }
  } catch (error) {
    console.warn(
      "Login API Failed or Timed Out (15s). Falling back to Offline Mode.",
      error,
    );
    setButtonLoading(submitBtn, false, originalBtnText);

    const registeredParents = JSON.parse(
      localStorage.getItem("registeredParents") || "{}",
    );
    const user = registeredParents[currentAuthData.mobile];

    if ((user && user.password === pwdInput) || pwdInput === "123456") {
      const studentClass = user?.student?.classGrade || "";
      const classBasedTime = calculateSessionTimeByClass(studentClass);
      finishAuthAndStartSession(classBasedTime);
    } else {
      showAlert("❌ Invalid Password! Try again.");
    }
  }
}

// 3. Step 2B Submit: Parent Registration (With 15-Sec Fallback)
async function handleRegistrationSubmit(event) {
  event.preventDefault();
  hideAlert();

  const submitBtn = event.target.querySelector('button[type="submit"]');
  const originalBtnText = "Register & Start 🚀";

  const genderElem = document.querySelector(
    'input[name="student_gender"]:checked',
  );
  const savedSchoolName =
    localStorage.getItem("schoolName") || "KidsPaint Partner School";
  const selectedClass = document.getElementById("reg-class").value;

  const studentDetails = {
    studentName: document.getElementById("reg-student-name").value.trim(),
    gender: genderElem ? genderElem.value : "Male",
    classGrade: selectedClass,
  };

  const payload = {
    mobileNumber: currentAuthData.mobile,
    role: currentAuthData.role,
    country: currentAuthData.country,
    schoolName: savedSchoolName,
    ...studentDetails,
  };

  currentAuthData.sessionTimeSec = calculateSessionTimeByClass(selectedClass);
  setButtonLoading(submitBtn, true, originalBtnText);

  try {
    const response = await fetchWithTimeout(
      `${API_BASE_URL}/register`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
      API_TIMEOUT_MS,
    );

    const data = await response.json();
    setButtonLoading(submitBtn, false, originalBtnText);

    if (response.ok && data.success) {
      localStorage.setItem("kidsPaintToken", data.token);
      localStorage.setItem("kidsPaintUser", JSON.stringify(data.user));

      document.getElementById("disp-mobile").innerText =
        `+91 ${currentAuthData.mobile}`;
      switchStep("step-reg-success");
    } else {
      showAlert(`❌ ${data.message || "Registration failed."}`);
    }
  } catch (error) {
    console.warn(
      "Registration API Failed or Timed Out (15s). Saving to LocalStorage Fallback.",
      error,
    );
    setButtonLoading(submitBtn, false, originalBtnText);

    const registeredParents = JSON.parse(
      localStorage.getItem("registeredParents") || "{}",
    );
    registeredParents[currentAuthData.mobile] = {
      mobile: currentAuthData.mobile,
      password: "123456",
      student: studentDetails,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(
      "registeredParents",
      JSON.stringify(registeredParents),
    );

    localStorage.setItem("kidsPaintUser", JSON.stringify(payload));

    document.getElementById("disp-mobile").innerText =
      `+91 ${currentAuthData.mobile}`;
    switchStep("step-reg-success");
  }
}

// 4. Session Start & Modal Close Function (Fixed Timer Trigger)
function finishAuthAndStartSession(customTimeInSeconds = null) {
  const modal = document.getElementById("teacher-auth-modal");
  if (modal) {
    modal.style.setProperty("display", "none", "important");
    modal.classList.add("hidden");
  }

  let timeToSet = customTimeInSeconds || currentAuthData.sessionTimeSec || 1200;

  let sessionData = {
    date: new Date().toDateString(),
    school: localStorage.getItem("schoolName") || "KIDSPAINT",
    timeLeft: timeToSet,
    isActivated: true,
    isPaused: false,
  };

  localStorage.setItem("kidsPaintSession", JSON.stringify(sessionData));

  // Trigger main startTimer or fallback to emergency countdown ticker
  if (typeof window.startTimer === "function") {
    window.startTimer(timeToSet, false);
  } else if (typeof startTimer === "function") {
    startTimer(timeToSet, false);
  } else {
    // 🛑 Emergency Fallback Timer Trigger
    runEmergencyTimer(timeToSet);
  }
}

// 5. Emergency Timer Fallback Engine (Runs if main startTimer function is not bound globally)
function runEmergencyTimer(totalSeconds) {
  const timerBox = document.getElementById("timer-box");
  const countdownDisplay = document.getElementById("countdown");

  if (timerBox) timerBox.style.setProperty("display", "flex", "important");

  if (window.kidsPaintInterval) clearInterval(window.kidsPaintInterval);

  let currentSeconds = parseInt(totalSeconds, 10);

  window.kidsPaintInterval = setInterval(() => {
    currentSeconds--;

    let session = JSON.parse(localStorage.getItem("kidsPaintSession")) || {};
    session.timeLeft = currentSeconds;
    localStorage.setItem("kidsPaintSession", JSON.stringify(session));

    let mins = Math.floor(currentSeconds / 60);
    let secs = currentSeconds % 60;

    if (countdownDisplay) {
      countdownDisplay.innerText = `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }

    if (currentSeconds <= 0) {
      clearInterval(window.kidsPaintInterval);
      if (typeof applyBlackOverlay === "function") {
        applyBlackOverlay();
      } else {
        location.reload();
      }
    }
  }, 1000);
}

// Country Config Map (Dial Code, Length, Placeholder Pattern)
const countryConfigs = {
  IN: { code: "+91", length: 10, placeholder: "Enter 10-digit mobile" },
  UAE: { code: "+971", length: 9, placeholder: "Enter 9-digit mobile" },
  US: { code: "+1", length: 10, placeholder: "Enter 10-digit mobile" },
  GB: { code: "+44", length: 10, placeholder: "Enter 10-digit mobile" },
  CA: { code: "+1", length: 10, placeholder: "Enter 10-digit mobile" },
  AU: { code: "+61", length: 9, placeholder: "Enter 9-digit mobile" },
  SG: { code: "+65", length: 8, placeholder: "Enter 8-digit mobile" },
  SA: { code: "+966", length: 9, placeholder: "Enter 9-digit mobile" },
  QA: { code: "+974", length: 8, placeholder: "Enter 8-digit mobile" },
  OM: { code: "+968", length: 8, placeholder: "Enter 8-digit mobile" },
  KW: { code: "+965", length: 8, placeholder: "Enter 8-digit mobile" },
  BH: { code: "+973", length: 8, placeholder: "Enter 8-digit mobile" },
  MY: { code: "+60", length: 9, placeholder: "Enter 9-digit mobile" },
};

// Event Listener for Country Dropdown Change
document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("user-country");
  const dialCodeSpan = document.getElementById("country-dial-code");
  const mobileInput = document.getElementById("user-mobile");

  if (countrySelect && dialCodeSpan && mobileInput) {
    countrySelect.addEventListener("change", (e) => {
      const selectedCountry = e.target.value;
      const config = countryConfigs[selectedCountry] || countryConfigs["IN"];

      // Update Prefix Text
      dialCodeSpan.innerText = config.code;

      // Update Maxlength and HTML5 Pattern Validation
      mobileInput.maxLength = config.length;
      mobileInput.pattern = `[0-9]{${config.length}}`;
      mobileInput.placeholder = config.placeholder;

      // Clear previous value if length changes
      mobileInput.value = "";
    });
  }
});

async function syncLocalStorageAndSaveCanvas() {
  const API_BASE_URL = "https://api.jawedsiddiqui.cloud/api/kidspaint";

  // 1. LOCALSTORAGE SE USER & SESSION RETRIEVE KAREIN
  const localUser = JSON.parse(localStorage.getItem("kidsPaintUser") || "{}");
  const localSession = JSON.parse(
    localStorage.getItem("kidsPaintSession") || "{}",
  );

  // User Check
  if (!localUser.mobileNumber && !localUser.studentName) {
    alert("⚠️ User information missing in LocalStorage. Please login first.");
    return;
  }

  // 2. RAW LOCALSTORAGE CANVAS OBJECT READ KAREIN
  const canvasStorageData = localStorage.getItem("kidspaint_canvas_data");
  let parsedCanvasObject = null;
  let artworkBase64 = null;

  if (canvasStorageData) {
    try {
      parsedCanvasObject =
        typeof canvasStorageData === "string"
          ? JSON.parse(canvasStorageData)
          : canvasStorageData;

      // Check if image URL already exists in object
      if (
        parsedCanvasObject.imageUrl ||
        parsedCanvasObject.image ||
        parsedCanvasObject.data
      ) {
        artworkBase64 =
          parsedCanvasObject.imageUrl ||
          parsedCanvasObject.image ||
          parsedCanvasObject.data;
      }
    } catch (e) {
      console.warn("Parsing raw canvas storage error:", e);
    }
  }

  // 3. BASE64 IMAGE GENERATION FROM FABRIC / NATIVE CANVAS
  if (!artworkBase64) {
    // Canvas element check
    const canvasElem =
      document.getElementById("kids-canvas") ||
      document.querySelector("canvas");

    if (
      window.fabricCanvas &&
      typeof window.fabricCanvas.toDataURL === "function"
    ) {
      // Fabric.js Instance se High-Res Image Convert Karein
      artworkBase64 = window.fabricCanvas.toDataURL({
        format: "png",
        multiplier: 1,
      });
    } else if (canvasElem && typeof canvasElem.toDataURL === "function") {
      // Native HTML5 Canvas Element se Convert Karein
      artworkBase64 = canvasElem.toDataURL("image/png");
    }
  }

  // Still No Image Check
  if (!artworkBase64) {
    alert(
      "⚠️ Canvas drawing image generate nahi ho saki. Kripya canvas check karein.",
    );
    return;
  }

  // 4. SESSION TIME CALCULATION
  const currentLeftSec =
    window.currentTimerLeftSeconds !== undefined
      ? window.currentTimerLeftSeconds
      : localSession.timeLeft || 0;
  const timeSpentSeconds = Math.max(0, 1200 - currentLeftSec);

  // 5. API PAYLOAD PREPARATION
  const payload = {
    userId: localUser.id || localUser._id || null,
    mobileNumber: localUser.mobileNumber,
    studentName: localUser.studentName,
    schoolName:
      localUser.schoolName ||
      localStorage.getItem("schoolName") ||
      "KidsPaint Partner School",
    classGrade: localUser.classGrade,
    section: localUser.section || "A",
    title: `${localUser.studentName}'s Masterpiece`,
    // imageUrl: artworkBase64, // PNG Base64 String
    imageUrl: "", // PNG Base64 String
    canvasData: parsedCanvasObject || {}, // Complete Fabric.js vector objects array
    canvasWidth: 1152,
    canvasHeight: 648,
    sessionDurationSeconds: timeSpentSeconds,
    status: "submitted",
    isSubmittedForTalentHunt: true,
  };

  // 6. BACKEND API CALL WITH BUTTON SPINNER
  const submitBtn = document.getElementById("btn-submit-drawing");
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>⏳ Submitting...</span>`;
  }

  try {
    const response = await fetch(`${API_BASE_URL}/canvas/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      localStorage.setItem("lastSavedArtworkId", data.data.artworkId);
      alert("🎉 Canvas artwork successfully saved and submitted!");
    } else {
      console.error("Server Response Error:", data);
      alert(`❌ Failed to save: ${data.message || "Server Error"}`);
    }
  } catch (error) {
    console.error("Network Error during Canvas Save:", error);
    alert("❌ Network Error! Backend server se connect nahi ho paya.");
  } finally {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>Submit Drawing</span> <span>🎨</span>`;
    }
  }
}

// 1. Line Handle Restriction Logic (Rotation Disable & Start/End Controls Only)
function applyExclusiveLineControls(targetLine) {
  if (!targetLine) return;
  targetLine.setControlsVisibility({
    tl: true,
    br: true,
    tr: false,
    bl: false,
    ml: false,
    mr: false,
    mt: false,
    mb: false,
    mtr: false,
  });
  targetLine.set({
    transparentCorners: false,
    cornerColor: "#ec4899",
    cornerStrokeColor: "#ffffff",
    cornerSize: 10,
    cornerStyle: "circle",
    borderColor: "#ec4899",
    hasRotatingPoint: false,
    lockRotation: true,
    strokeUniform: true,
  });
}

// 2. Pencil Path Start aur End Points Coordinates Calculator
function getPathEndpoints(pathObj) {
  if (pathObj.type === "line") {
    const matrix = pathObj.calcTransformMatrix();
    const p1 = fabric.util.transformPoint(
      {
        x: pathObj.x1 - pathObj.width / 2,
        y: pathObj.y1 - pathObj.height / 2,
      },
      matrix,
    );
    const p2 = fabric.util.transformPoint(
      {
        x: pathObj.x2 - pathObj.width / 2,
        y: pathObj.y2 - pathObj.height / 2,
      },
      matrix,
    );
    return { start: p1, end: p2 };
  }

  if (pathObj.type === "path" && pathObj.path) {
    const matrix = pathObj.calcTransformMatrix();
    const firstCmd = pathObj.path[0];
    const lastCmd = pathObj.path[pathObj.path.length - 1];

    const startPt = {
      x: firstCmd[1] - pathObj.pathOffset.x,
      y: firstCmd[2] - pathObj.pathOffset.y,
    };
    const endPt = {
      x: lastCmd[lastCmd.length - 2] - pathObj.pathOffset.x,
      y: lastCmd[lastCmd.length - 1] - pathObj.pathOffset.y,
    };

    return {
      start: fabric.util.transformPoint(startPt, matrix),
      end: fabric.util.transformPoint(endPt, matrix),
    };
  }

  const b = pathObj.getBoundingRect();
  return {
    start: { x: b.left, y: b.top },
    end: { x: b.left + b.width, y: b.top + b.height },
  };
}

// 3. Point Inside Box Checker (40px Boundary Margin Tolerance)
function isInsideBox(x, y, box) {
  return (
    x >= box.left - 40 &&
    x <= box.left + box.width + 40 &&
    y >= box.top - 40 &&
    y <= box.top + box.height + 40
  );
}

// 🔔 Bottom Compact Horizontal Toast Notification
function showToast(message, type = "info") {
  const oldToast = document.getElementById("kids-paint-toast");
  if (oldToast) oldToast.remove();

  const toast = document.createElement("div");
  toast.id = "kids-paint-toast";

  let bgColor = "bg-amber-500 border-amber-300";
  let icon = "💡";

  if (type === "success") {
    bgColor = "bg-emerald-500 border-emerald-300";
    icon = "🎉";
  } else if (type === "error") {
    bgColor = "bg-red-500 border-red-300";
    icon = "❌";
  }

  // Bottom Center, Pill Shape, Single-line Horizontal Layout
  toast.className = `fixed bottom-25 left-1/2 -translate-x-1/2 z-[9999999] flex items-center gap-2 px-5 py-2.5 rounded-full text-white font-bold text-xs sm:text-sm border shadow-xl whitespace-nowrap max-w-[90vw] transition-all duration-300 transform translate-y-6 opacity-0 active:scale-95 ${bgColor}`;
  toast.innerHTML = `<span class="text-base">${icon}</span><span>${message}</span>`;
  document.body.appendChild(toast);

  // Bottom-Up Slide Animation
  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-6", "opacity-0");
    toast.classList.add("translate-y-0", "opacity-100");
  });

  // Auto Hide after 2.5s
  setTimeout(() => {
    toast.classList.remove("translate-y-0", "opacity-100");
    toast.classList.add("translate-y-6", "opacity-0");
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// 🔊 Audio Effects Setup
const soundCorrect = new Audio("/sound/soundCorrectWIn.mp3");

//one by one correct answer sound play karne ke liye
const soundCorrectAnswer = new Audio("/sound/correctAnswer.mp3");
const soundWrong = new Audio("/sound/WrongAnswer.mp3");

// 🎯 Main Answer Check Engine
// 🎯 Line Draw Hote Hi Automatic Check Trigger Karein

// 🎯 Smart Answer Check Engine
// 🎯 Line Draw Hote Hi Automatic Check Trigger Karein
canvas.on("path:created", (e) => {
  disableObjectRotation(e.path);
  if (typeof saveCanvasHistory === "function") saveCanvasHistory();

  // Instant Check Call
  checkAnswer();
});

// 🎯 Smart Answer Check Engine
function checkAnswer() {
  if (!canvas || !currentTemplate) return;

  const isFreeDrawingTemplate =
    (currentTemplate.subject &&
      currentTemplate.subject.toLowerCase() === "art") ||
    currentTemplate.category === "coloring" ||
    currentTemplate.defaultTool === "bucket" ||
    currentTemplate.defaultTool === "brush";

  if (isFreeDrawingTemplate) return;

  const userLines = canvas
    .getObjects()
    .filter(
      (obj) =>
        (obj.type === "path" || obj.type === "line") &&
        obj.role !== "background_art",
    );

  if (userLines.length === 0) return;

  const allRects = canvas.getObjects().filter((obj) => obj.type === "rect");
  const leftBoxes = allRects.filter((r) => r.left < 350);
  const rightBoxes = allRects.filter((r) => r.left >= 350);

  const targetAnswers = currentTemplate.correctAnswers || [];
  let correctMatches = 0;
  let hasWrongMatch = false;
  let newlyMatched = false;
  let invalidOutsideLines = [];

  let newCorrectLines = []; // 🟢 Nayi straight green lines
  let newWrongLines = []; // 🔴 Nayi red lines shake karne ke liye

  userLines.forEach((line) => {
    // Green (pehle se correct) lines ko count karein
    if (line.stroke === "#22c55e") {
      correctMatches++;
      return;
    }

    const { start, end } = getPathEndpoints(line);

    const matchedLeft = leftBoxes.find(
      (b) => isInsideBox(start.x, start.y, b) || isInsideBox(end.x, end.y, b),
    );
    const matchedRight = rightBoxes.find(
      (b) => isInsideBox(start.x, start.y, b) || isInsideBox(end.x, end.y, b),
    );

    // 🔴 Line khali jagah kheenchi gayi ho toh remove list mein dalein
    if (!matchedLeft || !matchedRight) {
      invalidOutsideLines.push(line);
      return;
    }

    // 🟢 Dono boxes connect hone par text check karein
    const leftTextObj = canvas
      .getObjects()
      .find(
        (t) => t.type === "text" && isInsideBox(t.left, t.top, matchedLeft),
      );
    const rightTextObj = canvas
      .getObjects()
      .find(
        (t) => t.type === "text" && isInsideBox(t.left, t.top, matchedRight),
      );

    if (leftTextObj && rightTextObj) {
      const isCorrect = targetAnswers.some(
        (ans) =>
          ans.leftText.trim() === leftTextObj.text.trim() &&
          ans.rightText.trim() === rightTextObj.text.trim(),
      );

      if (isCorrect) {
        correctMatches++;
        newlyMatched = true;

        // 📐 Left Box ke Right Edge Center aur Right Box ke Left Edge Center ke Points nikalna
        const startPoint = getBoxConnectionPoint(matchedLeft, "right_edge");
        const endPoint = getBoxConnectionPoint(matchedRight, "left_edge");

        // 🧹 Freehand line hatao
        canvas.remove(line);

        // 📏 Border-to-Border Straight Line banayein
        const straightLine = new fabric.Line(
          [startPoint.x, startPoint.y, endPoint.x, endPoint.y],
          {
            stroke: "#22c55e",
            strokeWidth: 6,
            strokeLineCap: "round",
            selectable: false,
          },
        );

        canvas.add(straightLine);
        newCorrectLines.push(straightLine);
      } else {
        hasWrongMatch = true;
        line.set({
          stroke: "#ef4444",
          strokeWidth: 6,
          selectable: false,
        });
        newWrongLines.push(line);
      }
    }
  });

  // 🧹 Khali jagah kheenchi gayi lines ko turant canvas se hatayein
  if (invalidOutsideLines.length > 0) {
    invalidOutsideLines.forEach((line) => canvas.remove(line));
  }

  canvas.renderAll();

  // 🔴 CASE 1: Galat Match (Wiggle/Shake Effect + Sound)
  if (hasWrongMatch) {
    soundWrong.currentTime = 0;
    soundWrong.play().catch(() => {});

    newWrongLines.forEach((line) => {
      shakeLine(line, () => {
        setTimeout(() => {
          canvas.remove(line);
          canvas.renderAll();
        }, 500);
      });
    });

    // 🎉 CASE 2: Saare Matches Sahi (Win Sound + Confetti)
  } else if (
    correctMatches === targetAnswers.length &&
    targetAnswers.length > 0
  ) {
    newCorrectLines.forEach((line) => pulseCorrectLine(line));

    soundCorrect.currentTime = 0;
    soundCorrect.play().catch(() => {});

    if (typeof confetti === "function") {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }

    // 👍 CASE 3: Single Correct Match (Single Sound)
  } else if (newlyMatched) {
    newCorrectLines.forEach((line) => pulseCorrectLine(line));

    soundCorrectAnswer.currentTime = 0;
    soundCorrectAnswer.play().catch(() => {});
  }
}

// 📐 Helper: Object/Box ke Border/Edge ka Point nikalne ke liye
function getBoxConnectionPoint(box, edgeSide) {
  const width = box.width * (box.scaleX || 1);
  const height = box.height * (box.scaleY || 1);
  const centerY = box.top + height / 2;

  if (edgeSide === "right_edge") {
    // Left waale Object ki Right Border ka Center
    return { x: box.left + width, y: centerY };
  } else {
    // Right waale Object ki Left Border ka Center
    return { x: box.left, y: centerY };
  }
}

// 🌀 Helper 1: Galat Line ko Wiggle/Shake karne ke liye
function shakeLine(line, onComplete) {
  if (!line) return;
  const originalLeft = line.left;
  const shifts = [8, -8, 6, -6, 3, -3, 0];
  let step = 0;

  const interval = setInterval(() => {
    line.set("left", originalLeft + shifts[step]);
    canvas.renderAll();
    step++;

    if (step >= shifts.length) {
      clearInterval(interval);
      if (onComplete) onComplete();
    }
  }, 45);
}

// ✨ Helper 2: Sahi Straight Line ko Pulse/Pop karne ke liye
function pulseCorrectLine(line) {
  if (!line) return;
  line.animate("strokeWidth", 10, {
    duration: 150,
    onChange: canvas.renderAll.bind(canvas),
    onComplete: function () {
      line.animate("strokeWidth", 6, {
        duration: 150,
        onChange: canvas.renderAll.bind(canvas),
      });
    },
  });
}

function toggleMobileNavSidebar() {
  const sidebar = document.getElementById("mobile-nav-sidebar");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  if (sidebar && backdrop) {
    const isHidden = sidebar.classList.contains("-translate-x-full");
    if (isHidden) {
      sidebar.classList.remove("-translate-x-full");
      backdrop.classList.remove("hidden");
      updateSidebarUserInfo();
    } else {
      closeMobileNavSidebar();
    }
  }
}

function closeMobileNavSidebar() {
  const sidebar = document.getElementById("mobile-nav-sidebar");
  const backdrop = document.getElementById("mobile-nav-backdrop");
  if (sidebar && backdrop) {
    sidebar.classList.add("-translate-x-full");
    backdrop.classList.add("hidden");
  }
}

function updateSidebarUserInfo() {
  const nameElem = document.getElementById("user-display-name");
  const phoneElem = document.getElementById("user-display-phone");
  const gradeElem = document.getElementById("user-display-grade");
  const avatarElem = document.getElementById("user-avatar");

  try {
    const rawUserData = localStorage.getItem("kidsPaintUser");
    if (rawUserData) {
      const user = JSON.parse(rawUserData);

      const studentName = user.studentName || "Student User";
      const mobileNumber = user.mobileNumber
        ? "+91 " + user.mobileNumber
        : "+91 XXXXXXXXXX";
      const classGrade = user.classGrade || "-";

      if (nameElem) nameElem.textContent = studentName;
      if (phoneElem) phoneElem.textContent = mobileNumber;
      if (gradeElem) gradeElem.textContent = classGrade;

      if (avatarElem) {
        avatarElem.textContent =
          studentName.trim().charAt(0).toUpperCase() || "S";
      }
    }
  } catch (e) {
    console.error("Error parsing kidsPaintUser from localStorage:", e);
  }
}

function handleLogout() {
  if (confirm("Kya aap logout karna chahte hain?")) {
    localStorage.removeItem("kidsPaintUser");
    localStorage.clear();
    sessionStorage.clear();
    closeMobileNavSidebar();
    location.reload();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateSidebarUserInfo();
});
