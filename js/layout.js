/**
 * ExamMokk Cloud - Web Header & Footer (White Theme)
 */

function renderHeader() {
  const container = document.getElementById("global-header");
  if (!container) return;

  container.innerHTML = `
    <header class="bg-white/95 border-b border-slate-200 sticky top-0 z-50 backdrop-blur-md shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Brand Logo -->
          <a href="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <i data-lucide="graduation-cap" class="w-5 h-5 text-white"></i>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <span class="text-lg font-black tracking-tight text-slate-900 uppercase">Exam<span class="text-indigo-600">Mokk</span></span>
                <span class="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">PRO</span>
              </div>
              <span class="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">All India Test Engine</span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-7">
            <a href="/" class="text-sm font-bold text-indigo-600 transition">Home</a>
            <a href="#exam-grid-section" class="text-sm font-bold text-slate-600 hover:text-indigo-600 transition">Mock Streams</a>
            <a href="#marking-schemes" class="text-sm font-bold text-slate-600 hover:text-indigo-600 transition">Marking Matrix</a>
            <button onclick="openSearchModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 border border-slate-200 text-xs font-semibold cursor-pointer transition">
              <i data-lucide="search" class="w-3.5 h-3.5"></i>
              <span>Quick Search (Ctrl + K)</span>
            </button>
            <button onclick="openPassModal()" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-rose-600 hover:from-amber-600 hover:to-rose-700 text-white font-bold text-xs shadow-md shadow-rose-100 transition active:scale-95 cursor-pointer">
              <i data-lucide="crown" class="w-4 h-4 text-yellow-200"></i>
              <span>Exam Pass ₹99</span>
            </button>
          </nav>

          <!-- Mobile Hamburger -->
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-700 hover:text-indigo-600 focus:outline-none" aria-label="Menu">
            <i id="menu-icon" data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
        <a href="/" class="block px-3 py-2 rounded-lg text-sm font-bold text-indigo-600 bg-indigo-50">Home</a>
        <a href="#exam-grid-section" class="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Mock Streams</a>
        <a href="#marking-schemes" class="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">Marking Schemes</a>
        <button onclick="openSearchModal()" class="w-full text-left px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center gap-2">
          <i data-lucide="search" class="w-4 h-4 text-slate-500"></i> Search Exams
        </button>
        <button onclick="openPassModal()" class="w-full py-3 bg-gradient-to-r from-amber-500 to-rose-600 text-white font-bold rounded-xl text-xs uppercase flex items-center justify-center gap-2">
          <i data-lucide="crown" class="w-4 h-4"></i> Get Exam Pass @ ₹99
        </button>
      </div>
    </header>
  `;
}

function renderFooter() {
  const container = document.getElementById("global-footer");
  if (!container) return;

  container.innerHTML = `
    <footer class="bg-white text-slate-600 pt-16 pb-12 border-t border-slate-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
          <div class="space-y-4 md:col-span-1">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white">
                <i data-lucide="graduation-cap" class="w-5 h-5"></i>
              </div>
              <span class="text-lg font-black text-slate-900 uppercase tracking-tight">Exam<span class="text-indigo-600">Mokk</span></span>
            </div>
            <p class="text-xs text-slate-500 leading-relaxed font-medium">
              India's authentic online mock test portal featuring official negative marking formulas, strict question timers, and real-time national ranking.
            </p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Govt & Career Exams</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="javascript:void(0)" onclick="navigateToCategory('GOVT_PSC')" class="hover:text-indigo-600 transition">UPSC Civil Services & State PSC</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('SSC')" class="hover:text-indigo-600 transition">SSC CGL, CHSL, MTS, CPO</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('RAILWAYS')" class="hover:text-indigo-600 transition">Railway RRB NTPC & Group D</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('BANKING')" class="hover:text-indigo-600 transition">IBPS, SBI PO & Clerk</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Entrances & Defence</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="javascript:void(0)" onclick="navigateToCategory('JEE_NEET')" class="hover:text-indigo-600 transition">NTA JEE Main & NEET UG</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('DEFENCE')" class="hover:text-indigo-600 transition">NDA, CDS, Police SI, Agniveer</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('TEACHING')" class="hover:text-indigo-600 transition">CTET, State TET & KVS</a></li>
              <li><a href="javascript:void(0)" onclick="navigateToCategory('ENTRANCE')" class="hover:text-indigo-600 transition">CUET UG/PG, CLAT & Law</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Live Verification</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-3 font-medium">
              Standardized engine matching NTA, TCS-iON, IBPS, and UPSC evaluation algorithms.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-emerald-700 font-bold">
              <span>🇮🇳 Verified Indian Exam Patterns</span>
            </div>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>&copy; 2026 ExamMokk Cloud. All Rights Reserved.</div>
          <div class="flex gap-6">
            <a href="/privacy" class="hover:text-slate-900 transition">Privacy Policy</a>
            <a href="/terms" class="hover:text-slate-900 transition">Terms of Service</a>
            <a href="/contact" class="hover:text-slate-900 transition">Contact & Help</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const icon = document.getElementById("menu-icon");
  if (!menu || !icon) return;

  const isHidden = menu.classList.contains("hidden");
  if (isHidden) {
    menu.classList.remove("hidden");
    icon.setAttribute("data-lucide", "x");
  } else {
    menu.classList.add("hidden");
    icon.setAttribute("data-lucide", "menu");
  }
  if (window.lucide) lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  if (window.lucide) lucide.createIcons();
});
