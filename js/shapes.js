// shapes.js
export const SHAPE_LIBRARY = {
  // 1. BASIC SHAPES (Expanded)
  basic: {
    title: "Basic Shapes",
    items: {
      square: {
        name: "Square",
        type: "rect",
        attr: { x: 4, y: 4, width: 16, height: 16, rx: 0.5 },
        color: "#6366f1",
      },
      circle: {
        name: "Circle",
        type: "circle",
        attr: { cx: 12, cy: 12, r: 8 },
        color: "#ec4899",
      },
      triangle: {
        name: "Triangle",
        type: "path",
        attr: { d: "M 12 4 L 4 20 H 20 L 12 4 Z" },
        color: "#f59e0b",
      },
      rect_soft: {
        name: "Soft Rect",
        type: "rect",
        attr: { x: 3, y: 6, width: 18, height: 12, rx: 3 },
        color: "#6366f1",
      },
      rect_round: {
        name: "Pill",
        type: "rect",
        attr: { x: 2, y: 7, width: 20, height: 10, rx: 5 },
        color: "#8b5cf6",
      },
      diamond: {
        name: "Diamond",
        type: "path",
        attr: { d: "M 12 2 L 20 12 L 12 22 L 4 12 Z" },
        color: "#10b981",
      },
      parallelogram: {
        name: "Slope",
        type: "path",
        attr: { d: "M 7 5 L 21 5 L 17 19 L 3 19 Z" },
        color: "#3b82f6",
      },
      trapezoid: {
        name: "Trapezoid",
        type: "path",
        attr: { d: "M 6 6 L 18 6 L 22 18 L 2 18 Z" },
        color: "#f43f5e",
      },
    },
  },

  // 2. GRAPHICS & SYMBOLS (Canva Style Icons)
  graphics: {
    title: "Graphics & Icons",
    items: {
      hexagon: {
        name: "Hexagon",
        type: "path",
        attr: { d: "M 12 2 L 21 7 L 21 17 L 12 22 L 3 17 L 3 7 Z" },
        color: "#14b8a6",
      },
      star5: {
        name: "Star",
        type: "path",
        attr: {
          d: "M 12 2 L 15.09 8.26 L 22 9.27 L 17 14.14 L 18.18 21.02 L 12 17.77 L 5.82 21.02 L 7 14.14 L 2 9.27 L 8.91 8.26 Z",
        },
        color: "#facc15",
      },
      heart: {
        name: "Heart",
        type: "path",
        attr: {
          d: "M 12 21.35 l -1.45 -1.32 C 5.4 15.36 2 12.28 2 8.5 C 2 5.42 4.42 3 7.5 3 c 1.74 0 3.41 0.81 4.5 2.09 C 13.09 3.81 14.76 3 16.5 3 C 19.58 3 22 5.42 22 8.5 c 0 3.78 -3.4 6.86 -8.55 11.54 L 12 21.35 z",
        },
        color: "#ef4444",
      },
      arrow_right: {
        name: "Arrow",
        type: "path",
        attr: { d: "M 12 2 L 22 12 L 12 22 L 12 17 L 2 17 L 2 7 L 12 7 Z" },
        color: "#6366f1",
      },
      moon: {
        name: "Moon",
        type: "path",
        attr: { d: "M 21 12.79 A 9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79 z" },
        color: "#4f46e5",
      },
      bolt: {
        name: "Bolt",
        type: "path",
        attr: { d: "M 13 2 L 3 14 h 9 l -1 8 l 10 -12 h -9 l 1 -8 z" },
        color: "#eab308",
      },
      badge: {
        name: "Badge",
        type: "path",
        attr: {
          d: "M 12 2l 3 1.5 3.5-1 1.5 3 3 1.5-1 3.5 1 3.5-3 1.5-1.5 3-3.5-1-3 1.5-3-1.5-3.5 1-1.5-3-3-1.5 1-3.5-1-3.5 3-1.5 1.5-3 3.5 1 3-1.5z",
        },
        color: "#ec4899",
      },
      plus: {
        name: "Plus",
        type: "path",
        attr: {
          d: "M 19 13 h -6 v 6 h -2 v -6 H 5 v -2 h 6 V 5 h 2 v 6 h 6 z",
        },
        color: "#10b981",
      },
    },
  },

  // 3. ANNOTATIONS (Speech Bubbles & UI)
  annotations: {
    title: "Speech Bubbles",
    items: {
      chat_round: {
        name: "Chat",
        type: "path",
        attr: {
          d: "M 21 11.5 a 8.38 8.38 0 0 1 -.9 3.8 8.5 8.5 0 0 1 -7.6 4.7 8.38 8.38 0 0 1 -3.8 -.9 L 3 21 l 1.9 -5.7 a 8.38 8.38 0 0 1 -.9 -3.8 8.5 8.5 0 0 1 4.7 -7.6 8.38 8.38 0 0 1 3.8 -.9 h .5 a 8.48 8.48 0 0 1 8 8 v .5 z",
        },
        color: "#64748b",
      },
      chat_square: {
        name: "Quote",
        type: "path",
        attr: {
          d: "M 21 15 a 2 2 0 0 1 -2 2 H 7 l -4 4 V 5 a 2 2 0 0 1 2 -2 h 14 a 2 2 0 0 1 2 2 z",
        },
        color: "#475569",
      },
      tag: {
        name: "Tag",
        type: "path",
        attr: {
          d: "M 20.59 13.41 l -7.17 7.17 a 2 2 0 0 1 -2.83 0 L 2 12 V 2 h 10 l 8.59 8.59 a 2 2 0 0 1 0 2.82 z M 7 7 h .01",
        },
        color: "#06b6d4",
      },
      bookmark: {
        name: "Bookmark",
        type: "path",
        attr: {
          d: "M 19 21 l -7 -5 l -7 5 V 5 a 2 2 0 0 1 2 -2 h 10 a 2 2 0 0 1 2 2 z",
        },
        color: "#f97316",
      },
    },
  },

  // 4. LINES & CONNECTORS
  lines: {
    title: "Lines & Connectors",
    items: {
      line_solid: {
        name: "Line",
        type: "line",
        isLine: true,
        attr: { x1: 2, y1: 12, x2: 22, y2: 12 },
        color: "#334155",
      },
      line_dashed: {
        name: "Dashed",
        type: "line",
        isLine: true,
        attr: { x1: 2, y1: 12, x2: 22, y2: 12, "stroke-dasharray": "4,4" },
        color: "#334155",
      },
      line_dotted: {
        name: "Dotted",
        type: "line",
        isLine: true,
        attr: { x1: 2, y1: 12, x2: 22, y2: 12, "stroke-dasharray": "1,4" },
        color: "#334155",
      },
      arrow_line: {
        name: "Arrow Line",
        type: "path",
        isLine: true,
        attr: { d: "M 2 12 H 20 M 16 8 L 21 12 L 16 16" },
        color: "#334155",
      },
      double_arrow: {
        name: "Two Way",
        type: "path",
        isLine: true,
        attr: { d: "M 4 12 H 20 M 7 8 L 2 12 L 7 16 M 17 8 L 22 12 L 17 16" },
        color: "#334155",
      },
      curve: {
        name: "Curve",
        type: "path",
        isLine: true,
        attr: { d: "M 2 17 C 8 7, 16 7, 22 17" },
        color: "#334155",
      },
    },
  },
};
