/**
 * ExamIndia - Govt Exam Navigation (Header, Bottom Nav & Background Status Guard)
 * File: js/nav_gov.js
 */

const CHECK_STATUS_API =
  "https://exam-api.jawedsiddiqui.cloud/api/kidspaint/check-user-status";

// ==========================================
// 1. OPTIMIZED BACKGROUND STATUS VERIFICATION
// ==========================================
async function verifyUserStatus() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "home.html";

  // Login / Register / Auth pages par guard skip karein
  const isAuthPage = [
    "auth.html",
    "login.html",
    "register.html",
    "index.html",
  ].some((m) => page.toLowerCase() === m.toLowerCase());
  if (isAuthPage) return;

  // Stored user check
  const storedUserRaw =
    localStorage.getItem("examIndiaUser") ||
    localStorage.getItem("user_session");
  if (!storedUserRaw) {
    forceLogout("Session expired. Please log in again.");
    return;
  }

  let userMobile = null;
  try {
    const userObj = JSON.parse(storedUserRaw);
    userMobile =
      userObj.mobileNumber ||
      userObj.mobile ||
      (userObj.user && userObj.user.mobileNumber);
  } catch (e) {
    console.error("Session parse error:", e);
  }

  if (!userMobile) return;

  // ⚡ 1. 3-Minute Session Cache (Fast UI navigation & no server load)
  const lastChecked = sessionStorage.getItem("last_status_check");
  const now = Date.now();
  if (lastChecked && now - parseInt(lastChecked, 10) < 3 * 60 * 1000) {
    return; // 3 minute ke andar check already done
  }

  // ⚡ 2. Background API Call
  try {
    const response = await fetch(CHECK_STATUS_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobileNumber: userMobile.trim() }),
    });

    const data = await response.json();

    if (data.success && data.data) {
      sessionStorage.setItem("last_status_check", now.toString());
      const status = (data.data.status || "active").toLowerCase();

      if (status === "blocked") {
        forceLogout(
          "Aapka account admin dwara block kar diya gaya hai. Kripya support se contact karein.",
        );
      } else if (status === "inactive") {
        forceLogout(
          "Aapka account inactive hai. Kripya administrator se sampark karein.",
        );
      }
    } else if (response.status === 404) {
      forceLogout("User account not found. Please register or login again.");
    }
  } catch (error) {
    // Network fail hone par user ka active session break nahi hoga
    console.warn("Status check network glitch:", error.message);
  }
}

// Global Force-Logout Helper
function forceLogout(reasonMessage) {
  if (reasonMessage) {
    alert(reasonMessage);
  }
  localStorage.removeItem("examIndiaUser");
  localStorage.removeItem("token");
  localStorage.removeItem("user_session");
  sessionStorage.clear();
  window.location.href = "auth.html";
}

// Global Manual Logout Utility
function handleUserLogout() {
  if (confirm("Kya aap logout karna chahte hain?")) {
    forceLogout();
  }
}

// ==========================================
// 2. REUSABLE TOP HEADER COMPONENT
// ==========================================
function renderTopHeader(options = {}) {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "home.html";

  const isHomePage = ["", "home.html"].some(
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
      <div class="flex items-center gap-2.5 min-w-0">
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
            ? `<h1 class="text-sm font-black text-slate-900 tracking-tight leading-tight truncate">${customTitle}</h1>`
            : `<div class="flex items-center gap-2.5">
                <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-800 to-blue-900 text-white font-extrabold text-lg flex items-center justify-center shadow-xs shrink-0">
                  <i data-lucide="graduation-cap" class="w-5 h-5"></i>
                </div>
                <div>
                  <h1 class="text-sm font-black text-slate-900 tracking-tight leading-tight">
                    ExamMokk
                  </h1>
                  <p class="text-[10px] font-bold text-indigo-600 leading-none">
                    Govt &amp; PSC Test Prep
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
                class="px-3 py-1.5 bg-rose-50 hover:bg-rose-100 active:bg-rose-500 active:text-white text-rose-600 border border-rose-200/80 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-2xs active:scale-95"
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

// ==========================================
// 3. REUSABLE BOTTOM NAVIGATION COMPONENT
// ==========================================
function renderBottomNav(activeTabName = null) {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "home.html";

  const navItems = [
    {
      id: "home",
      name: "Home",
      icon: "home",
      url: "home.html",
      activeMatch: ["home.html"],
    },
    {
      id: "daily-gk",
      name: "Daily GK",
      icon: "globe",
      url: "mobile-daily-gk.html",
      activeMatch: ["mobile-daily-gk.html", "gk-quiz.html"],
    },
    {
      id: "scorecard",
      name: "Scorecard",
      icon: "bar-chart-3",
      url: "scoreboard.html",
      activeMatch: ["scoreboard.html"],
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
// 4. AUTO-INITIALIZE ON LOAD & FOCUS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Pehle visual UI fast load hogi
  renderTopHeader();
  renderBottomNav();

  // Background me status validation run hoga
  verifyUserStatus();
});

// App / Tab focus par automatically refresh
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    verifyUserStatus();
  }
});
