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

// Load saved theme on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem("siteTheme") || "";
  applyTheme(saved);
  if (themeSelect) themeSelect.value = saved;

  // ensure mobile nav links close menu on click
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        if (window.innerWidth < 861) mainNav.style.display = 'none';
      });
    });
  }
});
