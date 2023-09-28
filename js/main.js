const toggleButton = document.getElementById('toggle-btn');
const toggleContent = document.getElementById('toggle-content');

toggleButton.addEventListener('click', () => {
    toggleContent.classList.toggle('hidden');
    toggleContent.classList.toggle('visible');
    toggleButton.classList.toggle('active');
});
