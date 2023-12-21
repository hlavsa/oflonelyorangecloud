const app = document.getElementById('app');
const body = document.body;
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');

// Check the user's preference for dark mode
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set initial mode based on user preference
if (prefersDarkMode) {
    body.classList.add('dark-mode');
    modeIcon.innerText = 'Přepnout do ☀️';
}

// Toggle dark mode
modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    modeIcon.innerText = isDarkMode ? 'Přepnout do ☀️' : 'Přepnout do 🌙';
});
