// MOBILE NAV
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("mainNav");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    mainNav.style.display = mainNav.style.display === "flex" ? "none" : "flex";
  });
}

// THEME SWITCHER
const themeSelect = document.getElementById("themeSelect");

function applyTheme(theme){
  document.documentElement.classList.remove("theme-roblox", "theme-fortnite");
  if (theme) document.documentElement.classList.add(theme);
  localStorage.setItem("siteTheme", theme);
}

// Load saved theme
const saved = localStorage.getItem("siteTheme") || "";
applyTheme(saved);
if (themeSelect) themeSelect.value = saved;

// Change theme on select
themeSelect.addEventListener("change", e => applyTheme(e.target.value));
