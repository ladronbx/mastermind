const dark = document.getElementById('switch');
const body = document.body;

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');
}

dark.addEventListener('click', () => {
    toggleDarkMode();
});

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}