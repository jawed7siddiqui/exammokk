/**
 * ExamMokk Cloud - Global Layout & Analytics Engine
 * Policy-Compliant Edition (Google Ads & Misrepresentation Safe)
 */

// 1. DYNAMIC GOOGLE ANALYTICS (GA4) INJECTION
(function initGoogleAnalytics() {
  const GA_TRACKING_ID = "G-0NJVGT02CT";

  if (document.querySelector(`script[src*="${GA_TRACKING_ID}"]`)) return;

  const gaScript = document.createElement("script");
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
  document.head.appendChild(gaScript);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_TRACKING_ID);
})();

// Helper to check Auth Status
function isCandidateLoggedIn() {
  return !!(
    localStorage.getItem("exammokk_token") ||
    localStorage.getItem("examIndiaToken") ||
    localStorage.getItem("kidsPaintToken") ||
    localStorage.getItem("exammokk_user")
  );
}

// 2. GLOBAL HEADER RENDERER (No Billing, No About)
function renderHeader() {
  const container = document.getElementById("global-header");
  if (!container) return;

  const isLoggedIn = isCandidateLoggedIn();

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
              </div>
              <span class="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">Online Exam Prep &amp; Mock Test Portal</span>
            </div>
          </a>

          <!-- DESKTOP NAVIGATION -->
          <nav class="hidden md:flex items-center gap-5">
            <a href="/" class="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition no-underline">Home</a>

            <!-- ALL EXAMS MEGA DROPDOWN -->
            <div class="relative group">
              <button class="flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition py-2 cursor-pointer focus:outline-none">
                <span>Exams</span>
                <i data-lucide="chevron-down" class="w-3.5 h-3.5 transition-transform group-hover:rotate-180"></i>
              </button>

              <div class="absolute left-0 top-full hidden group-hover:grid grid-cols-2 gap-1.5 w-96 bg-white border border-slate-200 rounded-2xl shadow-xl p-3 z-50 animate-fadeIn">
                <a href="/ssc" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">⚡</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">SSC Exam Practice</div>
                    <div class="text-[10px] text-slate-500 font-medium">CGL, CHSL, MTS, GD</div>
                  </div>
                </a>
                <a href="/upsc" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">⚖️</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Civil Services &amp; PSC</div>
                    <div class="text-[10px] text-slate-500 font-medium">IAS, BPSC, UPPSC Prep</div>
                  </div>
                </a>
                <a href="/banking" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🏦</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Banking Exams</div>
                    <div class="text-[10px] text-slate-500 font-medium">SBI, IBPS PO &amp; Clerk</div>
                  </div>
                </a>
                <a href="/railways" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🚆</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Railways Exams</div>
                    <div class="text-[10px] text-slate-500 font-medium">RRB NTPC, Group D</div>
                  </div>
                </a>
                <a href="/jee-neet" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🧬</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">JEE &amp; NEET Mock Tests</div>
                    <div class="text-[10px] text-slate-500 font-medium">Physics, Chem, Bio</div>
                  </div>
                </a>
                <a href="/defence" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🎖️</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Defence Exams</div>
                    <div class="text-[10px] text-slate-500 font-medium">NDA, CDS, Police SI</div>
                  </div>
                </a>
                <a href="/teaching" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">👨‍🏫</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">Teaching Eligibility</div>
                    <div class="text-[10px] text-slate-500 font-medium">CTET, State TET</div>
                  </div>
                </a>
                <a href="/entrance" class="flex items-center gap-2.5 p-2 rounded-xl hover:bg-indigo-50/50 transition no-underline">
                  <span class="text-base">🎓</span>
                  <div>
                    <div class="text-xs font-bold text-slate-900">CUET &amp; Law Entrances</div>
                    <div class="text-[10px] text-slate-500 font-medium">CUET UG, CLAT</div>
                  </div>
                </a>
              </div>
            </div>

            <!-- DAILY GK DIRECT LINK -->
<a 
  href="/dashboard_web.html?type=DAILY_GK" 
  class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200 transition no-underline"
>
  <span class="text-sm">⚡</span>
  <span>Daily GK</span>
</a>
          <!--  <a href="/pricing" class="text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-indigo-600 transition no-underline">Pricing</a>
-->
            <!-- START FREE TEST CTA -->
            <a href="/#exam-grid-section" class="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs border border-indigo-200 transition active:scale-95 cursor-pointer no-underline">
              <i data-lucide="zap" class="w-3.5 h-3.5 text-amber-500 fill-current"></i>
              <span>Free Mocks</span>
            </a>

            <!-- AUTH BUTTON -->
            ${
              isLoggedIn
                ? `
              <a href="/frontend_dashboard.html" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-100 transition active:scale-95 cursor-pointer no-underline">
                <i data-lucide="layout-dashboard" class="w-3.5 h-3.5"></i>
                <span>Dashboard</span>
              </a>
            `
                : `
              <a href="/login.html" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-100 transition active:scale-95 cursor-pointer no-underline">
                <i data-lucide="user" class="w-3.5 h-3.5"></i>
                <span>Login / Join</span>
              </a>
            `
            }
          </nav>

          <!-- MOBILE MENU HAMBURGER BUTTON -->
          <button onclick="toggleMobileMenu()" class="md:hidden p-2 text-slate-700 hover:text-indigo-600 focus:outline-none cursor-pointer border-0 bg-transparent" aria-label="Menu">
            <i id="menu-icon" data-lucide="menu" class="w-6 h-6"></i>
          </button>
        </div>
      </div>

      <!-- FULL MOBILE MENU DRAWER (No Billing, No About) -->
      <div id="mobile-menu" class="hidden md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3.5 max-h-[85vh] overflow-y-auto shadow-2xl">
        
        <!-- PRIMARY MOBILE LINKS -->
        <div class="grid grid-cols-3 gap-2">
          <a href="/" onclick="toggleMobileMenu()" class="flex flex-col items-center justify-center p-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200/80 no-underline text-center">
            <i data-lucide="home" class="w-4 h-4 text-indigo-600 mb-1"></i>
            <span>Home</span>
          </a>
          <a href="/pricing.html" onclick="toggleMobileMenu()" class="flex flex-col items-center justify-center p-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200/80 no-underline text-center">
            <i data-lucide="crown" class="w-4 h-4 text-amber-500 mb-1"></i>
            <span>Passes</span>
          </a>
          <a href="/#exam-grid-section" onclick="toggleMobileMenu()" class="flex flex-col items-center justify-center p-2.5 rounded-xl text-xs font-bold text-slate-800 bg-slate-50 border border-slate-200/80 no-underline text-center">
            <i data-lucide="zap" class="w-4 h-4 text-emerald-600 mb-1"></i>
            <span>Free Tests</span>
          </a>
        </div>

        <!-- DAILY GK BANNER IN MOBILE -->
        <a href="/test/runner?test_id=dgk_todays_affairs&segment=DAILY_GK" onclick="toggleMobileMenu()" class="flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold text-emerald-900 bg-emerald-50 border border-emerald-200 no-underline">
          <div class="flex items-center gap-2">
            <span class="text-base">⚡</span>
            <span>Daily GK &amp; Current Affairs (Free)</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-emerald-600"></i>
        </a>

        <!-- EXAM PRACTICE CATEGORIES -->
        <div>
          <div class="px-1 pb-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">Exam Categories</div>
          <div class="grid grid-cols-2 gap-2">
            <a href="/ssc" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>⚡</span> SSC Prep</a>
            <a href="/upsc" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>⚖️</span> UPSC/PSC</a>
            <a href="/banking" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🏦</span> Banking</a>
            <a href="/railways" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🚆</span> Railways</a>
            <a href="/jee-neet" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🧬</span> JEE/NEET</a>
            <a href="/defence" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🎖️</span> Defence</a>
            <a href="/teaching" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>👨‍🏫</span> Teaching</a>
            <a href="/entrance" class="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-1.5 no-underline"><span>🎓</span> CUET/Law</a>
          </div>
        </div>

        <!-- MOBILE ACTION BUTTON -->
        <div class="pt-2 border-t border-slate-100">
          ${
            isLoggedIn
              ? `
            <a href="/frontend_dashboard.html" onclick="toggleMobileMenu()" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs uppercase flex items-center justify-center gap-2 shadow-md no-underline">
              <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
              <span>Open Candidate Dashboard</span>
            </a>
          `
              : `
            <a href="/login.html" onclick="toggleMobileMenu()" class="w-full py-3 bg-indigo-600 text-white font-bold rounded-xl text-xs uppercase flex items-center justify-center gap-2 shadow-md no-underline">
              <i data-lucide="user" class="w-4 h-4"></i>
              <span>Login / Register Account</span>
            </a>
          `
          }
        </div>
      </div>
    </header>
  `;
}

// 3. GLOBAL FOOTER RENDERER (About Us present in Footer)
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
              An independent online mock test platform designed for exam preparation, offering standard negative marking patterns, test timers, and percentile analytics.
            </p>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Competitive Exam Prep</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="/upsc" class="hover:text-indigo-600 transition no-underline">UPSC Civil Services &amp; State PSC Practice</a></li>
              <li><a href="/ssc" class="hover:text-indigo-600 transition no-underline">SSC CGL, CHSL, MTS Mock Tests</a></li>
              <li><a href="/railways" class="hover:text-indigo-600 transition no-underline">RRB NTPC &amp; Group D Practice</a></li>
              <li><a href="/banking" class="hover:text-indigo-600 transition no-underline">IBPS &amp; SBI PO/Clerk Practice</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Entrances &amp; Passes</h4>
            <ul class="space-y-2 text-xs font-semibold">
              <li><a href="/test/runner?test_id=dgk_todays_affairs&segment=DAILY_GK" class="text-emerald-700 font-bold hover:text-emerald-800 transition no-underline">Daily GK &amp; Current Affairs Quiz</a></li>
              <li><a href="/pricing.html" class="hover:text-indigo-600 transition no-underline">Student Passes &amp; Pricing</a></li>
              <li><a href="/jee-neet" class="hover:text-indigo-600 transition no-underline">JEE Main &amp; NEET UG Mock Series</a></li>
              <li><a href="/defence" class="hover:text-indigo-600 transition no-underline">Defence (NDA, CDS, AFCAT) Prep</a></li>
            </ul>
          </div>

          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">Exam Simulator Engine</h4>
            <p class="text-xs text-slate-500 leading-relaxed mb-3 font-medium">
              Mock tests prepared according to publicly available syllabi and marking schemes.
            </p>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-[11px] text-emerald-700 font-bold">
              <span>🇮🇳 Standardized Test Simulation</span>
            </div>
          </div>
        </div>

        <!-- POLICY DISCLAIMER -->
        <div class="py-4 border-b border-slate-100 text-[11px] text-slate-400 leading-relaxed">
          <p><strong>Disclaimer:</strong> ExamMokk is an independent educational technology and test-preparation platform. It is not affiliated with, endorsed by, or associated with any government body, ministry, or official testing agency (including UPSC, SSC, NTA, IBPS, or Indian Railways). All mock tests and study materials are developed solely for candidate practice and self-assessment.</p>
        </div>

        <!-- FOOTER BOTTOM LINKS (About Us Here) -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <div>&copy; 2026 ExamMokk AI India. All Rights Reserved.</div>
          <div class="flex gap-6">
            <a href="/about-us" class="hover:text-slate-900 transition no-underline">About Us</a>
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
