/**
 * Kids Paint - Unified Educational Templates Database Engine
 * Smart Filter Edition: Mobile view features massive visibility for Coloring & Math Matrix.
 */

// 1. UNIFIED TEMPLATES DATABASE WITH DEVICE FILTER TAGS
const TEMPLATES_DATABASE = [
  // ==================== 💻 DESKTOP / WEB TEMPLATES ====================

  {
    id: "cbse_cl2_count_monitors_800x800_mobile",
    board: "CBSE",
    classGrade: "2",
    subject: "Computer",
    chapterNo: 1,
    chapterName: "Counting Computer Parts",
    topic: "Count and Color Monitors (800x800 Canvas)",
    learningObjective:
      "Students will identify and count all 3 Monitors among scattered items and use the Paint Bucket Tool to fill them with Light Blue color.",
    bloomsTaxonomyLevel: "Apply",
    title: "🎨 Color all 3 Monitors using Blue color!",
    label: "Count & Fill",
    category: "count_color_bucket",
    deviceType: "mobile",
    themeColor: "#3b82f6",
    icon: "🖥️",
    defaultTool: "bucket",
    allowedTools: ["bucket"],
    totalTargetCount: 3,
    expectedColor: "#93c5fd",
    objects: [
      {
        id: "TARGET_MONITOR_1",
        type: "rect",
        isTarget: true,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 180,
          top: 280,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖥️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 180,
          top: 280,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "DISTRACTOR_MOUSE_1",
        type: "rect",
        isTarget: false,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 360,
          top: 280,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 360,
          top: 280,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "TARGET_MONITOR_2",
        type: "rect",
        isTarget: true,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 540,
          top: 280,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖥️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 540,
          top: 280,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "DISTRACTOR_MOUSE_2",
        type: "rect",
        isTarget: false,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 220,
          top: 430,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 220,
          top: 430,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "TARGET_MONITOR_3",
        type: "rect",
        isTarget: true,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 400,
          top: 430,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖥️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 400,
          top: 430,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "DISTRACTOR_MOUSE_3",
        type: "rect",
        isTarget: false,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 580,
          top: 430,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 580,
          top: 430,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "DISTRACTOR_MOUSE_4",
        type: "rect",
        isTarget: false,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 300,
          top: 570,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 300,
          top: 570,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
      {
        id: "DISTRACTOR_MOUSE_5",
        type: "rect",
        isTarget: false,
        props: {
          width: 120,
          height: 110,
          rx: 18,
          ry: 18,
          fill: "#ffffff",
          stroke: "#cbd5e1",
          strokeWidth: 4,
          left: 480,
          top: 570,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          evented: true,
          hoverCursor: "crosshair",
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          fontSize: 64,
          fontFamily: "Fredoka, sans-serif",
          textAlign: "center",
          fill: "#1e293b",
          left: 480,
          top: 570,
          originX: "center",
          originY: "center",
          selectable: false,
          evented: false,
        },
      },
    ],
  },
  {
    id: "comp_class1_find_keys_800",
    board: "CBSE",
    classGrade: "1",
    subject: "Computer",
    chapterNo: 2,
    chapterName: "Uses of Keyboard",
    topic: "Key Identification",
    learningObjective: "Students will match keys with their correct names.",
    bloomsTaxonomyLevel: "Understand",
    title: "Match the keys with their correct names!",
    category: "computer",
    deviceType: "mobile",
    themeColor: "#7c3aed",
    icon: "⌨️",
    label: "Match Keys",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "🔤 A B C...", rightText: "Alphabet Keys" },
      { leftText: "🔢 1 2 3...", rightText: "Number Keys" },
      { leftText: "⌨️ Space Bar", rightText: "Spacebar" },
    ],
    objects: [
      /* --- LEFT BOX 1: ALPHABET KEYS --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 160,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🔤 A B C...",
        props: {
          left: 75,
          top: 192,
          fontSize: 28,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fill: "#0f172a",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 298,
          top: 198,
          radius: 12,
          fill: "#7c3aed",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- LEFT BOX 2: NUMBER KEYS --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 330,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🔢 1 2 3...",
        props: {
          left: 75,
          top: 362,
          fontSize: 28,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fill: "#0f172a",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 298,
          top: 368,
          radius: 12,
          fill: "#7c3aed",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- LEFT BOX 3: SPACEBAR ICON --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 500,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "⌨️ Space Bar",
        props: {
          left: 70,
          top: 532,
          fontSize: 26,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fill: "#0f172a",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 298,
          top: 538,
          radius: 12,
          fill: "#7c3aed",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- RIGHT BOX 1: NUMBER KEYS LABEL --- */
      {
        type: "rect",
        props: {
          left: 490,
          top: 160,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#fef3c7",
          stroke: "#fde047",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Number Keys",
        props: {
          left: 530,
          top: 195,
          fontSize: 24,
          fontFamily: "Fredoka, sans-serif",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 478,
          top: 198,
          radius: 12,
          fill: "#f59e0b",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- RIGHT BOX 2: SPACEBAR LABEL --- */
      {
        type: "rect",
        props: {
          left: 490,
          top: 330,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#fef3c7",
          stroke: "#fde047",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Spacebar",
        props: {
          left: 555,
          top: 365,
          fontSize: 24,
          fontFamily: "Fredoka, sans-serif",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 478,
          top: 368,
          radius: 12,
          fill: "#f59e0b",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- RIGHT BOX 3: ALPHABET KEYS LABEL --- */
      {
        type: "rect",
        props: {
          left: 490,
          top: 500,
          width: 260,
          height: 100,
          rx: 16,
          ry: 16,
          fill: "#fef3c7",
          stroke: "#fde047",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Alphabet Keys",
        props: {
          left: 520,
          top: 535,
          fontSize: 24,
          fontFamily: "Fredoka, sans-serif",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 478,
          top: 538,
          radius: 12,
          fill: "#f59e0b",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "comp_class1_basic_parts_800",
    board: "CBSE",
    classGrade: "1",
    subject: "Computer",
    chapterNo: 1,
    chapterName: "Computer Parts",
    topic: "Parts Identification",
    learningObjective:
      "Students will identify basic parts of a computer visually.",
    bloomsTaxonomyLevel: "Understand",
    title: "🖥️ Computer: Name the Parts",
    category: "computer",
    deviceType: "mobile",
    themeColor: "#0284c7",
    icon: "🖥️",
    label: "Parts",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "🧠 CPU", rightText: "CPU Box" },
      { leftText: "🖥️ Monitor", rightText: "Monitor" },
      { leftText: "⌨️ Keyboard", rightText: "Keyboard" },
      { leftText: "🖱️ Mouse", rightText: "Mouse" },
    ],
    objects: [
      /* --- ITEM 1: MONITOR --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 80,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🖥️",
        props: {
          left: 145,
          top: 105,
          fontSize: 64,
          fontFamily: "Fredoka",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 288,
          top: 128,
          radius: 12,
          fill: "#0284c7",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- ITEM 2: CPU --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 250,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🧠",
        props: {
          left: 145,
          top: 275,
          fontSize: 64,
          fontFamily: "Fredoka",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 288,
          top: 298,
          radius: 12,
          fill: "#0284c7",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- ITEM 3: KEYBOARD --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 420,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "⌨️",
        props: {
          left: 145,
          top: 445,
          fontSize: 64,
          fontFamily: "Fredoka",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 288,
          top: 468,
          radius: 12,
          fill: "#0284c7",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- ITEM 4: MOUSE --- */
      {
        type: "rect",
        props: {
          left: 50,
          top: 590,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#f8fafc",
          stroke: "#cbd5e1",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🖱️",
        props: {
          left: 145,
          top: 615,
          fontSize: 64,
          fontFamily: "Fredoka",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 288,
          top: 638,
          radius: 12,
          fill: "#0284c7",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      /* --- RIGHT COLUMN: LABELS --- */
      {
        type: "rect",
        props: {
          left: 500,
          top: 80,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#e0f2fe",
          stroke: "#7dd3fc",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Keyboard",
        props: {
          left: 560,
          top: 122,
          fontSize: 28,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 488,
          top: 128,
          radius: 12,
          fill: "#38bdf8",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      {
        type: "rect",
        props: {
          left: 500,
          top: 250,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#e0f2fe",
          stroke: "#7dd3fc",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "CPU Box",
        props: {
          left: 568,
          top: 292,
          fontSize: 28,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 488,
          top: 298,
          radius: 12,
          fill: "#38bdf8",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      {
        type: "rect",
        props: {
          left: 500,
          top: 420,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#e0f2fe",
          stroke: "#7dd3fc",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Mouse",
        props: {
          left: 578,
          top: 462,
          fontSize: 28,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 488,
          top: 468,
          radius: 12,
          fill: "#38bdf8",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },

      {
        type: "rect",
        props: {
          left: 500,
          top: 590,
          width: 250,
          height: 120,
          rx: 20,
          ry: 20,
          fill: "#e0f2fe",
          stroke: "#7dd3fc",
          strokeWidth: 2,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Monitor",
        props: {
          left: 572,
          top: 632,
          fontSize: 28,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 488,
          top: 638,
          radius: 12,
          fill: "#38bdf8",
          stroke: "#ffffff",
          strokeWidth: 3,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },

  {
    id: "art_class1_color_fill_human_body_mobile_648x800",
    board: "CBSE",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    chapterName: "Human Figure Coloring",
    topic: "Color Fill in Human Body Parts",
    learningObjective:
      "Students will use the fill bucket tool to color human body parts.",
    bloomsTaxonomyLevel: "Remember & Apply",
    title: "🎨 Art Fun: Fill Bright Colors in Hair, Eyes, Lips & Clothes!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#ec4899",
    icon: "🎨 🧍",
    label: "Human Figure Art",
    defaultTool: "bucket",
    initGrid: false,
    correctAnswers: [
      { target: "HAIR" },
      { target: "FACE" },
      { target: "EYES" },
      { target: "LIPS" },
      { target: "SHIRT" },
      { target: "HANDS" },
      { target: "PANTS" },
      { target: "SHOES" },
    ],
    objects: [
      // ==========================================
      // 1. HAIR (TOP OF HEAD) (+40px Shift)
      // ==========================================
      {
        type: "polygon",
        points: [
          { x: -95, y: 0 },
          { x: -60, y: -65 },
          { x: 0, y: -82 },
          { x: 60, y: -65 },
          { x: 95, y: 0 },
          { x: 48, y: -30 },
          { x: 0, y: -18 },
          { x: -48, y: -30 },
        ],
        props: {
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 5,
          left: 324,
          top: 175,
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 2. FACE (SKIN SEGMENT) (+40px Shift)
      // ==========================================
      {
        type: "circle",
        props: {
          radius: 82,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 5,
          left: 324,
          top: 245,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 3. EYES (LEFT & RIGHT) (+40px Shift)
      // ==========================================
      {
        type: "circle",
        props: {
          radius: 17,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          left: 290,
          top: 230,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },
      {
        type: "circle",
        props: {
          radius: 17,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          left: 358,
          top: 230,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 4. LIPS / MOUTH (+40px Shift)
      // ==========================================
      {
        type: "polygon",
        points: [
          { x: -30, y: 0 },
          { x: 0, y: -10 },
          { x: 30, y: 0 },
          { x: 0, y: 20 },
        ],
        props: {
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          left: 324,
          top: 282,
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 5. T-SHIRT (TORSO) (+40px Shift)
      // ==========================================
      {
        type: "rect",
        props: {
          width: 175,
          height: 175,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 5,
          rx: 18,
          ry: 18,
          left: 324,
          top: 415,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 6. HANDS / ARMS (+40px Shift)
      // ==========================================
      {
        type: "rect",
        props: {
          width: 48,
          height: 140,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          rx: 16,
          ry: 16,
          left: 202,
          top: 420,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },
      {
        type: "rect",
        props: {
          width: 48,
          height: 140,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          rx: 16,
          ry: 16,
          left: 446,
          top: 420,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 7. PANTS / LEGS (+40px Shift)
      // ==========================================
      {
        type: "rect",
        props: {
          width: 65,
          height: 160,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 5,
          rx: 12,
          ry: 12,
          left: 283,
          top: 590,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },
      {
        type: "rect",
        props: {
          width: 65,
          height: 160,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 5,
          rx: 12,
          ry: 12,
          left: 365,
          top: 590,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },

      // ==========================================
      // 8. SHOES (+40px Shift)
      // ==========================================
      {
        type: "rect",
        props: {
          width: 82,
          height: 42,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          rx: 14,
          ry: 14,
          left: 274,
          top: 688,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },
      {
        type: "rect",
        props: {
          width: 82,
          height: 42,
          fill: "#ffffff",
          stroke: "#0f172a",
          strokeWidth: 4,
          rx: 14,
          ry: 14,
          left: 374,
          top: 688,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: true,
        },
      },
    ],
  },

  // ==================== 📱 EXCLUSIVE MOBILE TEMPLATES (HIGH-VISIBILITY & 2 CATEGORIES ONLY) ====================
  // --- COLORING PAD DOCK (Cat, Dog, River, Home) ---
  {
    id: "color_cat_mobile",
    title: "🐱 Coloring Pad: Pick colors and fill the Big Cat!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#ec4899",
    icon: "🐱",
    label: "Big Cat",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 124 450 C 124 180, 524 180, 524 450 C 524 640, 124 640, 124 450 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 150 290 L 90 120 L 240 240 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 498 290 L 558 120 L 408 240 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 234,
          top: 380,
          radius: 36,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 414,
          top: 380,
          radius: 36,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "triangle",
        props: {
          left: 324,
          top: 460,
          width: 50,
          height: 34,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          angle: 180,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_dog_mobile",
    title: "🐶 Coloring Pad: Fill colors inside the Happy Puppy!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#a855f7",
    icon: "🐶",
    label: "Happy Puppy",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 124 450 C 124 200, 524 200, 524 450 C 524 620, 124 620, 124 450 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 130 310 C 30 270, 40 540, 140 470 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 518 310 C 618 270, 608 540, 508 470 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 244,
          top: 380,
          radius: 32,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 404,
          top: 380,
          radius: 32,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 324,
          top: 470,
          radius: 25,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_river_mobile",
    title: "🏞️ Coloring Pad: Fill colors in the Large River and Sun scene!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
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
          left: 44,
          top: 120,
          width: 560,
          height: 550,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 324,
          top: 260,
          radius: 90,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 47 453 C 183 343, 423 583, 607 453 L 607 673 L 47 673 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_home_mobile",
    title: "🏡 Coloring Pad: Give colorful paints to the Big Playhouse!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#10b981",
    icon: "🏡",
    label: "Big House",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "triangle",
        props: {
          left: 324,
          top: 150,
          width: 500,
          height: 200,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          originX: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 114,
          top: 350,
          width: 420,
          height: 320,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 279,
          top: 510,
          width: 90,
          height: 160,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_rocket_mobile",
    title: "🚀 Coloring Pad: Zoom into Space with the Big Rocket!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#6366f1",
    icon: "🚀",
    label: "Space Rocket",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "rect",
        props: {
          left: 44,
          top: 120,
          width: 560,
          height: 550,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 450,
          top: 220,
          radius: 60,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 324 160 C 260 280, 250 500, 250 550 L 398 550 C 398 500, 388 280, 324 160 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 324,
          top: 320,
          radius: 35,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 270 558 L 324 660 L 378 558 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_teddy_mobile",
    title: "🧸 Coloring Pad: Paint the Cute Big Teddy Bear!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#f59e0b",
    icon: "🧸",
    label: "Cute Teddy",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 164 480 C 164 320, 484 320, 484 480 C 484 650, 164 650, 164 480 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 324,
          top: 300,
          radius: 95,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 220,
          top: 200,
          radius: 30,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 428,
          top: 200,
          radius: 30,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 324 440 C 324 440, 264 380, 264 420 C 264 460, 324 510, 324 510 C 324 510, 384 460, 384 420 C 384 380, 324 440, 324 440 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "color_fish_mobile",
    title: "🐠 Coloring Pad: Make the Magic Fish Colorful!",
    category: "coloring",
    classGrade: "1",
    subject: "Art",
    chapterNo: 1,
    deviceType: "mobile",
    themeColor: "#14b8a6",
    icon: "🐠",
    label: "Magic Fish",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        path: "M 144 400 C 144 220, 484 220, 484 400 C 484 580, 144 580, 144 400 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "path",
        path: "M 474 400 L 584 280 L 544 400 L 584 520 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 224,
          top: 350,
          radius: 28,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 104,
          top: 260,
          radius: 22,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "circle",
        props: {
          left: 84,
          top: 180,
          radius: 16,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },

  // --- LEVEL 1: EMOJI COUNTING & DIGIT MATCH (CLASS 1) ---
  {
    id: "math_lvl1_mobile",
    title: "🔢 Math Lvl 1: Count Objects & Connect to Correct Number!",
    category: "math",
    deviceType: "mobile",
    themeColor: "#06b6d4",
    icon: "🍎",
    label: "Easy Count",
    defaultTool: "pen",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "🍎 🍎 🍎 🍎",
        props: {
          left: 80,
          top: 220,
          fontSize: 40,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🎈 🎈 🎈",
        props: {
          left: 80,
          top: 420,
          fontSize: 40,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
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
          selectable: false,
          hasControls: false,
          hasBorders: false,
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
          fill: "#4f46e5",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },

  {
    id: "math_lvl1_addition_match_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "Maths",
    chapterNo: 1,
    chapterName: "Addition Practice",
    topic: "Single Digit Addition",
    learningObjective:
      "Students will solve simple single-digit additions and match with correct sums.",
    bloomsTaxonomyLevel: "Apply",
    title: "",
    category: "math",
    deviceType: "mobile",
    themeColor: "#10b981",
    icon: "<svg viewBox='0 0 100 100' class='w-10 h-10 inline-block'><rect x='38' y='12' width='24' height='76' rx='12' fill='#FF5722'/><rect x='12' y='38' width='76' height='24' rx='12' fill='#FF5722'/><circle cx='38' cy='42' r='4' fill='#FFF'/><circle cx='38' cy='42' r='2' fill='#000'/><circle cx='62' cy='42' r='4' fill='#FFF'/><circle cx='62' cy='42' r='2' fill='#000'/><path d='M 42 58 Q 50 66 58 58' stroke='#000' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",
    label: "Easy Addition",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "3 + 2 = ?", rightText: "5" },
      { leftText: "4 + 4 = ?", rightText: "8" },
      { leftText: "6 + 1 = ?", rightText: "7" },
    ],
    objects: [
      {
        type: "text",
        text: "Match the following 🎯",
        props: {
          left: 230,
          top: 45,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#0f766e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 140,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fef3c7",
          stroke: "#f59e0b",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "3 + 2 = ?",
        props: {
          left: 115,
          top: 180,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 350,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#e0e7ff",
          stroke: "#6366f1",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "4 + 4 = ?",
        props: {
          left: 115,
          top: 390,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#3730a3",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 560,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fce7f3",
          stroke: "#ec4899",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "6 + 1 = ?",
        props: {
          left: 115,
          top: 600,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#9d174d",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 135,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#dcfce7",
          stroke: "#22c55e",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5",
        props: {
          left: 653,
          top: 175,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#166534",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 345,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fef9c3",
          stroke: "#eab308",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "8",
        props: {
          left: 653,
          top: 385,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#854d0e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 555,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#ccfbf1",
          stroke: "#14b8a6",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "7",
        props: {
          left: 653,
          top: 595,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#115e59",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "math_lvl1_subtraction_match_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "Maths",
    chapterNo: 2,
    chapterName: "Subtraction Practice",
    topic: "Single Digit Subtraction",
    learningObjective:
      "Students will solve simple single-digit subtractions and match with correct answers.",
    bloomsTaxonomyLevel: "Apply",
    title: "",
    category: "math",
    deviceType: "mobile",
    themeColor: "#ef4444",
    icon: "<svg viewBox='0 0 100 100' class='w-10 h-10 inline-block'><rect x='12' y='38' width='76' height='24' rx='12' fill='#EF4444'/><circle cx='38' cy='42' r='4' fill='#FFF'/><circle cx='38' cy='42' r='2' fill='#000'/><circle cx='62' cy='42' r='4' fill='#FFF'/><circle cx='62' cy='42' r='2' fill='#000'/><path d='M 42 52 Q 50 58 58 52' stroke='#000' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",
    label: "Easy Subtraction",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "8 - 2 = ?", rightText: "6" },
      { leftText: "9 - 4 = ?", rightText: "5" },
      { leftText: "5 - 2 = ?", rightText: "3" },
    ],
    objects: [
      {
        type: "text",
        text: "Match the following 🎯",
        props: {
          left: 230,
          top: 45,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#991b1b",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 140,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fee2e2",
          stroke: "#f87171",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "8 - 2 = ?",
        props: {
          left: 115,
          top: 180,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#991b1b",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 350,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#ffedd5",
          stroke: "#fb923c",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "9 - 4 = ?",
        props: {
          left: 115,
          top: 390,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#9a3412",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 560,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fef9c3",
          stroke: "#facc15",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5 - 2 = ?",
        props: {
          left: 115,
          top: 600,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#854d0e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 135,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fef9c3",
          stroke: "#eab308",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "3",
        props: {
          left: 653,
          top: 175,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#854d0e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 345,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fee2e2",
          stroke: "#f87171",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "6",
        props: {
          left: 653,
          top: 385,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#991b1b",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 555,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#ffedd5",
          stroke: "#fb923c",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5",
        props: {
          left: 653,
          top: 595,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#9a3412",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },

  {
    id: "math_lvl1_multiplication_match_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "Maths",
    chapterNo: 3,
    chapterName: "Multiplication Practice",
    topic: "Basic Multiplication",
    learningObjective:
      "Students will solve simple multiplications and match with correct products.",
    bloomsTaxonomyLevel: "Apply",
    title: "",
    category: "math",
    deviceType: "mobile",
    themeColor: "#8b5cf6",
    icon: "<svg viewBox='0 0 100 100' class='w-10 h-10 inline-block'><g transform='rotate(45 50 50)'><rect x='38' y='12' width='24' height='76' rx='12' fill='#8B5CF6'/><rect x='12' y='38' width='76' height='24' rx='12' fill='#8B5CF6'/></g><circle cx='42' cy='42' r='4' fill='#FFF'/><circle cx='42' cy='42' r='2' fill='#000'/><circle cx='58' cy='42' r='4' fill='#FFF'/><circle cx='58' cy='42' r='2' fill='#000'/><path d='M 44 58 Q 50 64 56 58' stroke='#000' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",
    label: "Easy Multiplication",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "2 × 3 = ?", rightText: "6" },
      { leftText: "4 × 2 = ?", rightText: "8" },
      { leftText: "5 × 2 = ?", rightText: "10" },
    ],
    objects: [
      {
        type: "text",
        text: "Match the following 🎯",
        props: {
          left: 230,
          top: 45,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#5b21b6",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 140,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#f3e8ff",
          stroke: "#a855f7",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "2 × 3 = ?",
        props: {
          left: 115,
          top: 180,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#5b21b6",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 350,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#ede9fe",
          stroke: "#8b5cf6",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "4 × 2 = ?",
        props: {
          left: 115,
          top: 390,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#4c1d95",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 560,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fae8ff",
          stroke: "#e879f9",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5 × 2 = ?",
        props: {
          left: 115,
          top: 600,
          fontSize: 44,
          fontFamily: "Fredoka",
          fill: "#701a75",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 135,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#ede9fe",
          stroke: "#8b5cf6",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "8",
        props: {
          left: 653,
          top: 175,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#4c1d95",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 345,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fae8ff",
          stroke: "#e879f9",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "10",
        props: {
          left: 638,
          top: 385,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#701a75",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 555,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#f3e8ff",
          stroke: "#a855f7",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "6",
        props: {
          left: 653,
          top: 595,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#5b21b6",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "math_lvl1_before_after_match_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "Maths",
    chapterNo: 5,
    chapterName: "Number Sequence",
    topic: "Before and After Numbers",
    learningObjective:
      "Students will identify numbers that come before and after a given number and match them correctly.",
    bloomsTaxonomyLevel: "Apply",
    title: "",
    category: "math",
    deviceType: "mobile",
    themeColor: "#f59e0b",
    icon: "<svg viewBox='0 0 100 100' class='w-10 h-10 inline-block'><path d='M 20 50 L 50 20 L 50 40 L 80 40 L 80 60 L 50 60 L 50 80 Z' fill='#F59E0B'/><circle cx='40' cy='38' r='4' fill='#FFF'/><circle cx='40' cy='38' r='2' fill='#000'/><circle cx='60' cy='38' r='4' fill='#FFF'/><circle cx='60' cy='38' r='2' fill='#000'/><path d='M 45 52 Q 50 58 55 52' stroke='#000' stroke-width='3' fill='none' stroke-linecap='round'/></svg>",
    label: "Before & After",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "Before 7 is ?", rightText: "6" },
      { leftText: "After 4 is ?", rightText: "5" },
      { leftText: "Before 10 is ?", rightText: "9" },
    ],
    objects: [
      {
        type: "text",
        text: "Match the following 🎯",
        props: {
          left: 230,
          top: 45,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#b45309",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 140,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fef3c7",
          stroke: "#f59e0b",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Before 7 is ?",
        props: {
          left: 95,
          top: 185,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 350,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#ffedd5",
          stroke: "#fb923c",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "After 4 is ?",
        props: {
          left: 105,
          top: 395,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#9a3412",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 560,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#fef9c3",
          stroke: "#eab308",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Before 10 is ?",
        props: {
          left: 90,
          top: 605,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#854d0e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 135,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#ffedd5",
          stroke: "#fb923c",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5",
        props: {
          left: 653,
          top: 175,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#9a3412",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 345,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fef9c3",
          stroke: "#eab308",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "9",
        props: {
          left: 653,
          top: 385,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#854d0e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 555,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#fef3c7",
          stroke: "#f59e0b",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "6",
        props: {
          left: 653,
          top: 595,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#92400e",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "math_lvl1_missing_number_match_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "Maths",
    chapterNo: 6,
    chapterName: "Number Patterns",
    topic: "Missing Numbers",
    learningObjective:
      "Students will identify the missing number in a sequence and match with the correct option.",
    bloomsTaxonomyLevel: "Apply",
    title: "",
    category: "math",
    deviceType: "mobile",
    themeColor: "#06b6d4",
    icon: "<svg viewBox='0 0 100 100' class='w-10 h-10 inline-block'><rect x='15' y='15' width='70' height='70' rx='20' fill='#06B6D4'/><text x='50' y='68' font-size='55' font-weight='bold' font-family='sans-serif' fill='#FFF' text-anchor='middle'>?</text></svg>",
    label: "Missing Number",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "1, 2, __, 4", rightText: "3" },
      { leftText: "5, __, 7, 8", rightText: "6" },
      { leftText: "7, 8, 9, __", rightText: "10" },
    ],
    objects: [
      {
        type: "text",
        text: "Find the Missing Number 🔍",
        props: {
          left: 230,
          top: 45,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#0e7490",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 140,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#cffafe",
          stroke: "#06b6d4",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "1, 2, __, 4",
        props: {
          left: 110,
          top: 185,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#0e7490",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 350,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#e0f2fe",
          stroke: "#0284c7",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "5, __, 7, 8",
        props: {
          left: 110,
          top: 395,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 60,
          top: 560,
          width: 300,
          height: 130,
          rx: 24,
          ry: 24,
          fill: "#ccfbf1",
          stroke: "#14b8a6",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "7, 8, 9, __",
        props: {
          left: 110,
          top: 605,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#115e59",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 135,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#e0f2fe",
          stroke: "#0284c7",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "6",
        props: {
          left: 653,
          top: 175,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#0369a1",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 345,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#ccfbf1",
          stroke: "#14b8a6",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "10",
        props: {
          left: 638,
          top: 385,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#115e59",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "rect",
        props: {
          left: 600,
          top: 555,
          width: 140,
          height: 140,
          rx: 28,
          ry: 28,
          fill: "#cffafe",
          stroke: "#06b6d4",
          strokeWidth: 4,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "3",
        props: {
          left: 653,
          top: 595,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#0e7490",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl1_alphabet_matching_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 1,
    chapterName: "Alphabets",
    topic: "Letter to Object Matching",
    learningObjective:
      "Students will match letters with their corresponding picture words.",
    bloomsTaxonomyLevel: "Remember",
    title: "🔤 English Lvl 1: Match Letter to Picture Word!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#ef4444",
    icon: "🔤",
    label: "Letter Match",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "A", rightText: "🍎 Apple" },
      { leftText: "B", rightText: "⚽ Ball" },
      { leftText: "C", rightText: "🐱 Cat" },
    ],
    objects: [
      {
        type: "text",
        text: "A",
        props: {
          left: 80,
          top: 200,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#dc2626",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "B",
        props: {
          left: 80,
          top: 350,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#dc2626",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "C",
        props: {
          left: 80,
          top: 500,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#dc2626",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "⚽ Ball",
        props: {
          left: 540,
          top: 200,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐱 Cat",
        props: {
          left: 540,
          top: 350,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🍎 Apple",
        props: {
          left: 540,
          top: 500,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl2_letter_tracing_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 1,
    chapterName: "Handwriting",
    topic: "Letter Tracing Practice",
    learningObjective:
      "Students will trace uppercase letters using the pen tool.",
    bloomsTaxonomyLevel: "Apply",
    title: "✏️ English Lvl 2: Trace Uppercase Letters A, B, C!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#3b82f6",
    icon: "✏️",
    label: "Letter Tracing",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [],
    objects: [
      {
        type: "text",
        text: "A  B  C",
        props: {
          left: 324,
          top: 200,
          fontSize: 72,
          fontFamily: "Fredoka",
          fill: "#cbd5e1",
          stroke: "#94a3b8",
          strokeDashArray: [8, 8],
          originX: "center",
          originY: "center",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "D  E  F",
        props: {
          left: 324,
          top: 380,
          fontSize: 72,
          fontFamily: "Fredoka",
          fill: "#cbd5e1",
          stroke: "#94a3b8",
          strokeDashArray: [8, 8],
          originX: "center",
          originY: "center",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Trace over dotted lines with Pen!",
        props: {
          left: 324,
          top: 540,
          fontSize: 28,
          fontFamily: "Fredoka",
          fill: "#64748b",
          originX: "center",
          originY: "center",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl3_missing_letter_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 2,
    chapterName: "Alphabet Sequence",
    topic: "Fill Missing Letters",
    learningObjective:
      "Students will identify missing letters in alphabetical order.",
    bloomsTaxonomyLevel: "Remember & Apply",
    title: "🧩 English Lvl 3: Find Missing Alphabet Letters!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#8b5cf6",
    icon: "🧩",
    label: "Missing Letter",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "A, B,  _ , D", rightText: "C" },
      { leftText: "P, Q,  _ , S", rightText: "R" },
      { leftText: "W, X,  _ , Z", rightText: "Y" },
    ],
    objects: [
      {
        type: "text",
        text: "A, B,  _ , D",
        props: {
          left: 80,
          top: 200,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "P, Q,  _ , S",
        props: {
          left: 80,
          top: 350,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "W, X,  _ , Z",
        props: {
          left: 80,
          top: 500,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "R",
        props: {
          left: 540,
          top: 200,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#7c3aed",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Y",
        props: {
          left: 540,
          top: 350,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#7c3aed",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "C",
        props: {
          left: 540,
          top: 500,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#7c3aed",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl4_picture_word_matching_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 2,
    chapterName: "Vocabulary",
    topic: "Picture Word Recognition",
    learningObjective: "Students will match pictures with correct words.",
    bloomsTaxonomyLevel: "Understand",
    title: "🖼️ English Lvl 4: Match Pictures to Correct Word!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#10b981",
    icon: "🖼️",
    label: "Picture Match",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "☀️ Sun", rightText: "SUN" },
      { leftText: "🐶 Dog", rightText: "DOG" },
      { leftText: "🐟 Fish", rightText: "FISH" },
    ],
    objects: [
      {
        type: "text",
        text: "☀️ Sun",
        props: {
          left: 80,
          top: 200,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐶 Dog",
        props: {
          left: 80,
          top: 350,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐟 Fish",
        props: {
          left: 80,
          top: 500,
          fontSize: 42,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "DOG",
        props: {
          left: 540,
          top: 200,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#059669",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "FISH",
        props: {
          left: 540,
          top: 350,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#059669",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "SUN",
        props: {
          left: 540,
          top: 500,
          fontSize: 44,
          fontFamily: "Bangers",
          fill: "#059669",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl5_capital_small_matching_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 1,
    chapterName: "Letter Cases",
    topic: "Capital to Small Letters",
    learningObjective:
      "Students will match capital letters with their corresponding small letters.",
    bloomsTaxonomyLevel: "Remember",
    title: "🔤 English Lvl 5: Connect Capital to Small Letters!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#f59e0b",
    icon: "🔤",
    label: "Capital & Small",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "E", rightText: "e" },
      { leftText: "G", rightText: "g" },
      { leftText: "M", rightText: "m" },
    ],
    objects: [
      {
        type: "text",
        text: "E",
        props: {
          left: 80,
          top: 200,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#d97706",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "G",
        props: {
          left: 80,
          top: 350,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#d97706",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "M",
        props: {
          left: 80,
          top: 500,
          fontSize: 52,
          fontFamily: "Fredoka",
          fill: "#d97706",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "m",
        props: {
          left: 540,
          top: 200,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#2563eb",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "e",
        props: {
          left: 540,
          top: 350,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#2563eb",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "g",
        props: {
          left: 540,
          top: 500,
          fontSize: 56,
          fontFamily: "Fredoka",
          fill: "#2563eb",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl6_beginning_sound_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 3,
    chapterName: "Phonics",
    topic: "Beginning Sounds",
    learningObjective:
      "Students will identify the starting letter sound of words.",
    bloomsTaxonomyLevel: "Understand",
    title: "🔊 English Lvl 6: Match Starting Letter Sound!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#06b6d4",
    icon: "🔊",
    label: "Starting Sound",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "Starts with 'B'", rightText: "⚽ Ball" },
      { leftText: "Starts with 'D'", rightText: "🦆 Duck" },
      { leftText: "Starts with 'F'", rightText: "🐸 Frog" },
    ],
    objects: [
      {
        type: "text",
        text: "Starts with 'B'",
        props: {
          left: 80,
          top: 200,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Starts with 'D'",
        props: {
          left: 80,
          top: 350,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Starts with 'F'",
        props: {
          left: 80,
          top: 500,
          fontSize: 36,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐸 Frog",
        props: {
          left: 540,
          top: 200,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#0891b2",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "⚽ Ball",
        props: {
          left: 540,
          top: 350,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#0891b2",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🦆 Duck",
        props: {
          left: 540,
          top: 500,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#0891b2",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl7_make_a_word_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 3,
    chapterName: "Word Building",
    topic: "CVC Word Formation",
    learningObjective: "Students will combine letter sounds to form CVC words.",
    bloomsTaxonomyLevel: "Apply",
    title: "📝 English Lvl 7: Join Letters to Make Words!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#ec4899",
    icon: "📝",
    label: "Make a Word",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "C + A + T =", rightText: "🐱 CAT" },
      { leftText: "D + O + G =", rightText: "🐶 DOG" },
      { leftText: "P + E + N =", rightText: "🖊️ PEN" },
    ],
    objects: [
      {
        type: "text",
        text: "C + A + T =",
        props: {
          left: 80,
          top: 200,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "D + O + G =",
        props: {
          left: 80,
          top: 350,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "P + E + N =",
        props: {
          left: 80,
          top: 500,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🖊️ PEN",
        props: {
          left: 540,
          top: 200,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#db2777",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐱 CAT",
        props: {
          left: 540,
          top: 350,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#db2777",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐶 DOG",
        props: {
          left: 540,
          top: 500,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#db2777",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl9_find_letter_mobile",
    board: "CBSE",
    classGrade: "1",
    subject: "English",
    chapterNo: 1,
    chapterName: "Letter Identification",
    topic: "Find Letter in Words",
    learningObjective:
      "Students will locate and match words containing the target letter 'A'.",
    bloomsTaxonomyLevel: "Analyze",
    title: "👆 English Lvl 9: Find Target Letter 'A' in Words!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#14b8a6",
    icon: "👆",
    label: "Find Letter A",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "Letter 'A' in", rightText: "🍎 APPLE" },
      { leftText: "Letter 'A' in", rightText: "🐜 ANT" },
      { leftText: "Letter 'A' in", rightText: "🪓 AXE" },
    ],
    objects: [
      {
        type: "text",
        text: "Find 'A' in Word",
        props: {
          left: 80,
          top: 200,
          fontSize: 34,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Find 'A' in Word",
        props: {
          left: 80,
          top: 350,
          fontSize: 34,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "Find 'A' in Word",
        props: {
          left: 80,
          top: 500,
          fontSize: 34,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐜 ANT",
        props: {
          left: 540,
          top: 200,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#0d9488",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🪓 AXE",
        props: {
          left: 540,
          top: 350,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#0d9488",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🍎 APPLE",
        props: {
          left: 540,
          top: 500,
          fontSize: 40,
          fontFamily: "Bangers",
          fill: "#0d9488",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
  {
    id: "eng_lvl10_sentence_building_mobile",
    board: "CBSE",
    classGrade: "2",
    subject: "English",
    chapterNo: 5,
    chapterName: "Sentence Structure",
    topic: "Basic Sentence Formation",
    learningObjective:
      "Students will match sentence starters with correct endings.",
    bloomsTaxonomyLevel: "Apply",
    title: "📖 English Lvl 10: Complete Simple Sentences!",
    category: "english",
    deviceType: "mobile",
    themeColor: "#84cc16",
    icon: "📖",
    label: "Simple Sentence",
    defaultTool: "pen",
    initGrid: false,
    correctAnswers: [
      { leftText: "I am a ...", rightText: "👦 boy." },
      { leftText: "This is a ...", rightText: "🐱 cat." },
      { leftText: "I like ...", rightText: "🍎 apples." },
    ],
    objects: [
      {
        type: "text",
        text: "I am a ...",
        props: {
          left: 80,
          top: 200,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "This is a ...",
        props: {
          left: 80,
          top: 350,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "I like ...",
        props: {
          left: 80,
          top: 500,
          fontSize: 38,
          fontFamily: "Fredoka",
          fill: "#1e293b",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐱 cat.",
        props: {
          left: 540,
          top: 200,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#65a30d",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🍎 apples.",
        props: {
          left: 540,
          top: 350,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#65a30d",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "👦 boy.",
        props: {
          left: 540,
          top: 500,
          fontSize: 40,
          fontFamily: "Fredoka",
          fill: "#65a30d",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
    ],
  },
];

// 2. HELPER UNIFIED INFRASTRUCTURES
function applyStrictLayerLocks(fabricObj) {
  if (!fabricObj) return;

  // Full Object Movement & Transformation Lock
  fabricObj.set({
    lockMovementX: true,
    lockMovementY: true,
    lockRotation: true,
    lockScalingX: true,
    lockScalingY: true,
    hasControls: false,
    hasBorders: false,
    hoverCursor: fabricObj.role === "color_segment" ? "pointer" : "default",
  });

  // Text & Static Labels Ko Completely Non-Selectable Banaen
  if (
    fabricObj.type === "text" ||
    fabricObj.role === "label" ||
    fabricObj.role === "background_art"
  ) {
    fabricObj.set({
      selectable: false,
      evented: false, // Mouse click directly pass-through ho kar niche box par lagega
    });
  } else if (fabricObj.role === "color_segment") {
    fabricObj.set({
      selectable: false,
      evented: true, // Only fillable shapes will receive click events
    });
  }
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

// ---------------------------------------------------------
// 1. CORE UNIVERSAL DYNAMIC LOADER ENGINE
// ---------------------------------------------------------
function loadTemplateById(templateId) {
  const template = TEMPLATES_DATABASE.find((t) => t.id === templateId);
  if (!template) return;

  // 🎯 Template load hone par Global State set karein
  // (Isse canvas background bucket fill automatically disable ho jayega)
  if (typeof currentTemplate !== "undefined") {
    currentTemplate = template;
  } else {
    window.currentTemplate = template;
  }

  const activeBoard = template.board || "CBSE";

  if (typeof board !== "undefined") {
    board = activeBoard;
  } else {
    window.board = activeBoard;
  }

  if (typeof setTemplateMeta === "function") {
    setTemplateMeta({
      id: template.id,
      title: template.title || template.label || "Untitled Template",
      category: template.category || "General",
      defaultTool: template.defaultTool || "select",
      label: template.label || "Template",
    });
  }

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

// ---------------------------------------------------------
// 2. DYNAMIC FILTER SYSTEM: AUTOMATIC SCREEN RESOLUTION SNIFFER
// ---------------------------------------------------------
function filterTemplatesByCategory(categoryName = "all") {
  const sidebarContainer = document.getElementById("templates-sidebar");
  if (!sidebarContainer) return;

  // 📱 Mobile & Tablet/iPad (<= 1024px) detection
  const isMobile = window.innerWidth <= 1024;
  const currentDevice = isMobile ? "mobile" : "web";

  const classFilter = document.getElementById("filter-class")?.value || "all";
  const subjectFilter =
    document.getElementById("filter-subject")?.value || "all";

  let filtered = TEMPLATES_DATABASE.filter(
    (t) => t.deviceType === currentDevice,
  );

  if (categoryName !== "all") {
    filtered = filtered.filter((t) => t.category === categoryName);
  }

  // ---------------------------------------------------------
  // 📱 1. MOBILE & TABLET VIEW (FIXED BOTTOM SUBJECT BAR)
  // ---------------------------------------------------------
  if (isMobile) {
    sidebarContainer.style.display = "block";
    sidebarContainer.className =
      "w-full bg-white/90 backdrop-blur-xl border-t border-slate-200/80 px-2 py-2 select-none shadow-[0_-8px_20px_rgba(0,0,0,0.06)] fixed bottom-0 left-0 z-50 shrink-0";

    sidebarContainer.style.paddingBottom =
      "calc(0.5rem + env(safe-area-inset-bottom, 0px))";

    const subjects = [
      { name: "Maths", val: "math", icon: "📐" },
      { name: "Computer", val: "computer", icon: "💻" },
      { name: "Art", val: "art", icon: "🎨" },
      { name: "English", val: "english", icon: "🔤" },
    ];

    let mobileHtml = `
      <div class="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth w-full px-1 py-1 touch-pan-x justify-around sm:justify-center">
    `;

    subjects.forEach((sub) => {
      mobileHtml += `
        <button type="button"
                onclick="openSubjectModal('${sub.val}', '${sub.name}')" 
                class="group relative flex flex-col items-center justify-center flex-shrink-0 min-w-[82px] max-w-[120px] flex-1 py-2 px-2.5 bg-slate-50/90 active:bg-indigo-50 border border-slate-200/80 active:border-indigo-300 rounded-2xl transition-all duration-200 active:scale-95 touch-manipulation shadow-2xs">
          
          <div class="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-2xl shadow-inner group-active:scale-110 transition-transform duration-200">
            ${sub.icon}
          </div>
          
          <span class="text-xs sm:text-sm font-black text-slate-800 group-active:text-indigo-600 mt-1.5 whitespace-nowrap tracking-tight leading-none">
            ${sub.name}
          </span>
        </button>
      `;
    });

    mobileHtml += `</div>`;
    sidebarContainer.innerHTML = mobileHtml;
    return;
  }

  // ---------------------------------------------------------
  // 🖥️ 2. DESKTOP/WEB VIEW (FULL SIDEBAR WITH FILTERS)
  // ---------------------------------------------------------
  sidebarContainer.style.display = "";

  if (classFilter !== "all") {
    filtered = filtered.filter(
      (t) => String(t.classGrade) === String(classFilter),
    );
  }

  if (subjectFilter !== "all") {
    filtered = filtered.filter((t) =>
      t.subject?.toLowerCase().includes(subjectFilter.toLowerCase()),
    );
  }

  sidebarContainer.className =
    "w-96 min-w-[384px] bg-white border-r border-slate-200 flex flex-col h-full select-none shadow-sm";

  let htmlContent = `
    <!-- HEADER -->
    <div class="hidden p-4 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold text-xl">🎨</div>
        <div>
          <h2 class="font-black text-slate-800 text-base tracking-tight leading-none">Worksheet Templates</h2>
          <span class="text-[10px] font-bold text-slate-400">CBSE Curriculum Library</span>
        </div>
      </div>
    </div>

    <!-- FILTERS -->
    <div class="hidden p-4 bg-slate-50/60 border-b border-slate-100 space-y-3">
      <div class="grid grid-cols-2 gap-3">
        <div>
          <label class="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Class Grade</label>
          <select id="filter-class" onchange="filterTemplatesByCategory('${categoryName}')" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="all" ${classFilter === "all" ? "selected" : ""}>All Classes</option>
            <option value="1" ${classFilter === "1" ? "selected" : ""}>Class 1</option>
            <option value="2" ${classFilter === "2" ? "selected" : ""}>Class 2</option>
            <option value="3" ${classFilter === "3" ? "selected" : ""}>Class 3</option>
          </select>
        </div>
        <div>
          <label class="block text-[10px] font-black text-slate-500 uppercase tracking-wider mb-1">Subject</label>
          <select id="filter-subject" onchange="filterTemplatesByCategory('${categoryName}')" class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-bold text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option value="all" ${subjectFilter === "all" ? "selected" : ""}>All Subjects</option>
            <option value="computer" ${subjectFilter === "computer" ? "selected" : ""}>Computer Science</option>
            <option value="math" ${subjectFilter === "math" ? "selected" : ""}>Maths</option>
            <option value="art" ${subjectFilter === "art" ? "selected" : ""}>Art & Tracing</option>
            <option value="english" ${subjectFilter === "english" ? "selected" : ""}>English</option>
          </select>
        </div>
      </div>
    </div>

    <!-- 📦 SCROLLABLE CONTAINER -->
    <div class="flex-1 overflow-y-auto p-4 custom-scrollbar">
      <div class="grid grid-cols-2 gap-3.5">
  `;

  if (filtered.length === 0) {
    htmlContent += `
      <div class="col-span-2 text-center py-8 text-slate-400 text-xs font-bold">
        No templates found.
      </div>
    `;
  } else {
    filtered.forEach((t) => {
      htmlContent += `
        <div class="template-card group relative bg-slate-50 hover:bg-indigo-50/70 border border-slate-200 hover:border-indigo-300 rounded-2xl p-3 flex flex-col items-center justify-center cursor-pointer transition-all duration-200 shadow-sm hover:shadow-md" 
             onclick="loadTemplateById('${t.id}')">
          <div class="w-full aspect-[4/3] bg-white rounded-xl border border-slate-100 flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-200">
            ${t.icon || "📄"}
          </div>
          <div class="w-full mt-2.5 text-center">
            <div class="text-xs font-black text-slate-800 group-hover:text-indigo-600 truncate w-full">
              ${t.label || t.title}
            </div>
            <div class="text-[10px] font-bold text-slate-400 mt-0.5">Class ${t.classGrade || 1} • ${t.subject || "Maths"}</div>
          </div>
        </div>
      `;
    });
  }

  htmlContent += `
      </div>
    </div>
  `;

  sidebarContainer.innerHTML = htmlContent;
}

// ---------------------------------------------------------
// 3. CANVA STYLE SLIDE-UP MODAL LOGIC
// ---------------------------------------------------------
function openSubjectModal(subjectKey, subjectName) {
  const modal = document.getElementById("mobile-template-modal");
  const modalTitle = document.getElementById("mobile-modal-title");
  const modalGrid = document.getElementById("mobile-modal-grid");

  if (!modal || !modalGrid) return;

  modalTitle.innerText = `${subjectName} Templates`;

  const templates = TEMPLATES_DATABASE.filter((t) => {
    if (t.deviceType !== "mobile") return false;
    const sub = (t.subject || "").toLowerCase();
    const searchKey = subjectKey.toLowerCase();

    if (searchKey === "math") {
      return sub.includes("math") || sub.includes("maths");
    }
    return sub.includes(searchKey);
  });

  let gridHtml = "";

  if (templates.length === 0) {
    gridHtml = `
      <div class="col-span-3 text-center py-8 text-slate-400 text-xs font-bold">
        No ${subjectName} templates available right now.
      </div>
    `;
  } else {
    templates.forEach((t) => {
      gridHtml += `
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-2 flex flex-col items-center justify-center cursor-pointer active:scale-95 transition-transform shadow-sm"
             onclick="selectMobileTemplate('${t.id}')">
          <div class="w-full h-16 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-2xl shadow-inner">
            ${t.icon || "📄"}
          </div>
          <div class="w-full mt-1.5 text-center">
            <div class="text-[11px] font-black text-slate-800 truncate leading-tight w-full">
              ${t.label || t.title}
            </div>
            <div class="text-[9px] font-bold text-slate-400 mt-0.5">Cl ${t.classGrade || 1}</div>
          </div>
        </div>
      `;
    });
  }

  modalGrid.innerHTML = gridHtml;

  modal.classList.remove("translate-y-full", "pointer-events-none");
  modal.classList.add("translate-y-0");
}

function closeSubjectModal() {
  const modal = document.getElementById("mobile-template-modal");
  if (modal) {
    modal.classList.remove("translate-y-0");
    modal.classList.add("translate-y-full", "pointer-events-none");
  }
}

function selectMobileTemplate(templateId) {
  closeSubjectModal();
  if (typeof loadTemplateById === "function") {
    loadTemplateById(templateId);
  }
}

// ---------------------------------------------------------
// 4. WINDOW INITIALIZATION CORE WRAPPERS
// ---------------------------------------------------------
function loadTracingTemplate() {
  const dev = window.innerWidth <= 1024 ? "color_cat_mobile" : "tracing_abc";
  loadTemplateById(dev);
}
function loadColoringTemplate() {
  const dev = window.innerWidth <= 1024 ? "color_cat_mobile" : "coloring_cat";
  loadTemplateById(dev);
}
function loadDotsTemplate() {
  const dev = window.innerWidth <= 1024 ? "math_lvl1_mobile" : "puzzle_dots";
  loadTemplateById(dev);
}
function loadMazeTemplate() {
  const dev = window.innerWidth <= 1024 ? "math_lvl1_mobile" : "puzzle_maze";
  loadTemplateById(dev);
}
function loadSymmetryTemplate() {
  const dev =
    window.innerWidth <= 1024 ? "color_cat_mobile" : "symmetry_mirror";
  loadTemplateById(dev);
}
function loadMathTemplate() {
  const dev = window.innerWidth <= 1024 ? "math_lvl1_mobile" : "math_matrix";
  loadTemplateById(dev);
}

// Single Clean DOM Listener (Window Resize event added for auto-responsiveness)
document.addEventListener("DOMContentLoaded", () => {
  filterTemplatesByCategory("all");
});

window.addEventListener("resize", () => {
  filterTemplatesByCategory("all");
});
