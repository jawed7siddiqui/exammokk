// colorfillTemplate.js - High-Scale Full-Canvas Coloring Templates for Mobile View

const COLORFILL_CATEGORIES = [
  {
    id: "cat-fruits",
    name: "Fruits",
    icon: "🍎",
    templates: [
      {
        id: "fruit-apple",
        title: "Giant Apple",
        icon: "🍎",
        svgElements: [
          // Apple Body (Full Canvas Coverage: 100 to 700)
          {
            type: "path",
            path: "M 300 160 C 300 40, 80 40, 80 200 C 80 460, 300 700, 400 750 C 500 700, 720 460, 720 200 C 720 40, 500 40, 500 160 C 440 100, 360 100, 300 160 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Big Leaf
          {
            type: "path",
            path: "M 420 110 C 490 20, 600 30, 630 100 C 560 140, 480 140, 420 110 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
          // Stem
          {
            type: "path",
            path: "M 385 160 Q 400 40, 430 10 Q 415 40, 405 160 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
        ],
      },
      {
        id: "fruit-mango",
        title: "King Mango",
        icon: "🥭",
        svgElements: [
          // Mango Body
          {
            type: "path",
            path: "M 330 110 C 110 180, 80 470, 240 660 C 390 820, 650 760, 700 520 C 750 280, 530 40, 330 110 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Leaf
          {
            type: "path",
            path: "M 320 100 C 230 10, 150 40, 130 110 C 200 140, 270 140, 320 100 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
        ],
      },
      {
        id: "fruit-strawberry",
        title: "Strawberry",
        icon: "🍓",
        svgElements: [
          // Berry Body
          {
            type: "path",
            path: "M 210 200 C 70 290, 170 680, 400 770 C 630 680, 730 290, 590 200 C 470 120, 330 120, 210 200 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Crown Leaves
          {
            type: "path",
            path: "M 270 170 L 220 60 L 320 150 L 400 30 L 480 150 L 580 60 L 530 170 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
      {
        id: "fruit-watermelon",
        title: "Watermelon",
        icon: "🍉",
        svgElements: [
          // Outer Rind Slice
          {
            type: "path",
            path: "M 80 250 C 80 660, 720 660, 720 250 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 14,
          },
          // Inner Pulp
          {
            type: "path",
            path: "M 120 280 C 120 610, 680 610, 680 280 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
          // Seeds (Tappable Spots)
          {
            type: "circle",
            left: 260,
            top: 380,
            radius: 16,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
          {
            type: "circle",
            left: 400,
            top: 480,
            radius: 16,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
          {
            type: "circle",
            left: 540,
            top: 380,
            radius: 16,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
        ],
      },
      {
        id: "fruit-banana",
        title: "Ripe Banana",
        icon: "🍌",
        svgElements: [
          // Banana Body
          {
            type: "path",
            path: "M 150 180 C 260 520, 580 720, 760 560 C 530 670, 280 500, 180 170 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Top Stem Tip
          {
            type: "path",
            path: "M 150 180 L 110 140 L 130 115 L 180 170 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
      {
        id: "fruit-pineapple",
        title: "Pineapple",
        icon: "🍍",
        svgElements: [
          // Pineapple Body
          {
            type: "path",
            path: "M 220 340 C 160 480, 180 680, 400 730 C 620 680, 640 480, 580 340 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Spiky Crown
          {
            type: "path",
            path: "M 320 340 L 260 140 L 350 240 L 400 80 L 450 240 L 540 140 L 480 340 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
    ],
  },
  {
    id: "cat-vehicles",
    name: "Vehicles",
    icon: "🚗",
    templates: [
      {
        id: "vehicle-car",
        title: "Super Car",
        icon: "🚗",
        svgElements: [
          // Main Body (Broad Chassis)
          {
            type: "path",
            path: "M 80 470 L 140 310 Q 230 180, 400 180 L 520 180 Q 670 180, 730 310 L 780 470 L 780 580 L 80 580 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Front Window
          {
            type: "path",
            path: "M 190 320 L 370 320 L 370 220 L 250 220 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
          // Rear Window
          {
            type: "path",
            path: "M 420 320 L 670 320 L 600 220 L 420 220 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
          // Left Wheel
          {
            type: "circle",
            left: 220,
            top: 580,
            radius: 72,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
            originX: "center",
            originY: "center",
          },
          // Right Wheel
          {
            type: "circle",
            left: 640,
            top: 580,
            radius: 72,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
            originX: "center",
            originY: "center",
          },
        ],
      },
      {
        id: "vehicle-rocket",
        title: "Cosmic Rocket",
        icon: "🚀",
        svgElements: [
          // Rocket Body
          {
            type: "path",
            path: "M 400 60 C 280 200, 240 540, 240 680 L 560 680 C 560 540, 520 200, 400 60 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Nose Tip
          {
            type: "path",
            path: "M 400 60 C 350 140, 300 240, 290 290 L 510 290 C 500 240, 450 140, 400 60 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
          // Cabin Glass Porthole
          {
            type: "circle",
            left: 400,
            top: 420,
            radius: 65,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
            originX: "center",
            originY: "center",
          },
          // Left Wing
          {
            type: "path",
            path: "M 240 560 L 110 720 L 240 680 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
          // Right Wing
          {
            type: "path",
            path: "M 560 560 L 690 720 L 560 680 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
      {
        id: "vehicle-airplane",
        title: "Jumbo Jet",
        icon: "✈️",
        svgElements: [
          // Plane Fuselage
          {
            type: "path",
            path: "M 80 400 C 180 320, 640 320, 740 400 C 640 480, 180 480, 80 400 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Top Main Wing
          {
            type: "path",
            path: "M 340 330 L 460 100 L 560 330 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
          // Bottom Main Wing
          {
            type: "path",
            path: "M 340 470 L 460 700 L 560 470 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
          // Tail Fin
          {
            type: "path",
            path: "M 670 350 L 760 200 L 780 370 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
      {
        id: "vehicle-boat",
        title: "Sail Boat",
        icon: "⛵",
        svgElements: [
          // Hull
          {
            type: "path",
            path: "M 120 540 L 220 700 L 640 700 L 740 540 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Main Big Sail
          {
            type: "path",
            path: "M 380 100 L 380 500 L 680 500 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
          // Front Small Sail
          {
            type: "path",
            path: "M 340 180 L 340 500 L 160 500 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
          },
        ],
      },
    ],
  },
  {
    id: "cat-animals",
    name: "Animals",
    icon: "🐾",
    templates: [
      {
        id: "animal-butterfly",
        title: "Butterfly",
        icon: "🦋",
        svgElements: [
          // Left Top Wing
          {
            type: "path",
            path: "M 360 340 C 200 130, 40 130, 40 300 C 40 450, 190 490, 360 410 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Left Bottom Wing
          {
            type: "path",
            path: "M 360 420 C 180 490, 100 640, 200 740 C 310 800, 360 610, 375 480 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Right Top Wing
          {
            type: "path",
            path: "M 440 340 C 600 130, 760 130, 760 300 C 760 450, 610 490, 440 410 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Right Bottom Wing
          {
            type: "path",
            path: "M 440 420 C 620 490, 700 640, 600 740 C 490 800, 440 610, 425 480 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Central Body
          {
            type: "path",
            path: "M 380 260 C 380 220, 420 220, 420 260 L 420 620 C 420 660, 380 660, 380 620 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
        ],
      },
      {
        id: "animal-teddy",
        title: "Teddy Bear",
        icon: "🧸",
        svgElements: [
          // Left Ear
          {
            type: "circle",
            left: 260,
            top: 200,
            radius: 65,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
            originX: "center",
            originY: "center",
          },
          // Right Ear
          {
            type: "circle",
            left: 540,
            top: 200,
            radius: 65,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
            originX: "center",
            originY: "center",
          },
          // Big Head
          {
            type: "circle",
            left: 400,
            top: 320,
            radius: 155,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
            originX: "center",
            originY: "center",
          },
          // Snout
          {
            type: "circle",
            left: 400,
            top: 375,
            radius: 58,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
            originX: "center",
            originY: "center",
          },
          // Body
          {
            type: "path",
            path: "M 250 450 C 140 580, 140 760, 400 760 C 660 760, 660 580, 550 450 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
        ],
      },
      {
        id: "animal-fish",
        title: "Goldfish",
        icon: "🐠",
        svgElements: [
          // Giant Fish Body
          {
            type: "path",
            path: "M 120 400 C 240 180, 560 180, 680 400 C 560 620, 240 620, 120 400 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Tail Fin
          {
            type: "path",
            path: "M 680 400 L 800 240 L 750 400 L 800 560 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Eye
          {
            type: "circle",
            left: 240,
            top: 360,
            radius: 22,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
          // Side Fin
          {
            type: "path",
            path: "M 380 420 C 440 450, 460 550, 390 550 C 350 510, 350 450, 380 420 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
        ],
      },
      {
        id: "animal-cat",
        title: "Kitty Cat",
        icon: "🐱",
        svgElements: [
          // Left Ear
          {
            type: "path",
            path: "M 200 320 L 160 140 L 320 230 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Right Ear
          {
            type: "path",
            path: "M 600 320 L 640 140 L 480 230 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 11,
          },
          // Cat Face
          {
            type: "circle",
            left: 400,
            top: 380,
            radius: 170,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
            originX: "center",
            originY: "center",
          },
          // Left Eye
          {
            type: "circle",
            left: 310,
            top: 360,
            radius: 20,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
          // Right Eye
          {
            type: "circle",
            left: 490,
            top: 360,
            radius: 20,
            fill: "#0f172a",
            stroke: "#0f172a",
            strokeWidth: 2,
            originX: "center",
            originY: "center",
          },
          // Nose
          {
            type: "path",
            path: "M 370 430 L 430 430 L 400 470 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 8,
          },
        ],
      },
    ],
  },
  {
    id: "cat-nature",
    name: "Nature & Fun",
    icon: "🌻",
    templates: [
      {
        id: "nature-sunflower",
        title: "Sunflower",
        icon: "🌻",
        svgElements: [
          // Stem
          {
            type: "path",
            path: "M 385 450 Q 370 640, 385 760 L 415 760 Q 405 640, 415 450 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
          },
          // Big Leaf
          {
            type: "path",
            path: "M 385 580 C 260 570, 220 650, 280 690 C 360 660, 385 610, 385 580 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 8,
          },
          // Petals Outer Ring
          {
            type: "circle",
            left: 400,
            top: 290,
            radius: 175,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
            strokeDashArray: [28, 20],
            originX: "center",
            originY: "center",
          },
          // Big Seed Center
          {
            type: "circle",
            left: 400,
            top: 290,
            radius: 95,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 10,
            originX: "center",
            originY: "center",
          },
        ],
      },
      {
        id: "nature-mushroom",
        title: "Mushroom",
        icon: "🍄",
        svgElements: [
          // Mushroom Cap (Wide Umbrella Shape)
          {
            type: "path",
            path: "M 100 420 C 100 120, 700 120, 700 420 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Stem Trunk
          {
            type: "path",
            path: "M 270 420 C 270 720, 530 720, 530 420 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Big Spot 1
          {
            type: "circle",
            left: 270,
            top: 300,
            radius: 46,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 8,
            originX: "center",
            originY: "center",
          },
          // Big Spot 2
          {
            type: "circle",
            left: 520,
            top: 270,
            radius: 54,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 8,
            originX: "center",
            originY: "center",
          },
        ],
      },
      {
        id: "nature-cupcake",
        title: "Sweet Cupcake",
        icon: "🧁",
        svgElements: [
          // Cream Swirl Top
          {
            type: "path",
            path: "M 160 410 C 120 280, 290 160, 400 90 C 510 160, 680 280, 640 410 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
          // Cherry on Top
          {
            type: "circle",
            left: 400,
            top: 85,
            radius: 42,
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 9,
            originX: "center",
            originY: "center",
          },
          // Base Cup
          {
            type: "path",
            path: "M 200 410 L 270 720 L 530 720 L 600 410 Z",
            fill: "#ffffff",
            stroke: "#0f172a",
            strokeWidth: 12,
          },
        ],
      },
      {
        id: "nature-rainbow",
        title: "Rainbow",
        icon: "🌈",
        svgElements: [
          // Outer Arch
          {
            type: "path",
            path: "M 100 620 C 100 240, 700 240, 700 620",
            fill: "transparent",
            stroke: "#0f172a",
            strokeWidth: 32,
          },
          // Middle Arch
          {
            type: "path",
            path: "M 150 620 C 150 310, 650 310, 650 620",
            fill: "transparent",
            stroke: "#0f172a",
            strokeWidth: 32,
          },
          // Inner Arch
          {
            type: "path",
            path: "M 200 620 C 200 380, 600 380, 600 620",
            fill: "transparent",
            stroke: "#0f172a",
            strokeWidth: 32,
          },
        ],
      },
    ],
  },
];
