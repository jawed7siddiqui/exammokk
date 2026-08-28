/**
 * ExamMokk Common Web Navigation Engine
 * Handles shared Navbar, Active Route Detection, Search Modal, and Logout Modal
 */

const STORAGE_KEYS = {
  TOKEN: "exammokk_token",
  USER: "exammokk_user",
  SESSION: "exammokk_session",
};

const searchableExams = [
  { name: "PSC & UPSC Civil Services", type: "GOVT_PSC" },
  { name: "BPSC (Bihar Civil Services / Daroga)", type: "BPSC" },
  { name: "JPSC (Jharkhand Civil Services / JSSC)", type: "JPSC" },
  { name: "SSC CGL / CHSL / MTS / GD", type: "SSC" },
  { name: "Railway RRB NTPC & Group D", type: "RAILWAYS" },
  { name: "Banking (SBI / IBPS PO Clerk)", type: "BANKING" },
  { name: "Defence (NDA, CDS, Police SI)", type: "DEFENCE" },
  { name: "JEE Main & NEET Medical", type: "JEE_NEET" },
  { name: "Teaching (CTET, State TET)", type: "TEACHING" },
  { name: "CUET, Law & Management", type: "ENTRANCE" },
];

function initWebNav() {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  const userDataStr = localStorage.getItem(STORAGE_KEYS.USER);

  // Auth Guard
  if (!token && !userDataStr) {
    window.location.href = "login.html";
    return;
  }

  let candidateName = "Candidate";
  try {
    const user = JSON.parse(userDataStr || "{}");
    candidateName =
      user.candidateName || user.studentName || user.name || "Candidate";
  } catch (e) {
    console.error("User parse error", e);
  }

  const currentPath =
    window.location.pathname.split("/").pop() || "frontend_dashboard.html";

  // Check active routes
  const isDashboard = currentPath.includes("frontend_dashboard.html");
  const isScoreboard = currentPath.includes("scoreboardWeb.html");
  const isProfile = currentPath.includes("profileWeb.html");
  const isBilling = currentPath.includes("billing.html");

  const navHtml = `
    <!-- HEADER -->
    <header class="bg-white border-b border-slate-200/90 sticky top-0 z-30 shadow-2xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <!-- BRAND LOGO -->
        <a href="frontend_dashboard.html" class="flex items-center gap-2.5 no-underline">
          <div class="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-[0_4px_12px_rgba(79,70,229,0.28)]">
            <i data-lucide="graduation-cap" class="w-5 h-5 text-white"></i>
          </div>
          <div class="flex flex-col">
            <span class="text-base font-black tracking-tight text-slate-900 uppercase">
              EXAM <span class="text-indigo-600">MOKK</span>
            </span>
            <span class="text-[9px] font-bold text-slate-400 font-mono-tag uppercase tracking-wider">
              Candidate Workspace
            </span>
          </div>
        </a>

        <!-- RIGHT ACTIONS -->
        <div class="flex items-center gap-2 sm:gap-3">
          <button
            onclick="openSearchModal()"
            aria-label="Search Exam"
            class="w-9 h-9 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 flex items-center justify-center transition-all cursor-pointer border border-slate-200/60"
            title="Search Exams"
          >
            <i data-lucide="search" class="w-4 h-4"></i>
          </button>

          <a
            href="profileWeb.html"
            class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200/80 text-slate-700 text-xs font-semibold transition no-underline"
            title="View Profile"
          >
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span class="font-bold truncate max-w-[110px] sm:max-w-none">${candidateName}</span>
          </a>

          <button
            onclick="openLogoutModal()"
            class="w-9 h-9 sm:w-auto sm:px-3.5 sm:py-2 rounded-xl bg-rose-50 hover:bg-rose-100 active:scale-95 text-rose-600 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer border border-rose-200/80"
            title="Sign Out"
          >
            <i data-lucide="log-out" class="w-4 h-4"></i>
            <span class="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>

      <!-- LINK BAR -->
      <div class="bg-slate-50/80 border-t border-slate-200/60">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-2">
          <a
            href="frontend_dashboard.html"
            class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 no-underline ${
              isDashboard
                ? "bg-indigo-600 text-white font-black shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }"
          >
            <i data-lucide="layout-grid" class="w-4 h-4"></i>
            <span>Exams &amp; Tests</span>
          </a>

          <a
            href="scoreboardWeb.html"
            class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 no-underline ${
              isScoreboard
                ? "bg-indigo-600 text-white font-black shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }"
          >
            <i data-lucide="bar-chart-3" class="w-4 h-4"></i>
            <span>Scorecard &amp; Rank</span>
          </a>

          <a
            href="profileWeb.html"
            class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 no-underline ${
              isProfile
                ? "bg-indigo-600 text-white font-black shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }"
          >
            <i data-lucide="user-check" class="w-4 h-4"></i>
            <span>My Profile</span>
          </a>

          <a
            href="billing.html"
            class="px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-2 no-underline ${
              isBilling
                ? "bg-indigo-600 text-white font-black shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
            }"
          >
            <i data-lucide="credit-card" class="w-4 h-4"></i>
            <span>Billing &amp; Pass</span>
          </a>
        </div>
      </div>
    </header>

    <!-- SEARCH OVERLAY MODAL -->
    <div
      id="search-modal"
      class="fixed inset-0 bg-slate-950/70 backdrop-blur-xs z-50 flex items-start justify-center p-4 pt-16 hidden"
    >
      <div class="bg-white rounded-3xl w-full max-w-md p-5 space-y-3 shadow-2xl animate-fadeIn">
        <div class="flex items-center gap-2 border-b border-slate-100 pb-3">
          <i data-lucide="search" class="w-4 h-4 text-slate-400"></i>
          <input
            id="search-input"
            type="text"
            placeholder="Search exam (e.g. SSC, BPSC, UPSC, NEET, Banking)..."
            oninput="handleSearch(this.value)"
            class="w-full text-xs font-bold text-slate-800 placeholder-slate-400 outline-none bg-transparent"
          />
          <button
            onclick="closeSearchModal()"
            class="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
          >
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <div id="search-results" class="max-h-64 overflow-y-auto space-y-1.5 text-xs">
          <p class="text-[11px] text-slate-400 font-semibold text-center py-4">
            Type exam name to quickly open simulation...
          </p>
        </div>
      </div>
    </div>

    <!-- LOGOUT MODAL -->
    <div
      id="logout-modal"
      class="fixed inset-0 bg-slate-950/75 backdrop-blur-xs z-50 flex items-center justify-center p-4 hidden"
    >
      <div class="bg-white rounded-3xl w-full max-w-xs p-6 shadow-2xl animate-fadeIn text-center flex flex-col items-center">
        <div class="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-3 border border-rose-100">
          <i data-lucide="log-out" class="w-6 h-6 stroke-[2.2]"></i>
        </div>
        <h3 class="text-sm font-black text-slate-900 leading-tight">Logout?</h3>
        <p class="text-xs text-slate-500 font-semibold mt-1 px-2">
          Are you sure you want to end your active session?
        </p>

        <div class="grid grid-cols-2 gap-2.5 w-full mt-5">
          <button
            onclick="closeLogoutModal()"
            class="py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-95 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            onclick="confirmLogoutAction()"
            class="py-2.5 px-3 rounded-xl bg-rose-600 hover:bg-rose-700 active:scale-95 text-white text-xs font-black shadow-md shadow-rose-600/25 transition-all cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  `;

  const placeholder = document.getElementById("web-nav-placeholder");
  if (placeholder) {
    placeholder.innerHTML = navHtml;
  } else {
    document.body.insertAdjacentHTML("afterbegin", navHtml);
  }

  if (window.lucide) lucide.createIcons();
}

