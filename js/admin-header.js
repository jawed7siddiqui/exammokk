// ==========================================
// 🔒 ADMIN AUTH & EXPIRY LOGIC (7 DAYS)
// ==========================================
const ADMIN_AUTH_KEY = "admin_auth_session";
const ADMIN_PASSWORD = "123456";
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

function checkAdminAuth() {
  try {
    const rawSession = localStorage.getItem(ADMIN_AUTH_KEY);
    if (!rawSession) return false;

    const session = JSON.parse(rawSession);
    const now = new Date().getTime();

    // Check 7 Days expiry
    if (now > session.expiry) {
      localStorage.removeItem(ADMIN_AUTH_KEY);
      return false;
    }
    return session.authenticated === true;
  } catch (e) {
    localStorage.removeItem(ADMIN_AUTH_KEY);
    return false;
  }
}

function adminLogout() {
  localStorage.removeItem(ADMIN_AUTH_KEY);
  window.location.reload();
}

function submitAdminPassword() {
  const inputEl = document.getElementById("admin_auth_pass_input");
  const errorEl = document.getElementById("admin_auth_error_msg");
  const enteredPass = inputEl ? inputEl.value.trim() : "";

  if (enteredPass === ADMIN_PASSWORD) {
    const sessionData = {
      authenticated: true,
      expiry: new Date().getTime() + SEVEN_DAYS_MS,
    };
    localStorage.setItem(ADMIN_AUTH_KEY, JSON.stringify(sessionData));
    const modal = document.getElementById("admin-password-modal");
    if (modal) modal.remove();
  } else {
    if (errorEl) errorEl.classList.remove("hidden");
    if (inputEl) {
      inputEl.value = "";
      inputEl.focus();
    }
  }
}

