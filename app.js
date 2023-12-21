const app = document.getElementById("app");
const body = document.body;
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");

// Check the user's preference for dark mode
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

// Set initial mode based on user preference
if (prefersDarkMode) {
  body.classList.add("dark-mode");
  modeIcon.innerText = "Přepnout do ☀️";
}

// Toggle dark mode
modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDarkMode = body.classList.contains("dark-mode");
  modeIcon.innerText = isDarkMode ? "Přepnout do ☀️" : "Přepnout do 🌙";
});

// JavaScript to handle scroll event
window.addEventListener("scroll", function () {
  var hero = document.getElementById("hero");
  var scrollStart = 300;
  var fadeOutLength = 200;

  var scrollY = Math.max(window.scrollY - scrollStart, 0);
  var fadeOutEffect = 1 - scrollY / fadeOutLength;

  console.log("Scroll Y:", window.scrollY, "Fade Out Effect:", fadeOutEffect);

  hero.style.opacity = Math.max(fadeOutEffect, 0);
});
