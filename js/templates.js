/**
 * Kids Paint - Unified Educational Templates Database Engine
 * Smart Filter Edition: Mobile view features massive visibility for Coloring & Math Matrix.
 */

// 1. UNIFIED TEMPLATES DATABASE WITH DEVICE FILTER TAGS
const TEMPLATES_DATABASE = [
  // ==================== 💻 DESKTOP / WEB TEMPLATES ====================
  {
    id: "tracing_abc",
    title:
      "Letters Tracing: Trace over the alphabet template below with your Brush!",
    category: "tracing",
    deviceType: "web",
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
    deviceType: "web",
    themeColor: "#ec4899",
    icon: "🐱🎨",
    label: "Coloring Pad",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
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
    deviceType: "web",
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
    deviceType: "web",
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
    deviceType: "web",
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
    deviceType: "web",
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

  // ==================== 📱 EXCLUSIVE MOBILE TEMPLATES (HIGH-VISIBILITY & 2 CATEGORIES ONLY) ====================
  // --- COLORING PAD DOCK (Cat, Dog, River, Home) ---
  {
    id: "color_cat_mobile",
    title: "🐱 Coloring Pad: Pick colors and fill the Big Cat!",
    category: "coloring",
    deviceType: "mobile",
    themeColor: "#ec4899",
    icon: "🐱",
    label: "Big Cat",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 150 420 C 150 250, 450 250, 450 420 C 450 540, 150 540, 150 420 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Large Face
      {
        type: "path",
        path: "M 170 300 L 130 180 L 240 260 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Left Ear
      {
        type: "path",
        path: "M 430 300 L 470 180 L 360 260 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Right Ear
      {
        type: "circle",
        props: {
          left: 240,
          top: 370,
          radius: 24,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      }, // Eye L
      {
        type: "circle",
        props: {
          left: 360,
          top: 370,
          radius: 24,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      }, // Eye R
      {
        type: "triangle",
        props: {
          left: 300,
          top: 430,
          width: 36,
          height: 24,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      }, // Nose
    ],
  },
  {
    id: "color_dog_mobile",
    title: "🐶 Coloring Pad: Fill colors inside the Happy Puppy!",
    category: "coloring",
    deviceType: "mobile",
    themeColor: "#a855f7",
    icon: "🐶",
    label: "Happy Puppy",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 200 450 C 200 300, 448 300, 448 450 C 448 560, 200 560, 200 450 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Face
      {
        type: "path",
        path: "M 190 350 C 130 320, 140 500, 200 460 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Long Ear L
      {
        type: "path",
        path: "M 458 350 C 518 320, 508 500, 448 460 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Long Ear R
      {
        type: "circle",
        props: {
          left: 275,
          top: 400,
          radius: 20,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          role: "color_segment",
        },
      }, // Eye L
      {
        type: "circle",
        props: {
          left: 373,
          top: 400,
          radius: 20,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          role: "color_segment",
        },
      }, // Eye R
      {
        type: "circle",
        props: {
          left: 324,
          top: 460,
          radius: 14,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          role: "color_segment",
        },
      }, // Center Nose
    ],
  },
  {
    id: "color_river_mobile",
    title: "🏞️ Coloring Pad: Fill colors in the Large River and Sun scene!",
    category: "coloring",
    deviceType: "mobile",
    themeColor: "#0ea5e9",
    icon: "🏞️",
    label: "Nature River",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "rect",
        props: {
          left: 74,
          top: 200,
          width: 500,
          height: 450,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Sky backdrop block
      {
        type: "path",
        path: "M 74 480 C 200 400, 400 600, 574 480 L 574 650 L 74 650 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Flowing River slot
      {
        type: "circle",
        props: {
          left: 324,
          top: 320,
          radius: 65,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      }, // Big Morning Sun
    ],
  },
  {
    id: "color_home_mobile",
    title: "🏡 Coloring Pad: Give colorful paints to the Big Playhouse!",
    category: "coloring",
    deviceType: "mobile",
    themeColor: "#10b981",
    icon: "🏡",
    label: "Big House",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "rect",
        props: {
          left: 174,
          top: 380,
          width: 300,
          height: 240,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      }, // Main Room Base
      {
        type: "triangle",
        props: {
          left: 324,
          top: 240,
          width: 360,
          height: 140,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          role: "color_segment",
        },
      }, // Large Airtight Roof
      {
        type: "rect",
        props: {
          left: 294,
          top: 500,
          width: 60,
          height: 120,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      }, // Main Entry Door
    ],
  },

  // --- MATH MATRIX BOOSTER (4 High-Visibility Large Levels) ---
  {
    id: "math_lvl1_mobile",
    title: "🔢 Math Lvl 1: Count Fruits & match with the Digit!",
    category: "math",
    deviceType: "mobile",
    themeColor: "#06b6d4",
    icon: "🍎",
    label: "Math Level 1",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "🍎 🍎 🍎",
        props: { left: 80, top: 220, fontSize: 44, role: "background_art" },
      },
      {
        type: "text",
        text: "🍉 🍉",
        props: { left: 80, top: 420, fontSize: 44, role: "background_art" },
      },
      {
        type: "text",
        text: "3",
        props: {
          left: 540,
          top: 215,
          fontSize: 52,
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
          left: 540,
          top: 415,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#4f46e5",
          fontWeight: "bold",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "math_lvl2_mobile",
    title: "🔢 Math Lvl 2: Match correct counts on Left & Right columns!",
    category: "math",
    deviceType: "mobile",
    themeColor: "#0891b2",
    icon: "🍦",
    label: "Math Level 2",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "🍦 🍦 🍦 🍦",
        props: { left: 80, top: 220, fontSize: 40, role: "background_art" },
      },
      {
        type: "text",
        text: "🍌",
        props: { left: 80, top: 420, fontSize: 44, role: "background_art" },
      },
      {
        type: "text",
        text: "1",
        props: {
          left: 540,
          top: 215,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#ec4899",
          fontWeight: "bold",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "4",
        props: {
          left: 540,
          top: 415,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#ec4899",
          fontWeight: "bold",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "math_lvl3_mobile",
    title: "🔢 Math Lvl 3: Count Shapes and connect to the Answer!",
    category: "math",
    deviceType: "mobile",
    themeColor: "#0e7490",
    icon: "⭐",
    label: "Math Level 3",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "⭐ ⭐ ⭐ ⭐ ⭐",
        props: { left: 60, top: 220, fontSize: 38, role: "background_art" },
      },
      {
        type: "text",
        text: "🎈 🎈 🎈",
        props: { left: 60, top: 420, fontSize: 40, role: "background_art" },
      },
      {
        type: "text",
        text: "3",
        props: {
          left: 540,
          top: 215,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#10b981",
          fontWeight: "bold",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "5",
        props: {
          left: 540,
          top: 415,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#10b981",
          fontWeight: "bold",
          role: "background_art",
        },
      },
    ],
  },
  {
    id: "math_lvl4_mobile",
    title: "🔢 Math Lvl 4: Advanced visual counting matrix!",
    category: "math",
    deviceType: "mobile",
    themeColor: "#155e75",
    icon: "🍇",
    label: "Math Level 4",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "🍇 🍇",
        props: { left: 80, top: 220, fontSize: 44, role: "background_art" },
      },
      {
        type: "text",
        text: "🐱 🐱 🐱 🐱",
        props: { left: 80, top: 420, fontSize: 40, role: "background_art" },
      },
      {
        type: "text",
        text: "4",
        props: {
          left: 540,
          top: 215,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#f59e0b",
          fontWeight: "bold",
          role: "background_art",
        },
      },
      {
        type: "text",
        text: "2",
        props: {
          left: 540,
          top: 415,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#f59e0b",
          fontWeight: "bold",
          role: "background_art",
        },
      },
    ],
  },
];

// 2. HELPER UNIFIED INFRASTRUCTURES
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
  const isMobile = window.innerWidth < 768;
  const info = new fabric.Textbox(message, {
    left: PAGE_WIDTH / 2,
    top: isMobile ? 25 : 35,
    width: PAGE_WIDTH - 40,
    originX: "center",
    fontSize: isMobile ? 28 : 24,
    fontFamily: "Fredoka",
    fontWeight: "900",
    fill: hexColor,
    textAlign: "center",
    role: "background_art",
  });
  applyStrictLayerLocks(info);
  canvas.add(info);
}

// 3. CORE UNIVERSAL DYNAMIC LOADER ENGINE
function loadTemplateById(templateId) {
  const template = TEMPLATES_DATABASE.find((t) => t.id === templateId);
  if (!template) return;

  clearCanvasForTemplate();
  drawHeaderInstructionBlock(template.title, template.themeColor);

  if (template.objects && template.objects.length > 0) {
    template.objects.forEach((obj) => {
      let fabricObj;
      const targetProps = { ...obj.props };

      if (obj.type === "text")
        fabricObj = new fabric.Text(obj.text, targetProps);
      else if (obj.type === "rect") fabricObj = new fabric.Rect(targetProps);
      else if (obj.type === "circle")
        fabricObj = new fabric.Circle(targetProps);
      else if (obj.type === "triangle")
        fabricObj = new fabric.Triangle(targetProps);
      else if (obj.type === "path")
        fabricObj = new fabric.Path(obj.path, targetProps);
      else if (obj.type === "line")
        fabricObj = new fabric.Line(obj.coords, targetProps);

      if (fabricObj) {
        applyStrictLayerLocks(fabricObj);
        canvas.add(fabricObj);
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
      canvas.sendToBack(obj);
    } else {
      if (typeof disableObjectRotation === "function")
        disableObjectRotation(obj);
    }
  });

  const headerBanner = canvas
    .getObjects()
    .find((o) => o.text && o.text.indexOf(":") !== -1);
  if (headerBanner) canvas.bringToFront(headerBanner);

  canvas.renderAll();
  if (typeof saveCanvasHistory === "function") saveCanvasHistory();
  if (typeof resetZoomToFit === "function") resetZoomToFit();

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

// 4. DYNAMIC FILTER SYSTEM: AUTOMATIC SCREEN RESOLUTION SNIFFER
function filterTemplatesByCategory(categoryName = "all") {
  const sidebarContainer = document.getElementById("templates-sidebar");
  if (!sidebarContainer) return;

  let htmlContent = `<div class="tool-section-label text-indigo-600 font-black mb-1 md:block hidden text-center w-full">Templates</div>`;

  // रीयलटाइम स्क्रीन विड्थ के आधार पर डिवाइस प्रकार 'mobile' या 'web' डिटेक्ट करें
  const currentDevice = window.innerWidth < 768 ? "mobile" : "web";

  const deviceFiltered = TEMPLATES_DATABASE.filter(
    (t) => t.deviceType === currentDevice,
  );

  const finalFiltered =
    categoryName === "all"
      ? deviceFiltered
      : deviceFiltered.filter((t) => t.category === categoryName);

  finalFiltered.forEach((t) => {
    htmlContent += `
      <div class="template-card" onclick="loadTemplateById('${t.id}')">
        <div class="text-xl font-black text-indigo-500">${t.icon}</div>
        <div class="text-[9px] font-black text-slate-500 uppercase mt-1">${t.label}</div>
      </div>
    `;
  });

  sidebarContainer.innerHTML = htmlContent;
}

// 5. WINDOW INITIALIZATION INITIAL CORE WRAPPERS
function loadTracingTemplate() {
  const dev = window.innerWidth < 768 ? "color_cat_mobile" : "tracing_abc";
  loadTemplateById(dev);
}
function loadColoringTemplate() {
  const dev = window.innerWidth < 768 ? "color_cat_mobile" : "coloring_cat";
  loadTemplateById(dev);
}
function loadDotsTemplate() {
  const dev = window.innerWidth < 768 ? "math_lvl1_mobile" : "puzzle_dots";
  loadTemplateById(dev);
}
function loadMazeTemplate() {
  const dev = window.innerWidth < 768 ? "math_lvl1_mobile" : "puzzle_maze";
  loadTemplateById(dev);
}
function loadSymmetryTemplate() {
  const dev = window.innerWidth < 768 ? "color_cat_mobile" : "symmetry_mirror";
  loadTemplateById(dev);
}
function loadMathTemplate() {
  const dev = window.innerWidth < 768 ? "math_lvl1_mobile" : "math_matrix";
  loadTemplateById(dev);
}

// DOM लोड होने के तुरंत बाद रीयलटाइम फ़िल्टर रन करें ताकि साइडबार ब्लैंक न रहे
setTimeout(() => {
  if (typeof filterTemplatesByCategory === "function") {
    filterTemplatesByCategory("all");
  }
}, 300);