function renderPasswordModal() {
  if (document.getElementById("admin-password-modal")) return;

  const modalHtml = `
    <div id="admin-password-modal" class="fixed inset-0 z-[99999] bg-slate-900/90 backdrop-blur-md flex items-center justify-center p-4">
      <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full border border-slate-200 shadow-2xl space-y-4 text-center">
        <div class="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto text-indigo-600">
          <i data-lucide="shield-lock" class="w-6 h-6"></i>
        </div>
        <div>
          <h3 class="text-base font-black text-slate-800 tracking-tight">Admin Access Required</h3>
          <p class="text-xs text-slate-400 font-medium mt-1">Please enter password to unlock workspace</p>
        </div>
        <form onsubmit="event.preventDefault(); submitAdminPassword();" class="space-y-3">
          <input
            type="password"
            id="admin_auth_pass_input"
            placeholder="Enter Admin Password..."
            autofocus
            class="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 text-center tracking-widest outline-none focus:border-indigo-600 focus:bg-white transition-all"
          />
          <p id="admin_auth_error_msg" class="text-[11px] font-bold text-rose-500 hidden">
            Invalid Password! Try again.
          </p>
          <button
            type="submit"
            class="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md shadow-indigo-600/20"
          >
            Unlock Session (7 Days)
          </button>
        </form>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalHtml);
  if (window.lucide) lucide.createIcons();
}

// ==========================================
// 🎨 HEADER RENDER COMPONENT
// ==========================================
function renderAdminHeader(pageTitle = "DualEngine Pro", activeNav = "tests") {
  // Check Password Authentication First
  if (!checkAdminAuth()) {
    renderPasswordModal();
  }

  // 1. Mobile Bar
  const mobileBarHtml = `
    <div class="md:hidden bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between sticky top-0 z-40 shadow-xs">
      <div class="flex items-center gap-2">
        <a href="admin.html" title="Go to Admin Home" class="p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl border border-slate-200 transition-all flex items-center justify-center">
          <i data-lucide="home" class="w-4 h-4 text-indigo-600"></i>
        </a>
        <a href="admin.html" class="flex items-center gap-2">
          <div class="p-2 bg-indigo-600 rounded-xl text-white shadow-xs">
            <i data-lucide="layers" class="w-4 h-4"></i>
          </div>
          <div>
            <span class="font-extrabold text-sm tracking-tight text-slate-800 block">DualEngine Pro</span>
            <span class="text-[10px] text-indigo-600 font-bold uppercase tracking-wider">Admin Workspace</span>
          </div>
        </a>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="adminLogout()" title="Logout" class="p-2 text-rose-600 bg-rose-50 rounded-xl border border-rose-200 transition-colors cursor-pointer">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </button>
        <button onclick="toggleMobileSidebar()" class="p-2 text-slate-600 hover:text-slate-900 bg-slate-100 rounded-xl border border-slate-200 transition-colors cursor-pointer">
          <i data-lucide="menu" class="w-5 h-5"></i>
        </button>
      </div>
    </div>
  `;

  // 2. Sidebar
  const sidebarHtml = `
    <aside id="sidebar" class="w-full md:w-64 bg-white border-r border-slate-200 flex flex-col fixed md:sticky top-0 h-screen z-40 transition-transform duration-300 -translate-x-full md:translate-x-0 shrink-0">
      <a href="admin.html" class="p-5 border-b border-slate-100 hidden md:flex items-center gap-3 hover:bg-slate-50/80 transition-colors group">
        <div class="p-2.5 bg-gradient-to-tr from-indigo-600 to-indigo-500 rounded-2xl shadow-sm text-white group-hover:scale-105 transition-transform">
          <i data-lucide="layers" class="w-5 h-5"></i>
        </div>
        <div>
          <h1 class="font-extrabold text-sm tracking-tight text-slate-800 group-hover:text-indigo-600 transition-colors">DualEngine Pro</h1>
          <p class="text-[11px] text-slate-500 font-semibold">Test &amp; Item Manager</p>
        </div>
      </a>

      <nav class="flex-1 p-3.5 space-y-1.5">
        <a href="admin.html" class="w-full flex items-center gap-3 px-3.5 py-2.5 rounded-2xl font-bold text-xs text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition-all cursor-pointer">
          <i data-lucide="home" class="w-4 h-4 text-indigo-600"></i>
          <span>Admin Home</span>
        </a>

        <button onclick="if(window.switchTab) switchTab('tests'); else window.location.href='admin.html';" id="nav-tests" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl font-bold text-xs ${activeNav === "tests" ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"} transition-all cursor-pointer">
          <i data-lucide="file-spreadsheet" class="w-4 h-4"></i>
          <span>1. Test Containers</span>
        </button>

        <button onclick="if(window.switchTab) switchTab('questions'); else window.location.href='admin.html';" id="nav-questions" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl font-bold text-xs ${activeNav === "questions" ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"} transition-all cursor-pointer">
          <i data-lucide="help-circle" class="w-4 h-4"></i>
          <span>2. Questions Items</span>
        </button>

        <a href="results.html" id="nav-results" class="w-full flex items-center gap-3 px-3.5 py-3 rounded-2xl font-bold text-xs ${activeNav === "results" ? "bg-indigo-600 text-white shadow-sm shadow-indigo-600/20" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"} transition-all cursor-pointer">
          <i data-lucide="award" class="w-4 h-4"></i>
          <span>3. User Results Hub</span>
        </a>
      </nav>

      <div class="p-4 border-t border-slate-100 bg-slate-50/50 text-[11px] text-slate-600 space-y-2">
        <button onclick="adminLogout()" class="w-full py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer">
          <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
          <span>Logout Session</span>
        </button>
        <p class="text-[10px] text-slate-400 font-mono text-center truncate">exam-api.jawedsiddiqui.cloud</p>
      </div>
    </aside>
  `;

  // 3. Top App Header
  const topHeaderHtml = `
    <header class="bg-white border-b border-slate-200 px-4 md:px-8 py-3.5 flex flex-col md:flex-row md:items-center justify-between gap-3 sticky top-0 z-30 shadow-2xs">
      <div class="flex items-center gap-3">
        <a href="admin.html" title="Return to Admin Dashboard" class="p-2.5 bg-slate-100 hover:bg-indigo-50 border border-slate-200 hover:border-indigo-200 rounded-2xl text-slate-700 hover:text-indigo-600 transition-all flex items-center justify-center shrink-0 active:scale-95 shadow-2xs">
          <i data-lucide="home" class="w-4 h-4 text-indigo-600"></i>
        </a>
        <div>
          <h2 id="page-title" class="text-base md:text-lg font-extrabold text-slate-800 tracking-tight">${pageTitle}</h2>
          <p class="text-xs text-slate-500 font-medium">
            Endpoints:
            <span class="font-mono text-[11px] text-indigo-600 font-semibold">/api/kidspaint</span> &amp;
            <span class="font-mono text-[11px] text-indigo-600 font-semibold">/api/test/questions</span>
          </p>
        </div>
      </div>

      <div class="flex items-center gap-2.5 self-end md:self-auto">
        <a href="ai.html" class="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
          <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i>
          <span>Generate</span>
        </a>

        <a href="results.html" class="px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
          <i data-lucide="award" class="w-3.5 h-3.5 text-indigo-600"></i>
          <span>Results</span>
        </a>

        <button onclick="if(window.refreshCurrentTab) refreshCurrentTab(this); else window.location.reload();" class="px-3.5 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold text-xs rounded-xl flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-2xs">
          <i data-lucide="rotate-cw" class="w-3.5 h-3.5"></i>
          <span>Refresh</span>
        </button>

        <button onclick="adminLogout()" title="Logout Admin Session" class="p-2 text-rose-600 hover:bg-rose-50 bg-slate-50 border border-slate-200 hover:border-rose-200 rounded-xl transition-all cursor-pointer">
          <i data-lucide="log-out" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </header>
  `;

  const containerMobile = document.getElementById("common-mobile-header");
  const containerSidebar = document.getElementById("common-sidebar-container");
  const containerTopHeader = document.getElementById("common-top-header");

  if (containerMobile) containerMobile.innerHTML = mobileBarHtml;
  if (containerSidebar) containerSidebar.innerHTML = sidebarHtml;
  if (containerTopHeader) containerTopHeader.innerHTML = topHeaderHtml;

  if (window.lucide) lucide.createIcons();
}
