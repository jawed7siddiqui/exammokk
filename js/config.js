// At the very top of your JS
window.db = null;

window.dbPromise = new Promise((resolve, reject) => {
  const dbName = "ProjectMediaDB";
  const dbVersion = 3;
  const request = indexedDB.open(dbName, dbVersion);

  request.onupgradeneeded = (e) => {
    db = e.target.result;
    if (!db.objectStoreNames.contains("recordings")) {
      db.createObjectStore("recordings", {
        keyPath: "id",
        autoIncrement: true,
      });
    }
    if (!db.objectStoreNames.contains("canvasData")) {
      db.createObjectStore("canvasData", { keyPath: "key" });
    }
  };

  request.onsuccess = (e) => {
    db = e.target.result;
    console.log("IndexedDB Ready ✅");
    resolve(db); // Signal that DB is ready
  };

  request.onerror = (e) => reject(e);
});

window.loadDataFromindexDB = function () {
  return new Promise((resolve, reject) => {
    if (!db) return reject("DB not initialized");

    const transaction = db.transaction(["recordings"], "readonly");
    const store = transaction.objectStore("recordings");
    const getAllRequest = store.getAll();

    getAllRequest.onsuccess = () => {
      window.recordedVoices = getAllRequest.result.map((item) => ({
        id: item.id,
        title: item.title,
        url: URL.createObjectURL(item.audio),
        time: item.timestamp,
        type: item.type || "voice",
        pageId: item.pageId || "default",
      }));
      if (window.refreshVoiceList) window.refreshVoiceList();
      resolve(window.recordedVoices);
    };

    getAllRequest.onerror = (err) => reject(err);
  });
};

window.cleanupOldProjects = async function (limit = 5) {
  return new Promise((resolve) => {
    const transaction = db.transaction(["canvasData"], "readwrite");
    const store = transaction.objectStore("canvasData");
    const request = store.getAll();

    request.onsuccess = () => {
      const allProjects = request.result || [];

      // Latest first
      allProjects.sort((a, b) => b.lastModified - a.lastModified);

      // Keep latest N only
      const oldProjects = allProjects.slice(limit);

      oldProjects.forEach((project) => {
        if (project?.key) {
          store.delete(project.key);
          console.log("🗑 Deleted old project:", project.key);
        }
      });

      resolve();
    };

    request.onerror = () => {
      console.warn("Cleanup failed.");
      resolve(); // don't block flow
    };
  });
};
