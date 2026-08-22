/**
 * ExamMokk Cloud - Global Reusable Header & Footer Component
 */

function renderHeader() {
  const headerContainer = document.getElementById("global-header");
  if (!headerContainer) return;

  headerContainer.innerHTML = `
    <header class="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <!-- Logo -->
          <a href="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
              <i data-lucide="award" class="w-6 h-6 text-white"></i>
            </div>
            <div class="flex flex-col">
              <span class="text-xl font-black tracking-tight text-white uppercase">Exam<span class="text-blue-500">Mokk</span></span>
              <span class="text-[9px] font-semibold text-slate-400 tracking-widest uppercase -mt-1">India Mock Engine</span>
            </div>
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="/" class="text-sm font-semibold text-blue-400 hover:text-white transition">Home</a>
            <a href="/tests" class="text-sm font-semibold text-slate-300 hover:text-white transition">All Mock Tests</a>
            <a href="/marking-scheme" class="text-sm font-semibold text-slate-300 hover:text-white transition">Marking Schemes</a>
            <a href="/pricing" class="text-sm font-semibold text-slate-300 hover:text-white transition">Free Series</a>
            <a href="/app" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-600/30 transition active:scale-95">
              <i data-lucide="play-circle" class="w-4 h-4"></i>
              <span>Launch Mock Test</span>
            </a>
          </nav>

          <!-- Mobile Menu Button -->
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-400 hover:text-white focus:outline-none" aria-label="Toggle Navigation">
            <i id="menu-icon" data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown -->
      <div id="mobile-menu" class="hidden md:hidden bg-slate-900/98 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
        <a href="/" class="block px-3 py-2 rounded-lg text-base font-semibold text-blue-400 bg-slate-800/50">Home</a>
        <a href="/tests" class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-300 hover:bg-slate-800">All Mock Tests</a>
        <a href="/marking-scheme" class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-300 hover:bg-slate-800">Marking Schemes</a>
        <a href="/pricing" class="block px-3 py-2 rounded-lg text-base font-semibold text-slate-300 hover:bg-slate-800">Free Series</a>
        <a href="/app" class="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white font-bold rounded-xl mt-2">
          <i data-lucide="play-circle" class="w-5 h-5"></i>
          Launch Mock Test
        </a>
      </div>
    </header>
  `;
}

function renderFooter() {
  const footerContainer = document.getElementById("global-footer");
  if (!footerContainer) return;

  footerContainer.innerHTML = `
    <footer class="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div class="space-y-4 md:col-span-1">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <i data-lucide="award" class="w-5 h-5"></i>
              </div>
              <span class="text-xl font-bold text-white tracking-wide uppercase">Exam<span class="text-blue-500">Mokk</span></span>
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              India's premier real-time online test series platform configured with official negative marking and exact exam timers for SSC, Banking, Railways, State PSC, Defence & Entrance Exams.
            </p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Exam Categories</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/tests?cat=ssc" class="hover:text-blue-400 transition">SSC CGL, CHSL, CPO</a></li>
              <li><a href="/tests?cat=banking" class="hover:text-blue-400 transition">IBPS, SBI PO & Clerk</a></li>
              <li><a href="/tests?cat=railways" class="hover:text-blue-400 transition">RRB NTPC & Group D</a></li>
              <li><a href="/tests?cat=govt_psc" class="hover:text-blue-400 transition">UPSC & State PSC Pre</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Competitive Streams</h4>
            <ul class="space-y-2 text-xs">
              <li><a href="/tests?cat=jee_neet" class="hover:text-blue-400 transition">JEE Main & NEET UG</a></li>
              <li><a href="/tests?cat=defence" class="hover:text-blue-400 transition">NDA, CDS, AFCAT</a></li>
              <li><a href="/tests?cat=teaching" class="hover:text-blue-400 transition">CTET, STET & KVS</a></li>
              <li><a href="/tests?cat=entrance" class="hover:text-blue-400 transition">CUET & State Entrances</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">Exam Marking Rules</h4>
            <p class="text-xs text-slate-400 leading-relaxed mb-3">
              Standardized algorithm enforcing official NTA, TCS iON, and IBPS negative marking rules.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-900 border border-slate-800 rounded-lg text-[11px] text-emerald-400 font-semibold">
              <span>🇮🇳 Verified Indian Exam Patterns</span>
            </div>
          </div>
        </div>

        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; 2026 ExamMokk Cloud. Built exclusively for Indian competitive aspirants.
          </div>
          <div class="flex gap-6">
            <a href="/privacy-policy" class="hover:text-slate-300 transition">Privacy Policy</a>
            <a href="/terms" class="hover:text-slate-300 transition">Terms of Service</a>
            <a href="/contact" class="hover:text-slate-300 transition">Support</a>
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

// Auto Initialize Layout
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  if (window.lucide) {
    lucide.createIcons();
  }
});
