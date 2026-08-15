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
    <header class="bg-white border-b border-slate-200 shadow-2xs px-4 py-2.5 sticky top-0 z-30 shrink-0 flex items-center justify-between w-full">
      <!-- Left: Logo / Back Button + Title -->
      <div class="flex items-center gap-2 min-w-0">
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
            ? `<h1 class="text-sm font-black text-slate-800 tracking-wide uppercase truncate font-kids">${customTitle}</h1>`
            : `<a href="index.html" class="flex items-center gap-1.5 no-underline shrink-0">
                <i data-lucide="sparkles" class="w-4 h-4 fill-current text-amber-400"></i>
                <span class="text-lg font-black tracking-wide text-indigo-600 uppercase flex items-center font-kids">
                  Kids&nbsp;<span class="text-pink-500 animate-pulse">P</span><span class="text-amber-500">a</span><span class="text-emerald-500">i</span><span class="text-cyan-500">n</span><span class="text-violet-500">t</span>
                </span>
              </a>`
        }
      </div>

      <!-- Right: Action Buttons (Logout or Custom Action) -->
      <div class="flex items-center gap-1.5 shrink-0">
        ${
          showLogout
            ? `<button
                onclick="handleGlobalLogout()"
                class="flex items-center gap-1 bg-red-50 hover:bg-red-100 text-red-600 px-2.5 py-1 rounded-xl border border-red-100 text-[11px] font-extrabold transition-all active:scale-95 cursor-pointer shadow-2xs"
              >
                <i data-lucide="log-out" class="w-3.5 h-3.5 text-red-500"></i>
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
function handleGlobalLogout() {
  if (confirm("Kya aap logout karna chahte hain?")) {
    localStorage.removeItem("kidsPaintUser");
    sessionStorage.clear();
    window.location.href = "login.html";
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
