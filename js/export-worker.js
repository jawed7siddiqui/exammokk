let timeline = [];
let currentTime = 0;

self.onmessage = function (e) {
  if (e.data.type === "START_EXPORT") {
    timeline = e.data.timeline || [];

    const FPS = 30;
    const frameTime = 1000 / FPS;

    const totalDuration =
      Math.max(...timeline.map((t) => t.delay + t.duration)) || 5000;

    console.log("🧠 Worker Started");

    function tick() {
      currentTime += frameTime;

      self.postMessage({
        type: "FRAME",
        time: currentTime,
        timeline,
      });

      if (currentTime < totalDuration) {
        setTimeout(tick, frameTime);
      } else {
        self.postMessage({ type: "STOP" });
      }
    }

    tick();
  }
};
