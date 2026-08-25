/**
 * ExamMokk Cloud - Global Layout & Analytics Engine
 */

// 1. DYNAMIC GOOGLE ANALYTICS (GA4) INJECTION
(function initGoogleAnalytics() {
  const GA_TRACKING_ID = "G-0NJVGT02CT";

  // Prevent duplicate injection if already present
  if (document.querySelector(`script[src*="${GA_TRACKING_ID}"]`)) return;

  // Create external script tag
  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(gaScript);

  // Initialize dataLayer & gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID);
})();

// 2. GLOBAL HEADER RENDERER
function renderHeader() {
  const container = document.getElementById("global-header");
  if (!container) return;

  container.innerHTML = `
    <header class="bg-white/95 border-b border-slate-200 sticky top-0 z-50 backdrop-blur-md shadow-xs">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- BRAND LOGO -->
          <a href="/" class="flex items-center gap-3 group no-underline">
            <div class="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
              <i data-lucide="graduation-cap" class="w-5 h-5 text-white"></i>
            </div>
            <div class="flex flex-col">
              <div class="flex items-center gap-1.5">
                <span class="text-lg font-black tracking-tight text-slate-900 uppercase">Exam<span class="text-indigo-600">Mokk</span></span>
                <span class="bg-indigo-50 text-indigo-700 border border-indigo-200 text-[9px] font-black px-1.5 py-0.2 rounded-full uppercase">FREE</span>
              </div>
              <span class="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">Govt Prep App &amp; Test Engine</span>
            </div>
          </a>

          <!-- DESKTOP NAVIGATION -->
          <nav class="hidden md:flex items-center gap-8">
            <a href="/" class="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition no-underline">Home</a>
            
            <!-- ALL EXAMS MEGA DROPDOWN -->
            <div class="relative group">
              <button class="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition py-2 cursor-pointer focus:outline-none">
                <span>All Exams</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
              </button>
              
              <div class="absolute left-0 top-full hidden group-hover:grid grid-cols-2 gap-1.5 w-96 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-fadeIn">
                <a href="/ssc" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">⚡</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">SSC Exams</div>
                    <div class="text-[10px] text-slate-500 font-medium">CGL, CHSL, MTS, GD</div>
                  </div>
                </a>
                <a href="/upsc" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">⚖️</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Govt PSC &amp; UPSC</div>
                    <div class="text-[10px] text-slate-500 font-medium">IAS, BPSC, UPPSC</div>
                  </div>
                </a>
                <a href="/banking" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🏦</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Banking</div>
                    <div class="text-[10px] text-slate-500 font-medium">SBI, IBPS PO &amp; Clerk</div>
                  </div>
                </a>
                <a href="/railways" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🚆</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Railways</div>
                    <div class="text-[10px] text-slate-500 font-medium">RRB NTPC, Group D</div>
                  </div>
                </a>
                <a href="/jee-neet" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🧬</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">JEE &amp; NEET UG</div>
                    <div class="text-[10px] text-slate-500 font-medium">Physics, Chem, Bio</div>
                  </div>
                </a>
                <a href="/defence" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🎖️</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Defence</div>
                    <div class="text-[10px] text-slate-500 font-medium">NDA, CDS, Police SI</div>
                  </div>
                </a>
                <a href="/teaching" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">👨‍🏫</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Teaching</div>
                    <div class="text-[10px] text-slate-500 font-medium">CTET, State TET</div>
                  </div>
                </a>
                <a href="/entrance" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🎓</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">CUET &amp; Law</div>
                    <div class="text-[10px] text-slate-500 font-medium">CUET UG, CLAT</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- DAILY GK DIRECT LINK -->
            <a href="/gov_exam_runner.html?test_id=dgk_todays_affairs&segment=DAILY_GK" class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition no-underline">
              <span class="text-sm">🌍</span>
              <span>Daily GK Quiz</span>
            </a>

            <a href="/about-us" class="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition no-underline">About</a>

            <!-- START FREE TEST CTA BUTTON -->
            <a href="/#exam-grid-section" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-100 transition active:scale-95 cursor-pointer no-underline">
              <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-300 fill-current"></i>
              <span>Start Free Test</span>
            </a>
          </nav>

          <!-- MOBILE MENU BUTTON -->
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-700 hover:text-indigo-600 focus:outline-none cursor-pointer" aria-label="Menu">
            <i id="menu-icon" data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </div>

      <!-- MOBILE DROPDOWN -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
        <a href="/" class="block px-3 py-2 rounded-lg text-sm font-bold text-indigo-600 bg-indigo-50 no-underline">Home</a>
        
        <a href="/gov_exam_runner.html?test_id=dgk_todays_affairs&segment=DAILY_GK" class="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 no-underline">
          <span class="text-base">🌍</span>
          <span>Daily GK &amp; Current Affairs Drill (Free)</span>
        </a>

        <div class="px-3 pt-2 text-[10px] font-black uppercase tracking-wider text-slate-400">All Exam Categories</div>
        <div class="grid grid-cols-2 gap-2">
          <a href="/ssc" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>⚡</span> SSC</a>
          <a href="/upsc" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>⚖️</span> UPSC/PSC</a>
          <a href="/banking" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🏦</span> Banking</a>
          <a href="/railways" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🚆</span> Railways</a>
          <a href="/jee-neet" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🧬</span> JEE/NEET</a>
          <a href="/defence" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🎖️</span> Defence</a>
          <a href="/teaching" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>👨‍🏫</span> Teaching</a>
          <a href="/entrance" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🎓</span> CUET/Law</a>
        </div>

        <div class="pt-2 border-t border-slate-100 flex flex-col gap-1 text-xs font-bold text-slate-700">
          <a href="/about-us" class="px-3 py-2 hover:bg-slate-50 rounded-lg no-underline">About Us</a>
          <a href="/contact-us" class="px-3 py-2 hover:bg-slate-50 rounded-lg no-underline">Contact &amp; Help</a>
        </div>

        <!-- MOBILE CTA -->
        <a href="/#exam-grid-section" onclick="toggleMobileMenu()" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs uppercase flex items-center justify-center gap-2 shadow-md no-underline">
          <i data-lucide="zap" class="w-4 h-4 text-amber-300 fill-current"></i>
          <span>Start Free Test</span>
        </a>
      </div>
    </header>
  `;
}

