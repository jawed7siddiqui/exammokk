export const TEMPLATE_LIBRARY = [
  {
    meta: {
      key: "pro-fitness-bold-007",
      title: "Impact Fitness Story",
      platform_type: "instagram_story",
      layoutW: 1080,
      layoutH: 1920,
      thumbnail:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=80",
    },
    pages: [
      {
        id: "fit_p1",
        background: "#000000",
        objects: [
          // Header Text (Top Gap: 200px)
          {
            role: "textbox",
            type: "i-text",
            text: "PUSH YOUR LIMITS",
            left: 540,
            top: 200,
            fontSize: 85,
            fontFamily: "Anton",
            fill: "#FF4D00",
            textAlign: "center",
            originX: "center",
            charSpacing: 50,
          },
          // Main Image (Center Gap: 200px from Top Text)
          {
            role: "image",
            type: "image",
            src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=90",
            left: 540,
            top: 900,
            width: 900,
            height: 950,
            originX: "center",
            originY: "center",
            stroke: "#FF4D00",
            strokeWidth: 4,
          },
          // Footer Text (Bottom Gap: 250px from Image)
          {
            role: "textbox",
            type: "i-text",
            text: "JOIN THE ACADEMY TODAY",
            left: 540,
            top: 1650,
            fontSize: 40,
            fontFamily: "Bebas Neue",
            fill: "#FFFFFF",
            textAlign: "center",
            originX: "center",
            charSpacing: 200,
          },
        ],
      },
    ],
  },
  {
    meta: {
      key: "pro-editorial-vogue-008",
      title: "Vogue Editorial Pro",
      platform_type: "instagram_story",
      layoutW: 1080,
      layoutH: 1920,
      thumbnail:
        "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=500&q=80",
    },
    pages: [
      {
        id: "vogue_p1",
        background: "#FFFFFF",
        objects: [
          // Subtle Background Shape
          {
            role: "shape",
            type: "rect",
            left: 50,
            top: 50,
            width: 980,
            height: 1820,
            fill: "transparent",
            stroke: "#EEEEEE",
            strokeWidth: 2,
            selectable: false,
          },
          // Image (Properly Center-Aligned)
          {
            role: "image",
            type: "image",
            src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=90",
            left: 540,
            top: 800,
            width: 800,
            height: 1000,
            originX: "center",
            originY: "center",
          },
          // Large Heading (Positioned 250px below Image center)
          {
            role: "textbox",
            type: "i-text",
            text: "AUTUMN\nVIBES",
            left: 540,
            top: 1500,
            fontSize: 130,
            fontFamily: "Playfair Display",
            fontWeight: "900",
            fill: "#1A1A1A",
            textAlign: "center",
            originX: "center",
            lineHeight: 1.1,
          },
          // Date (Bottom Safe Zone)
          {
            role: "textbox",
            type: "i-text",
            text: "EST. 2026",
            left: 540,
            top: 1780,
            fontSize: 24,
            fontFamily: "Montserrat",
            fill: "#BCBCBC",
            originX: "center",
            charSpacing: 600,
          },
        ],
      },
    ],
  },
  {
    meta: {
      key: "pro-creative- Lobster-009",
      title: "Sweet Morning Story",
      platform_type: "instagram_story",
      layoutW: 1080,
      layoutH: 1920,
      thumbnail:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80",
    },
    pages: [
      {
        id: "sweet_p1",
        background: "#FFFBF2",
        objects: [
          // Heading (Large Top Margin)
          {
            role: "textbox",
            type: "i-text",
            text: "Fresh Coffee",
            left: 540,
            top: 250,
            fontSize: 100,
            fontFamily: "Lobster",
            fill: "#4E342E",
            originX: "center",
            textAlign: "center",
          },
          // Image (150px gap from Heading)
          {
            role: "image",
            type: "image",
            src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=90",
            left: 540,
            top: 950,
            width: 850,
            height: 950,
            originX: "center",
            originY: "center",
            shadow: {
              color: "rgba(78,52,46,0.1)",
              blur: 40,
              offsetX: 0,
              offsetY: 20,
            },
          },
          // Description (Center Bottom)
          {
            role: "textbox",
            type: "i-text",
            text: "The perfect start to your daily routine.\nDiscover our new blends.",
            left: 540,
            top: 1620,
            width: 800,
            fontSize: 40,
            fontFamily: "Quicksand",
            fill: "#795548",
            textAlign: "center",
            originX: "center",
            lineHeight: 1.5,
          },
        ],
      },
    ],
  },

  {
    meta: {
      key: "pro-street-wear-011",
      title: "Cyber Street Drop",
      platform_type: "instagram_story",
      layoutW: 1080,
      layoutH: 1920,
      thumbnail:
        "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=500&q=80",
      tags: ["urban", "neon", "orbitron"],
    },
    pages: [
      {
        id: "cyber_p1",
        background: "#000000",
        objects: [
          // TOP BRAND NAME
          {
            role: "textbox",
            type: "i-text",
            text: "X-ORBIT DROP",
            left: 100,
            top: 180,
            fontSize: 45,
            fontFamily: "Orbitron",
            fill: "#FF0055",
            charSpacing: 300,
          },
          // MAIN IMAGE (With Neon Glow Effect)
          {
            role: "image",
            type: "image",
            src: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&w=1080&q=90",
            left: 540,
            top: 900,
            width: 1080,
            height: 1000,
            originX: "center",
            originY: "center",
            opacity: 0.9,
          },
          // LARGE HEADING (Overlap-safe bottom positioning)
          {
            role: "textbox",
            type: "i-text",
            text: "LIMITLESS\nFUTURE",
            left: 100,
            top: 1500,
            fontSize: 130,
            fontFamily: "Anton",
            fill: "#FFFFFF",
            textAlign: "left",
            lineHeight: 1.1,
            shadow: { color: "#FF0055", blur: 20, offsetX: 0, offsetY: 0 },
          },
        ],
      },
    ],
  },
  {
    meta: {
      key: "pro-lifestyle-cafe-012",
      title: "Cozy Brew Story",
      platform_type: "instagram_story",
      layoutW: 1080,
      layoutH: 1920,
      thumbnail:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=80",
      tags: ["cafe", "cozy", "dancing-script"],
    },
    pages: [
      {
        id: "cafe_p1",
        background: "#FDFCF0",
        objects: [
          // TEXT AT TOP
          {
            role: "textbox",
            type: "i-text",
            text: "Freshly Brewed",
            left: 540,
            top: 300,
            fontSize: 110,
            fontFamily: "Dancing Script",
            fill: "#4B3832",
            originX: "center",
          },
          // CENTERED IMAGE (Safe gap from top text)
          {
            role: "image",
            type: "image",
            src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1000&q=90",
            left: 540,
            top: 980,
            width: 850,
            height: 900,
            originX: "center",
            originY: "center",
            rx: 40, // Rounded Corners
            ry: 40,
          },
          // BOTTOM TEXT (Safe gap from image)
          {
            role: "textbox",
            type: "i-text",
            text: "VISIT OUR NEW OUTLET",
            left: 540,
            top: 1650,
            fontSize: 32,
            fontFamily: "Montserrat",
            fill: "#4B3832",
            originX: "center",
            charSpacing: 400,
            fontWeight: "bold",
          },
        ],
      },
    ],
  },
];