// Global Nav Utilities
function openSearchModal() {
  const modal = document.getElementById("search-modal");
  if (modal) {
    modal.classList.remove("hidden");
    const input = document.getElementById("search-input");
    if (input) input.focus();
    if (window.lucide) lucide.createIcons();
  }
}

function closeSearchModal() {
  const modal = document.getElementById("search-modal");
  if (modal) {
    modal.classList.add("hidden");
    const input = document.getElementById("search-input");
    if (input) input.value = "";
  }
}

function handleSearch(query) {
  const resultsCont = document.getElementById("search-results");
  if (!resultsCont) return;

  if (!query.trim()) {
    resultsCont.innerHTML = `
      <p class="text-[11px] text-slate-400 font-semibold text-center py-4">
        Type exam name to quickly open simulation...
      </p>
    `;
    return;
  }

  const filtered = searchableExams.filter((ex) =>
    ex.name.toLowerCase().includes(query.toLowerCase()),
  );

  if (filtered.length === 0) {
    resultsCont.innerHTML = `
      <p class="text-[11px] text-slate-400 font-semibold text-center py-4">
        No matching exams found.
      </p>
    `;
    return;
  }

  resultsCont.innerHTML = filtered
    .map(
      (item) => `
    <div 
      onclick="window.location.href='dashboard_web.html?type=${item.type}'"
      class="p-2.5 bg-slate-50 hover:bg-indigo-50 border border-slate-100 rounded-xl flex items-center justify-between cursor-pointer text-slate-800 font-bold transition"
    >
      <span>${item.name}</span>
      <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-indigo-600"></i>
    </div>
  `,
    )
    .join("");

  if (window.lucide) lucide.createIcons();
}

function openLogoutModal() {
  const modal = document.getElementById("logout-modal");
  if (modal) {
    modal.classList.remove("hidden");
    if (window.lucide) lucide.createIcons();
  }
}

function closeLogoutModal() {
  const modal = document.getElementById("logout-modal");
  if (modal) modal.classList.add("hidden");
}

function confirmLogoutAction() {
  // 1. Clear All Core & Legacy Keys from localStorage
  const keysToRemove = [
    // Current Storage Keys
    "exammokk_token",
    "exammokk_user",
    "exammokk_session",
    "exammokk_active_plan",
    "exammokk_sub_plans",
    "user_fcm_token",

    // Legacy / Cross-Portal Keys
    "examIndiaToken",
    "examIndiaUser",
    "kidsPaintToken",
    "kidsPaintUser",
    "auth_token",
    "token",
    "access_token",
    "user",
    "authUser",
    "user_info",
  ];

  keysToRemove.forEach((key) => localStorage.removeItem(key));

  // 2. Clear SessionStorage (Checkout context, pending plans, promo codes, redirect paths)
  sessionStorage.clear();

  // 3. Optional: Agar aap completely sab kuch reset karna chahte hain localStorage se:
  // localStorage.clear();

  // 4. Redirect to login page
  window.location.href = "login.html";
}

document.addEventListener("DOMContentLoaded", initWebNav);
