/**
 * KidsPaint & Test Portal - Reusable Bottom Navigation
 * File: js/nav.js
 */

function renderBottomNav(activeTabName = null) {
  // Current File Name Detect Karein
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // Tab Definitions
  const navItems = [
    {
      id: "home",
      name: "Home",
      icon: "home",
      url: "dashboard.html",
      activeMatch: ["index.html", "", "dashboard.html"],
    },
    {
      id: "tests",
      name: "Tests",
      icon: "file-check-2",
      url: "testpaper.html",
      activeMatch: ["testpaper.html", "testpaper.html", "tests.html"],
    },
    {
      id: "scorecard",
      name: "Scorecard",
      icon: "bar-chart-3",
      url: "scoreboard.html",
      activeMatch: ["scoreboard.html", "scorecard.html"],
    },
    {
      id: "profile",
      name: "Profile",
      icon: "user",
      url: "profile.html",
      activeMatch: ["profile.html"],
    },
  ];

  const navHtml = `
    <nav class="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-slate-200 px-6 py-2.5 flex justify-between items-center z-50 shadow-lg">
      ${navItems
        .map((item) => {
          // Check if active by explicit param or current URL
          const isActive = activeTabName
            ? activeTabName.toLowerCase() === item.id
            : item.activeMatch.some(
                (m) => page.toLowerCase() === m.toLowerCase(),
              );

          return `
            <button
              onclick="window.location.href='${item.url}'"
              class="flex flex-col items-center gap-0.5 cursor-pointer transition-all active:scale-95 ${
                isActive
                  ? "text-indigo-600 font-extrabold"
                  : "text-slate-400 hover:text-indigo-600 font-bold"
              }"
            >
              <i data-lucide="${item.icon}" class="w-5 h-5"></i>
              <span class="text-[10px]">${item.name}</span>
            </button>
          `;
        })
        .join("")}
    </nav>
  `;

  // Insert into document
  const placeholder = document.getElementById("bottom-nav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", navHtml);
  }

  // Refresh Lucide Icons
  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Auto Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  renderBottomNav();
});
