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

  // Use a fraction of the hero's height or viewport height to determine when the fade-out starts and its length
  var scrollStartFraction = 0.5; // e.g., fade-out starts after scrolling half of the hero's height
  var fadeOutLengthFraction = 0.3; // e.g., fade-out occurs over 30% of the hero's height

  var heroHeight = hero.offsetHeight;
  var scrollStart = heroHeight * scrollStartFraction;
  var fadeOutLength = heroHeight * fadeOutLengthFraction;

  var scrollY = Math.max(window.scrollY - scrollStart, 0);
  var fadeOutEffect = 1 - scrollY / fadeOutLength;
  hero.style.opacity = Math.max(fadeOutEffect, 0);
});
