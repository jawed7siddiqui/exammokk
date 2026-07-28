import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";
import { createCanvas, loadImage } from "canvas";
import fabricPkg from "fabric";
const { fabric } = fabricPkg;
import { TEMPLATE_LIBRARY } from "./templateModule.js";

// Fabric binding
fabric.nodeCanvas = createCanvas;
fabric.loadImage = loadImage;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OUTPUT_DIR = path.resolve(
  __dirname,
  "../assets/admin/templates/thumbnails",
);
await fs.ensureDir(OUTPUT_DIR);

const loadFabricImage = (src) => {
  return new Promise((resolve, reject) => {
    fabric.Image.fromURL(
      src,
      (img) => {
        if (!img) return reject(new Error(`Failed to load: ${src}`));
        resolve(img);
      },
      { crossOrigin: "anonymous" },
    );
  });
};

async function generateThumbnail(template) {
  try {
    const { key, layoutW, layoutH } = template.meta;
    const page = template.pages?.[0];

    if (!page) return;

    const canvas = new fabric.StaticCanvas(null, {
      width: layoutW || 1080,
      height: layoutH || 1920,
      backgroundColor: page.background || "#ffffff",
    });

    for (const obj of page.objects || []) {
      if (obj.type === "image" && obj.src) {
        try {
          const img = await loadFabricImage(obj.src);
          img.set({
            ...obj,
            scaleX: obj.width ? obj.width / img.width : 1,
            scaleY: obj.height ? obj.height / img.height : 1,
          });
          canvas.add(img);
        } catch (err) {
          console.error(`❌ Image failed: ${obj.src}`);
        }
      } else if (obj.type === "i-text" || obj.type === "textbox") {
        canvas.add(new fabric.Textbox(obj.text || "", { ...obj }));
      } else if (obj.type === "rect") {
        canvas.add(new fabric.Rect(obj));
      } else if (obj.type === "circle") {
        canvas.add(new fabric.Circle(obj));
      }
    }

    canvas.renderAll();

    // ✅ FIXED EXPORT LOGIC FOR FABRIC 5.3
    const filePath = path.join(OUTPUT_DIR, `${key}.png`);

    // Fabric 5.3 mein lowerCanvasEl hi actual node-canvas element hota hai
    const nodeCanvasElement = canvas.lowerCanvasEl;

    if (nodeCanvasElement && nodeCanvasElement.toBuffer) {
      const buffer = nodeCanvasElement.toBuffer("image/png");
      await fs.writeFile(filePath, buffer);
      console.log(`✅ Generated: ${key}.png`);
    } else {
      // Fallback: Agar lowerCanvasEl kaam na kare
      const dataUrl = canvas.toDataURL({ format: "png" });
      const buffer = Buffer.from(
        dataUrl.replace(/^data:image\/png;base64,/, ""),
        "base64",
      );
      await fs.writeFile(filePath, buffer);
      console.log(`✅ Generated (via DataURL): ${key}.png`);
    }

    canvas.dispose();
  } catch (err) {
    console.error(`❌ Error in ${template?.meta?.key}:`, err.message);
  }
}

async function run() {
  console.log("🚀 Generating thumbnails...");
  for (const template of TEMPLATE_LIBRARY) {
    await generateThumbnail(template);
  }
  console.log("🎉 Done!");
}

run();
