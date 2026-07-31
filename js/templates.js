/**
 * Kids Paint - Dynamic Educational Templates Component Engine
 * Structurally designed for future expansion with easy filtering and multiple categories.
 * Fixed: Re-arranged layer execution stack order so brush and pencil paths are always rendered perfectly on top of vector layers.
 */

// 1. GLOBAL TEMPLATE DATABASE & CATEGORIES
const TEMPLATES_DATABASE = [
  {
    id: "tracing_abc",
    title:
      "Letters Tracing: Trace over the alphabet template below with your Brush!",
    category: "tracing",
    themeColor: "#4f46e5",
    icon: "A B C",
    label: "Letters Tracing",
    defaultTool: "brush",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "A  B  C",
        props: {
          fontSize: 150,
          fontFamily: "Fredoka",
          fontWeight: "bold",
          fill: "transparent",
          stroke: "#cbd5e1",
          strokeWidth: 5,
          strokeDashArray: [12, 10],
          left: 576,
          top: 354,
          originX: "center",
          originY: "center",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "coloring_cat",
    title:
      "Coloring Book: Pick colors from palette and fill segments inside the Cat template!",
    category: "coloring",
    themeColor: "#ec4899",
    icon: "🐱🎨",
    label: "Coloring Pad",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      // Airtight paths perfectly configured as background slots
      {
        type: "path",
        path: "M 250 360 C 250 220, 450 220, 450 360 C 450 450, 250 450, 250 360 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      },
      {
        type: "path",
        path: "M 265 265 L 240 180 L 315 235 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      },
      {
        type: "path",
        path: "M 435 265 L 460 180 L 385 235 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        props: {
          left: 310,
          top: 315,
          radius: 16,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "circle",
        props: {
          left: 390,
          top: 315,
          radius: 16,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "triangle",
        props: {
          left: 350,
          top: 350,
          width: 26,
          height: 18,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 3,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "puzzle_dots",
    title:
      "Dot to Dot: Draw paths chronologically from 1 to 10 with Pencil to form a Star!",
    category: "puzzles",
    themeColor: "#10b981",
    icon: "1•2•3",
    label: "Connect Dots",
    defaultTool: "pen",
    initGrid: false,
    customGenerator: function () {
      const points = [
        { x: 576, y: 170, label: "1" },
        { x: 680, y: 250, label: "2" },
        { x: 790, y: 250, label: "3" },
        { x: 710, y: 340, label: "4" },
        { x: 750, y: 460, label: "5" },
        { x: 576, y: 380, label: "6" },
        { x: 402, y: 460, label: "7" },
        { x: 442, y: 340, label: "8" },
        { x: 362, y: 250, label: "9" },
        { x: 472, y: 250, label: "10" },
      ];
      points.forEach((pt) => {
        const dot = new fabric.Circle({
          left: pt.x,
          top: pt.y,
          radius: 7,
          fill: "#ef4444",
          originX: "center",
          originY: "center",
          role: "background_art",
        });
        const text = new fabric.Text(pt.label, {
          left: pt.x + 14,
          top: pt.y - 14,
          fontSize: 18,
          fontFamily: "Fredoka",
          fontWeight: "bold",
          fill: "#334155",
          role: "background_art",
        });

        applyStrictLayerLocks(dot);
        applyStrictLayerLocks(text);
        canvas.add(dot, text);
        canvas.sendToBack(dot);
        canvas.sendToBack(text);
      });
    },
  },
  {
    id: "puzzle_maze",
    title:
      "Maze Runner: Navigate your Pencil carefully from Cat to Fish without colliding with walls!",
    category: "puzzles",
    themeColor: "#f59e0b",
    icon: "🌀🐱",
    label: "Maze Runner",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "rect",
        props: {
          left: 320,
          top: 130,
          width: 500,
          height: 420,
          fill: "transparent",
          stroke: "#1e293b",
          strokeWidth: 6,
          role: "background_art",
        },
      },
      {
        type: "line",
        coords: [420, 130, 420, 320],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [420, 390, 420, 470],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [420, 320, 540, 320],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [540, 200, 540, 320],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [540, 200, 720, 200],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [640, 280, 640, 460],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [640, 360, 740, 360],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "line",
        coords: [500, 400, 500, 550],
        props: { stroke: "#1e293b", strokeWidth: 5, role: "background_art" },
      },
      {
        type: "text",
        text: "🐱 Start",
        props: {
          left: 328,
          top: 165,
          fontSize: 22,
          fontFamily: "Fredoka",
          fontWeight: "bold",
          fill: "#4f46e5",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "🐟 Goal",
        props: {
          left: 740,
          top: 480,
          fontSize: 22,
          fontFamily: "Fredoka",
          fontWeight: "bold",
          fill: "#10b981",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "math_matrix",
    title:
      "Math Matrix: Count fruit elements on the left column and match with digit on the right column!",
    category: "math",
    themeColor: "#06b6d4",
    icon: "🍉🔢",
    label: "Math Matrix",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "🍎 🍎 🍎",
        props: { left: 220, top: 170, fontSize: 36, role: "background_art" },
      },
      {
        type: "text",
        text: "🍦 🍦",
        props: { left: 220, top: 290, fontSize: 36, role: "background_art" },
      },
      {
        type: "text",
        text: "🍉 🍉 🍉 🍉",
        props: { left: 220, top: 410, fontSize: 36, role: "background_art" },
      },
      {
        type: "text",
        text: "4",
        props: {
          left: 880,
          top: 165,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#4f46e5",
          fontWeight: "bold",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "3",
        props: {
          left: 880,
          top: 285,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#4f46e5",
          fontWeight: "bold",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "2",
        props: {
          left: 880,
          top: 405,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#4f46e5",
          fontWeight: "bold",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "symmetry_mirror",
    title:
      "Symmetry Mirror: Analyze the pattern grid on the left and copy mirror vector on the right!",
    category: "drawing",
    themeColor: "#6366f1",
    icon: "🦋📐",
    label: "Symmetry Mirror",
    defaultTool: "brush",
    initGrid: true,
    customGenerator: function () {
      const axisLine = new fabric.Line(
        [PAGE_WIDTH / 2, 90, PAGE_WIDTH / 2, PAGE_HEIGHT - 60],
        {
          stroke: "#f43f5e",
          strokeWidth: 3,
          strokeDashArray: [8, 6],
          role: "background_art",
        },
      );
      const leftWing = new fabric.Path(
        "M 576 200 C 440 130, 400 300, 576 340 C 420 360, 440 480, 576 460",
        {
          fill: "transparent",
          stroke: "#1e293b",
          strokeWidth: 5,
          role: "background_art",
        },
      );

      applyStrictLayerLocks(axisLine);
      applyStrictLayerLocks(leftWing);
      canvas.add(axisLine, leftWing);
      canvas.sendToBack(axisLine);
      canvas.sendToBack(leftWing);
    },
  },
];

// HELPER: Controls locking mechanism while keeping events receptive to rendering engine
function applyStrictLayerLocks(obj) {
  if (!obj) return;
  obj.set({
    selectable: true,
    evented: true,
    hasControls: false,
    hasBorders: false,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX: true,
    lockScalingY: true,
    lockRotation: true,
  });
}

function clearCanvasForTemplate() {
  if (!canvas) return;
  canvas.clear();
  canvas.setBackgroundColor("#ffffff", canvas.renderAll.bind(canvas));
  setMode("select");
}

function drawHeaderInstructionBlock(message, hexColor) {
  const info = new fabric.Textbox(message, {
    left: PAGE_WIDTH / 2,
    top: 35,
    width: PAGE_WIDTH - 60,
    originX: "center",
    fontSize: 24,
    fontFamily: "Fredoka",
    fontWeight: "900",
    fill: hexColor,
    textAlign: "center",
    role: "background_art",
  });
  applyStrictLayerLocks(info);
  canvas.add(info);
}

// UNIVERSAL LOADER: Automatically handles Layer Stacking for Draw Tools
function loadTemplateById(templateId) {
  const template = TEMPLATES_DATABASE.find((t) => t.id === templateId);
  if (!template) return;

  clearCanvasForTemplate();
  drawHeaderInstructionBlock(template.title, template.themeColor);

  if (template.objects && template.objects.length > 0) {
    template.objects.forEach((obj) => {
      let fabricObj;
      const targetProps = { ...obj.props };

      if (obj.type === "text") {
        fabricObj = new fabric.Text(obj.text, targetProps);
      } else if (obj.type === "rect") {
        fabricObj = new fabric.Rect(targetProps);
      } else if (obj.type === "circle") {
        fabricObj = new fabric.Circle(targetProps);
      } else if (obj.type === "triangle") {
        fabricObj = new fabric.Triangle(targetProps);
      } else if (obj.type === "path") {
        fabricObj = new fabric.Path(obj.path, targetProps);
      } else if (obj.type === "line") {
        fabricObj = new fabric.Line(obj.coords, targetProps);
      }

      if (fabricObj) {
        applyStrictLayerLocks(fabricObj);
        canvas.add(fabricObj);
        // CRITICAL FIX: Sends vector art shapes behind brush strokes natively
        canvas.sendToBack(fabricObj);
      }
    });
  }

  if (typeof template.customGenerator === "function") {
    template.customGenerator();
  }

  canvas.getObjects().forEach((obj) => {
    if (
      obj.role === "background_art" ||
      obj.type === "text" ||
      obj.type === "line" ||
      obj.type === "rect" ||
      obj.role === "color_segment"
    ) {
      applyStrictLayerLocks(obj);
      canvas.sendToBack(obj); // Keep underlying structures at layer base
    } else {
      if (typeof disableObjectRotation === "function")
        disableObjectRotation(obj);
    }
  });

  // Make sure header instructional text stays safe at topmost layer area
  const headerBanner = canvas
    .getObjects()
    .find((o) => o.text && o.text.indexOf(":") !== -1);
  if (headerBanner) canvas.bringToFront(headerBanner);

  canvas.renderAll();
  if (typeof saveCanvasHistory === "function") saveCanvasHistory();

  const gridCheckbox = document.getElementById("view-gridlines");
  if (gridCheckbox) {
    gridCheckbox.checked = template.initGrid;
    if (typeof toggleGridlines === "function")
      toggleGridlines(template.initGrid);
  }

  if (template.defaultTool === "bucket") setMode("bucket");
  else if (template.defaultTool === "brush") startDrawing("brush");
  else if (template.defaultTool === "pen") startDrawing("pen");
}

// FILTERING SYSTEM
function filterTemplatesByCategory(categoryName = "all") {
  const sidebarContainer = document.getElementById("templates-sidebar");
  if (!sidebarContainer) return;

  let htmlContent = `<div class="tool-section-label text-indigo-600 font-black mb-1 md:block hidden text-center w-full">Templates</div>`;

  const filtered =
    categoryName === "all"
      ? TEMPLATES_DATABASE
      : TEMPLATES_DATABASE.filter((t) => t.category === categoryName);

  filtered.forEach((t) => {
    htmlContent += `
      <div class="template-card" onclick="loadTemplateById('${t.id}')">
        <div class="text-lg font-black text-indigo-500">${t.icon}</div>
        <div class="text-[8px] font-bold text-slate-500 uppercase mt-0.5">${t.label}</div>
      </div>
    `;
  });

  sidebarContainer.innerHTML = htmlContent;
}

// COMPATIBILITY REWRAPPERS
function loadTracingTemplate() {
  loadTemplateById("tracing_abc");
}
function loadColoringTemplate() {
  loadTemplateById("coloring_cat");
}
function loadDotsTemplate() {
  loadTemplateById("puzzle_dots");
}
function loadMazeTemplate() {
  loadTemplateById("puzzle_maze");
}
function loadSymmetryTemplate() {
  loadTemplateById("symmetry_mirror");
}
function loadMathTemplate() {
  loadTemplateById("math_matrix");
}