// 3. GLOBAL FOOTER RENDERER
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
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Govt &amp; Career Exams</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="/upsc" class="hover:text-indigo-600 transition no-underline">UPSC Civil Services &amp; State PSC</a></li>
              <li><a href="/ssc" class="hover:text-indigo-600 transition no-underline">SSC CGL, CHSL, MTS, CPO</a></li>
              <li><a href="/railways" class="hover:text-indigo-600 transition no-underline">Railway RRB NTPC &amp; Group D</a></li>
              <li><a href="/banking" class="hover:text-indigo-600 transition no-underline">IBPS, SBI PO &amp; Clerk</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Entrances &amp; Practice</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="/gov_exam_runner.html?test_id=dgk_todays_affairs&segment=DAILY_GK" class="text-emerald-700 font-bold hover:text-emerald-800 transition no-underline">Daily GK &amp; Current Affairs Drill</a></li>
              <li><a href="/jee-neet" class="hover:text-indigo-600 transition no-underline">NTA JEE Main &amp; NEET UG</a></li>
              <li><a href="/defence" class="hover:text-indigo-600 transition no-underline">NDA, CDS, Police SI, Agniveer</a></li>
              <li><a href="/teaching" class="hover:text-indigo-600 transition no-underline">CTET, State TET &amp; KVS</a></li>
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
            <a href="/privacy-policy" class="hover:text-slate-900 transition no-underline">Privacy Policy</a>
            <a href="/terms" class="hover:text-slate-900 transition no-underline">Terms of Service</a>
            <a href="/contact-us" class="hover:text-slate-900 transition no-underline">Contact &amp; Help</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// 4. MOBILE HAMBURGER TOGGLE HELPER
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

// 5. INITIALIZE ON DOM LOAD
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  if (window.lucide) lucide.createIcons();
});
