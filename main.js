import { removeBackground } from "@imgly/background-removal";

/**
 * 1. UI RENDERER (Tailwind CSS Version)
 */
const injectBGRemoverUI = () => {
  if (document.getElementById("bgRemoveModal")) return;

  const uiHTML = `
    <input type="file" id="bg-upload-input" hidden accept="image/*">

    <div id="bgRemoveModal" class="fixed inset-0 z-[9999] hidden flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4">
      <div class="bg-white rounded-xl shadow-2xl w-full max-w-2xl overflow-hidden transform transition-all">
        
        <div class="px-6 py-4 border-b flex justify-between items-center bg-gray-50">
          <h3 class="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span>✨</span> AI Background Remover
          </h3>
          <button id="close-modal-btn" class="text-gray-500 hover:text-red-500 text-2xl">&times;</button>
        </div>

        <div class="p-6 text-center">
          <div id="process-loader" class="hidden my-12">
            <div class="inline-block w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
            <h6 class="mt-4 font-semibold text-gray-700 text-lg">AI is removing background...</h6>
            <p class="text-gray-500 text-sm">Processing locally in your browser.</p>
          </div>

          <div id="preview-container" class="relative rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 flex items-center justify-center overflow-hidden" 
               style="min-height: 350px; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 20px 20px;">
            <img id="bg-preview-img" src="" class="hidden max-h-[450px] object-contain drop-shadow-xl">
          </div>
        </div>

        <div class="px-6 py-4 border-t bg-gray-50 flex justify-end gap-3">
          <button id="cancel-modal-btn" class="px-4 py-2 border rounded-lg text-gray-600 hover:bg-gray-100 transition">Cancel</button>
          <button id="add-to-editor-btn" class="hidden px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition shadow-lg">
            ✨ Add to Editor
          </button>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", uiHTML);
};

injectBGRemoverUI();

/**
 * 2. SELECTIONS
 */
const navBtn = document.getElementById("bg-remove-nav-btn");
const bgUploadInput = document.getElementById("bg-upload-input");
const bgPreviewImg = document.getElementById("bg-preview-img");
const addToEditorBtn = document.getElementById("add-to-editor-btn");
const loader = document.getElementById("process-loader");
const modal = document.getElementById("bgRemoveModal");
const closeModalBtn = document.getElementById("close-modal-btn");
const cancelModalBtn = document.getElementById("cancel-modal-btn");

let processedBlobUrl = null;

/**
 * 3. MODAL FUNCTIONS (Vanilla JS)
 */
const showModal = () => modal.classList.remove("hidden");
const hideModal = () => {
  modal.classList.add("hidden");
  bgPreviewImg.src = "";
  bgUploadInput.value = "";
};

// Close handlers
[closeModalBtn, cancelModalBtn].forEach((btn) =>
  btn.addEventListener("click", hideModal),
);

/**
 * 4. LOGIC
 */

// Step A: Trigger File Input
if (navBtn) {
  navBtn.addEventListener("click", () => bgUploadInput.click());
}

// Step B: AI Processing
bgUploadInput.addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  showModal();
  loader.classList.remove("hidden");
  bgPreviewImg.classList.add("hidden");
  addToEditorBtn.classList.add("hidden");

  try {
    const imageSource = URL.createObjectURL(file);

    // AI Processing
    const blob = await removeBackground(imageSource, {
      model: "medium",
      progress: (step, progress) => {
        console.log(`AI Status: ${step} (${Math.round(progress * 100)}%)`);
      },
    });

    if (processedBlobUrl) URL.revokeObjectURL(processedBlobUrl);
    processedBlobUrl = URL.createObjectURL(blob);

    // Update UI
    bgPreviewImg.src = processedBlobUrl;
    bgPreviewImg.classList.remove("hidden");
    loader.classList.add("hidden");
    addToEditorBtn.classList.remove("hidden");
  } catch (error) {
    console.error("BG Remove Error:", error);
    alert("AI Processing failed. Make sure you are using Localhost/HTTPS.");
    hideModal();
  }
});

// Step C: Add to Fabric Canvas
addToEditorBtn.addEventListener("click", () => {
  if (!processedBlobUrl) return;

  fabric.Image.fromURL(processedBlobUrl, (img) => {
    img.scaleToWidth(400);

    const canvas = window.activeCanvas || window.canvas;

    if (canvas) {
      canvas.add(img);
      canvas.centerObject(img);
      canvas.setActiveObject(img);
      canvas.renderAll();
      if (typeof window.saveHistory === "function") window.saveHistory();
    }

    hideModal();
  });
});
