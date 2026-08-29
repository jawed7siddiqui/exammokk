/**
 * ExamIndia - Govt Exam Navigation (Header, Bottom Nav & Realtime Status Guard)
 * File: js/nav_gov.js
 * Version: 2.3.0
 */

const CHECK_STATUS_API =
  "https://exam-api.jawedsiddiqui.cloud/api/kidspaint/check-user-status";

// ==========================================
// 1. MOBILE NATIVE POP-UP MODAL (ENGLISH)
// ==========================================
function injectNativeStatusModal() {
  if (document.getElementById("native-status-modal")) return;

  const modalHtml = `
    <div id="native-status-modal" class="fixed inset-0 z-[99999] bg-slate-900/70 backdrop-blur-xs flex items-end sm:items-center justify-center p-0 sm:p-4 opacity-0 pointer-events-none transition-opacity duration-300">
      <div id="native-status-sheet" class="w-full max-w-[390px] bg-white rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-slate-100 transform translate-y-full sm:translate-y-4 transition-transform duration-300 text-center space-y-4">
        
        <!-- Header Sheet Indicator -->
        <div class="w-10 h-1.5 bg-slate-200 rounded-full mx-auto sm:hidden -mt-2 mb-2"></div>
        
        <!-- Animated Icon Container -->
        <div id="status-modal-icon-bg" class="w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl mx-auto flex items-center justify-center shadow-xs border border-rose-100">
          <i id="status-modal-icon" data-lucide="shield-alert" class="w-7 h-7"></i>
        </div>

        <div>
          <h3 id="status-modal-title" class="text-base font-extrabold text-slate-900 tracking-tight">
            Account Restricted
          </h3>
          <p id="status-modal-message" class="text-xs text-slate-500 mt-1.5 leading-relaxed font-semibold">
            Your candidate account has been temporarily disabled.
          </p>
        </div>

        <button
          id="btn-status-modal-action"
          onclick="performForcedRedirect()"
          class="w-full py-3.5 bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white font-bold rounded-2xl text-xs tracking-wider transition-all cursor-pointer shadow-md"
        >
          Return to Sign In
        </button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
  if (typeof lucide !== "undefined") lucide.createIcons();
}

function showNativeStatusModal(title, message, isBlocked = true) {
  injectNativeStatusModal();

  const modal = document.getElementById("native-status-modal");
  const sheet = document.getElementById("native-status-sheet");
  const titleEl = document.getElementById("status-modal-title");
  const msgEl = document.getElementById("status-modal-message");
  const iconBg = document.getElementById("status-modal-icon-bg");
  const icon = document.getElementById("status-modal-icon");

  titleEl.innerText = title;
  msgEl.innerText = message;

  if (isBlocked) {
    iconBg.className =
      "w-14 h-14 bg-rose-50 text-rose-600 rounded-2xl mx-auto flex items-center justify-center shadow-xs border border-rose-100";
    icon.setAttribute("data-lucide", "shield-alert");
  } else {
    iconBg.className =
      "w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl mx-auto flex items-center justify-center shadow-xs border border-amber-100";
    icon.setAttribute("data-lucide", "user-x");
  }

  if (typeof lucide !== "undefined") lucide.createIcons();

  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100", "pointer-events-auto");
  sheet.classList.remove("translate-y-full", "sm:translate-y-4");
  sheet.classList.add("translate-y-0");

  document.body.style.overflow = "hidden";
}

function performForcedRedirect() {
  localStorage.removeItem("token");
  localStorage.removeItem("examIndiaToken");
  localStorage.removeItem("examIndiaUser");
  localStorage.removeItem("user_session");
  localStorage.removeItem("examIndiaSession");
  sessionStorage.clear();
  window.location.replace("auth.html");
}

// ==========================================
// 2. REAL-TIME USER STATUS GUARD
// ==========================================
async function verifyUserStatus() {
  const path = window.location.pathname;
  const page = path.split("/").pop() || "home.html";

  // Skip guard on authentication pages
  const isAuthPage = [
    "auth.html",
    "login.html",
    "register.html",
    "index.html",
  ].some((m) => page.toLowerCase() === m.toLowerCase());
  if (isAuthPage) return;

  const storedUserRaw =
    localStorage.getItem("examIndiaUser") ||
    localStorage.getItem("user_session");
  if (!storedUserRaw) {
    performForcedRedirect();
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

  if (!userMobile) {
    performForcedRedirect();
    return;
  }

  try {
    const response = await fetch(`${CHECK_STATUS_API}?_nocache=${Date.now()}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      body: JSON.stringify({ mobileNumber: userMobile.trim() }),
    });

    const data = await response.json();

    if (data.success && data.data) {
      const status = (data.data.status || "active").toLowerCase().trim();

      if (status === "blocked") {
        showNativeStatusModal(
          "Account Blocked",
          "Your access has been suspended by the administrator. Please reach out to support for assistance.",
          true,
        );
      } else if (status === "inactive") {
        showNativeStatusModal(
          "Account Inactive",
          "Your candidate profile is currently inactive. Contact your portal admin to reactivate access.",
          false,
        );
      }
    } else if (response.status === 404) {
      showNativeStatusModal(
        "Account Not Found",
        "Your account record could not be found. Please sign in again.",
        true,
      );
    }
  } catch (error) {
    console.warn("Status check failed silently:", error.message);
  }
}

// Manual Logout Utility
function handleUserLogout() {
  showNativeStatusModal(
    "Sign Out",
    "Are you sure you want to sign out of your portal session?",
    false,
  );
  const actionBtn = document.getElementById("btn-status-modal-action");
  if (actionBtn) actionBtn.innerText = "Confirm Sign Out";
}

// ==========================================
// 3. REUSABLE TOP HEADER COMPONENT
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
  if (placeholder) placeholder.outerHTML = headerHtml;
  if (typeof lucide !== "undefined") lucide.createIcons();
}

// ==========================================
// 4. REUSABLE BOTTOM NAVIGATION COMPONENT
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
  if (placeholder) placeholder.outerHTML = navHtml;
  else document.body.insertAdjacentHTML("beforeend", navHtml);

  if (typeof lucide !== "undefined") lucide.createIcons();
}

// ==========================================
// 5. AUTO-INITIALIZE & 30-SECOND HEARTBEAT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  injectNativeStatusModal();
  renderTopHeader();
  renderBottomNav();

  // Instant check on open
  verifyUserStatus();

  // Background Heartbeat: Check every 30 seconds
  setInterval(() => {
    verifyUserStatus();
  }, 30000);
});

// App / Tab focus re-verify
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    verifyUserStatus();
  }
});
