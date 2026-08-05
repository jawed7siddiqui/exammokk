/**
 * Kids Paint - Unified Educational Templates Database Engine
 * Smart Filter Edition: Mobile view features massive visibility for Coloring & Math Matrix.
 */

// 1. UNIFIED TEMPLATES DATABASE WITH DEVICE FILTER TAGS
const TEMPLATES_DATABASE = [
  // ==================== 💻 DESKTOP / WEB TEMPLATES ====================
  {
    id: "tracing_abc",
    title: "✨ Trace over the Alphabet with your Brush!",
    category: "tracing",
    deviceType: "web",
    themeColor: "#4f46e5",
    icon: "A B C",
    label: "Alphabet",
    defaultTool: "brush",
    initGrid: false,
    objects: [
      {
        type: "text",
        text: "A  B  C",
        props: {
          fontSize: 180, // बच्चों के लिए आसान ट्रेसिंग हेतु आकार थोड़ा बड़ा किया गया
          fontFamily: "Fredoka",
          fontWeight: "bold",
          fill: "transparent",
          stroke: "#cbd5e1",
          strokeWidth: 6, // डेस्कटॉप स्क्रीन पर क्रिस्प दिखने के लिए थिकनेस बढ़ाई गई
          strokeDashArray: [12, 10], // परफेक्ट डॉट-डैश ट्रेसिंग गाइडलाइन्स
          left: 576, // 1152 चौड़ाई का सटीक हॉरिजॉन्टल सेंटर लॉक
          top: 380, // ऊपर टेक्स्ट से परफेक्ट वर्टिकल स्पेसिंग बनाए रखने के लिए थोड़ा नीचे खिसकाया
          originX: "center",
          originY: "center",
          role: "background_art",
        },
      },
    ],
  },
  // ==========================================
  // DESKTOP DESIGNS (WIDTH: 1152, HEIGHT: 648)
  // Centered & Optimized with Top Vertical Spacing
  // ==========================================

  {
    id: "coloring_cat",
    title: "🐱 Fill colors inside the Big Cat!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#ec4899",
    icon: "🐱🎨",
    label: "Cat",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        // मुख्य चेहरा (Pushed down to Y=370)
        path: "M 376 370 C 376 160, 776 160, 776 370 C 776 540, 376 540, 376 370 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "path",
        // बायाँ कान
        path: "M 396 250 L 336 100 L 486 200 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "path",
        // दायाँ कान
        path: "M 756 250 L 816 100 L 666 200 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // बाईं आँख
        props: {
          left: 486,
          top: 310,
          radius: 28,
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
        // दाईं आँख
        props: {
          left: 666,
          top: 310,
          radius: 28,
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
        // नाक
        props: {
          left: 576,
          top: 380,
          width: 44,
          height: 28,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          angle: 180,
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_dog",
    title: "🐶 Color the Happy Puppy!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#a855f7",
    icon: "🐶",
    label: "Puppy",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        // पिल्ले का चेहरा (Pushed down to Y=380)
        path: "M 376 380 C 376 180, 776 180, 776 380 C 776 535, 376 535, 376 380 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "path",
        // बायाँ लंबा कान
        path: "M 380 270 C 300 230, 310 470, 390 400 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "path",
        // दायाँ लंबा कान
        path: "M 772 270 C 852 230, 842 470, 762 400 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // बाईं आँख
        props: {
          left: 476,
          top: 320,
          radius: 25,
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
        // दाईं आँख
        props: {
          left: 676,
          top: 320,
          radius: 25,
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
        // प्यारी गोल नाक
        props: {
          left: 576,
          top: 405,
          radius: 22,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_river",
    title: "🏞️ Paint the River & Sun Nature Scene!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#0ea5e9",
    icon: "🏞️",
    label: "River",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "rect",
        // मुख्य लैंडस्केप बैकड्रॉप (Pushed down to top: 110)
        props: {
          left: 176,
          top: 110,
          width: 800,
          height: 460,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // सूर्य
        props: {
          left: 576,
          top: 290,
          radius: 85,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "path",
        // बहती हुई लहरदार नदी
        path: "M 176 410 C 350 310, 650 510, 976 410 L 976 570 L 176 570 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_home",
    title: "🏡 Color the Playhouse Roof & Walls!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#10b981",
    icon: "🏡",
    label: "House",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "triangle",
        // घर की छत (Pushed down to top: 120)
        props: {
          left: 576,
          top: 120,
          width: 560,
          height: 180,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          originX: "center",
          role: "color_segment",
        },
      },
      {
        type: "rect",
        // मुख्य निचला कमरा
        props: {
          left: 336,
          top: 300,
          width: 480,
          height: 260,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
        },
      },
      {
        type: "rect",
        // मुख्य प्रवेश द्वार
        props: {
          left: 526,
          top: 410,
          width: 100,
          height: 150,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_rocket",
    title: "🚀 Paint the Flying Space Rocket!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#6366f1",
    icon: "🚀",
    label: "Rocket",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "rect",
        // स्पेस कैनवास फ्रेम (Pushed down to top: 100)
        props: {
          left: 226,
          top: 100,
          width: 700,
          height: 480,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // चाँद
        props: {
          left: 800,
          top: 200,
          radius: 55,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "path",
        // मुख्य रॉकेट का ढांचा
        path: "M 576 140 C 516 240, 506 430, 506 480 L 646 480 C 646 430, 636 240, 576 140 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // रॉकेट की गोल खिड़की
        props: {
          left: 576,
          top: 290,
          radius: 32,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "path",
        // बूस्टर से निकलने वाली ब्लास्ट आग
        path: "M 526 486 L 576 560 L 626 486 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_teddy",
    title: "🧸 Paint the Heart on the Teddy Bear!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#f59e0b",
    icon: "🧸",
    label: "Teddy",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        // भालू का गोल-मटोल धड़ (Pushed down to Y=390)
        path: "M 396 390 C 396 250, 756 250, 756 390 C 756 550, 396 550, 396 390 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // गोल मासूम चेहरा
        props: {
          left: 576,
          top: 230,
          radius: 85,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // बायाँ गोल कान
        props: {
          left: 486,
          top: 140,
          radius: 28,
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
        // दायाँ गोल कान
        props: {
          left: 666,
          top: 140,
          radius: 28,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          originX: "center",
          originY: "center",
          role: "color_segment",
        },
      },
      {
        type: "path",
        // भालू के पेट पर बना सुंदर सा दिल
        path: "M 576 350 C 576 350, 516 290, 516 330 C 516 370, 576 420, 576 420 C 576 420, 636 370, 636 330 C 636 290, 576 350, 576 350 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
          role: "color_segment",
        },
      },
    ],
  },
  {
    id: "coloring_fish",
    title: "🐠 Fill colors inside the Magic Fish!",
    category: "coloring",
    deviceType: "web",
    themeColor: "#14b8a6",
    icon: "🐠",
    label: "Fish",
    defaultTool: "bucket",
    initGrid: false,
    objects: [
      {
        type: "path",
        // जादुई मछली का मुख्य अंडाकार शरीर (Pushed down to Y=350)
        path: "M 356 350 C 356 190, 696 190, 696 350 C 696 510, 356 510, 356 350 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 6,
          role: "color_segment",
        },
      },
      {
        type: "path",
        // मछली के पीछे तैरने वाला विशाल फिन/पूंछ
        path: "M 686 350 L 796 230 L 756 350 L 796 470 Z",
        props: {
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 5,
          role: "color_segment",
        },
      },
      {
        type: "circle",
        // बड़ी एनिमे आँख
        props: {
          left: 436,
          top: 300,
          radius: 25,
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
        // फ्लोटिंग एयर बबल 1
        props: {
          left: 300,
          top: 220,
          radius: 20,
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
        // फ्लोटिंग एयर बबल 2
        props: {
          left: 260,
          top: 150,
          radius: 14,
          fill: "#ffffff",
          stroke: "#000000",
          strokeWidth: 4,
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
        path: "M 44 450 C 180 340, 420 580, 604 450 L 604 670 L 44 670 Z",
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

  // --- MATH MATRIX BOOSTER ---
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
        props: {
          left: 80,
          top: 220,
          fontSize: 44,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🍉 🍉",
        props: {
          left: 80,
          top: 420,
          fontSize: 44,
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
        text: "2",
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
        text: "🍌",
        props: {
          left: 80,
          top: 420,
          fontSize: 44,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
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
          fill: "#ec4899",
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
        props: {
          left: 60,
          top: 220,
          fontSize: 38,
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
          left: 60,
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
          fill: "#10b981",
          fontWeight: "bold",
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
          left: 540,
          top: 415,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#10b981",
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
        props: {
          left: 80,
          top: 220,
          fontSize: 44,
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
        },
      },
      {
        type: "text",
        text: "🐱 🐱 🐱 🐱",
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
        text: "4",
        props: {
          left: 540,
          top: 215,
          fontSize: 52,
          fontFamily: "Bangers",
          fill: "#f59e0b",
          fontWeight: "bold",
          role: "background_art",
          selectable: false,
          hasControls: false,
          hasBorders: false,
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
          selectable: false,
          hasControls: false,
          hasBorders: false,
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
