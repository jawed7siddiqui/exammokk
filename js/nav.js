/**
 * KidsPaint & Test Portal - Reusable Navigation (Header & Bottom Nav)
 * File: js/nav.js
 */

// ==========================================
// 1. REUSABLE TOP HEADER COMPONENT
// ==========================================
function renderTopHeader(options = {}) {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // Page detection for default Back button behavior
  const isHomePage = ["index.html", "", "dashboard.html", "home.html"].some(
    (m) => page.toLowerCase() === m.toLowerCase(),
  );

  const showBack =
    options.showBack !== undefined ? options.showBack : !isHomePage;
  const showLogout =
    options.showLogout !== undefined ? options.showLogout : isHomePage;
  const customTitle = options.title || null;

  const headerHtml = `
    <header class="bg-white px-4 py-3 border-b border-slate-200/80 shrink-0 shadow-2xs z-10 flex items-center justify-between sticky top-0 w-full">
      <!-- LEFT: BACK BTN / LOGO & APP TITLE -->
      <div class="flex items-center gap-2.5">
        ${
          showBack
            ? `<button
                onclick="${options.onBack ? options.onBack : "history.back()"}"
                class="p-1.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-700 active:scale-95 transition-all cursor-pointer shrink-0"
              >
                <i data-lucide="arrow-left" class="w-4 h-4"></i>
              </button>`
            : ""
        }

        ${
          customTitle
            ? `<h1 class="text-sm font-black text-slate-800 tracking-tight leading-tight font-kids truncate">${customTitle}</h1>`
            : `<div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 text-white font-extrabold text-lg flex items-center justify-center shadow-xs shrink-0 font-kids">
                  🎨
                </div>
                <div>
                  <h1 class="text-sm font-black text-slate-800 tracking-tight leading-tight font-kids">
                    KidsPaint
                  </h1>
                  <p class="text-[10px] font-bold text-indigo-600 leading-none">
                    Play &amp; Learn
                  </p>
                </div>
              </div>`
        }
      </div>

      <!-- RIGHT: FULL LOGOUT BUTTON -->
      <div class="flex items-center gap-1.5 shrink-0">
        ${
          showLogout
            ? `<button
                onclick="handleUserLogout()"
                class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 active:bg-rose-500 active:text-white text-rose-600 border border-rose-200/80 rounded-xl text-xs font-black transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95 font-kids"
              >
                <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
                <span>Logout</span>
              </button>`
            : ""
        }
      </div>
    </header>
  `;

  const placeholder = document.getElementById("top-header-placeholder");
  if (placeholder) {
    placeholder.outerHTML = headerHtml;
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// Global Logout Utility
function handleUserLogout() {
  if (confirm("Kya aap logout karna chahte hain?")) {
    localStorage.removeItem("kidsPaintUser");
    sessionStorage.clear();
    window.location.href = "auth.html";
  }
}

// ==========================================
// 2. REUSABLE BOTTOM NAVIGATION COMPONENT
// ==========================================
function renderBottomNav(activeTabName = null) {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  const navItems = [
    {
      id: "home",
      name: "Home",
      icon: "home",
      url: "dashboard.html",
      activeMatch: ["index.html", "", "dashboard.html", "home.html"],
    },
    {
      id: "tests",
      name: "Tests",
      icon: "file-check-2",
      url: "testpaper.html",
      activeMatch: ["testpaper.html", "tests.html"],
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

  const placeholder = document.getElementById("bottom-nav-placeholder");
  if (placeholder) {
    placeholder.outerHTML = navHtml;
  } else {
    document.body.insertAdjacentHTML("beforeend", navHtml);
  }

  if (typeof lucide !== "undefined") {
    lucide.createIcons();
  }
}

// ==========================================
// 3. AUTO-INITIALIZE ON LOAD
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderTopHeader();
  renderBottomNav();
});
