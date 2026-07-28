/**
 * Injects the common bottom navigation bar into the body.
 * @param {string} activeTab - The ID of the tab to highlight ('home', 'projects', 'ai', 'profile')
 */
function renderNav(activeTab) {
  const navContainer = document.createElement("nav");
  navContainer.className = "universal-nav";

  const tabs = [
    { id: "home", label: "Home", icon: "home", url: "/" },
    {
      id: "projects",
      label: "Projects",
      icon: "layout",
      url: "/projects.html",
    },
    { id: "ai", label: "AI", icon: "sparkles", url: "/ai.html" },
    { id: "profile", label: "Profile", icon: "user", url: "/profile.html" },
  ];

  const getActiveState = (id) =>
    id === activeTab ? "text-indigo-600" : "text-slate-400";

  navContainer.innerHTML = `
    <a href="${tabs[0].url}" class="flex flex-col items-center flex-1 ${getActiveState("home")}">
      <i data-lucide="${tabs[0].icon}" class="w-5 h-5"></i>
      <span class="text-[10px] font-bold uppercase mt-1">${tabs[0].label}</span>
    </a>
    <a href="${tabs[1].url}" class="flex flex-col items-center flex-1 ${getActiveState("projects")}">
      <i data-lucide="${tabs[1].icon}" class="w-5 h-5"></i>
      <span class="text-[10px] font-bold uppercase mt-1">${tabs[1].label}</span>
    </a>

    <div onclick="handlePlusClick()" class="nav-center-btn">
      <i data-lucide="plus" class="w-6 h-6"></i>
    </div>

    <a href="${tabs[2].url}" class="flex flex-col items-center flex-1 ${getActiveState("ai")}">
      <i data-lucide="${tabs[2].icon}" class="w-5 h-5"></i>
      <span class="text-[10px] font-bold uppercase mt-1">${tabs[2].label}</span>
    </a>
    <a href="${tabs[3].url}" class="flex flex-col items-center flex-1 ${getActiveState("profile")}">
      <i data-lucide="${tabs[3].icon}" class="w-5 h-5"></i>
      <span class="text-[10px] font-bold uppercase mt-1">${tabs[3].label}</span>
    </a>
  `;

  document.body.appendChild(navContainer);
  if (window.lucide) window.lucide.createIcons();
}

/**
 * Global handler for the central navigation button.
 * Handles both the "Create" flow (Home) and "Templates" flow (Editor).
 */
window.handlePlusClick = function () {
  // 1. Check if we are in the Editor (if openModal function exists)
  if (typeof openModal === "function") {
    // This triggers the Template modal inside the editor
    openModal("templates");
    return;
  }

  // 2. Check if we are on the Home Page (if toggleSheet function exists)
  if (typeof toggleSheet === "function") {
    // Opens the "Create New" bottom sheet on the home page
    toggleSheet(true);
  }
  // 3. Fallback: If on another page (Profile/Projects), redirect to Home and open the sheet
  else {
    window.location.href = "/?open=true";
  }
};

/**
 * Handle URL parameters on page load.
 * Add this to your Home page script to catch the redirect above.
 */
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get("open") === "true" && typeof toggleSheet === "function") {
    // Delay slightly to ensure animations/DOM are ready
    setTimeout(() => toggleSheet(true), 300);

    // Clean the URL so it doesn't reopen on refresh
    window.history.replaceState({}, document.title, window.location.pathname);
  }
});
