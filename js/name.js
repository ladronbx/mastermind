const nameInput = document.getElementById("name");
const playButton = document.getElementById("playGameButton");
const dark = document.getElementById('switch');
const body = document.body;
const selectedLevelText = document.getElementById('selectedLevelText');
const storedName = localStorage.getItem("userName");
const storedLevel = localStorage.getItem("selectedLevel");

const colorPickers = document.querySelectorAll('.color-picker');
const playGameButton = document.getElementById('play-game-button');
const selectedColors = [];

function restoreUserData() {
    if (storedName) {
        nameInput.value = storedName;
    }

    if (storedLevel) {
        selectedLevelText.textContent = `Selected Level: ${getLevelText(storedLevel)}`;
    }
}

function saveUserData() {
    const playerName = nameInput.value.trim();
    const selectedLevel = localStorage.getItem("selectedLevel");

    if (playerName === "") {
        alert("Please enter a valid username.");
    } else if (!selectedLevel) {
        alert("Please select a level.");
    } else {
        localStorage.setItem("userName", playerName);
        window.location.href = "../pages/colors.html";
    }
}

function setupLevelButtons() {
    const levelButtons = document.querySelectorAll('.level');

    levelButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLevel = button.getAttribute('data-level');
            localStorage.setItem('selectedLevel', selectedLevel);
            selectedLevelText.textContent = `Selected Level: ${getLevelText(selectedLevel)}`;
        });
    });
}

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', darkModeEnabled ? 'enabled' : 'disabled');
}

function getLevelText(level) {
    switch (level) {
        case 'easy':
            return 'BEGINNER ⋙ You will play with 4 possible colors and have 5 attempts.';
        case 'medium':
            return 'INTERMEDIATE ⋙ You will choose from 5 colors and have 5 attempts.';
        case 'advanced':
            return 'ADVANCED ⋙ You will combine 6 colors and have 5 attempts.';
        default:
            return '';
    }
}

restoreUserData();

playButton.addEventListener("click", function (event) {
    event.preventDefault();
    saveUserData();
});

setupLevelButtons();

dark.addEventListener('click', () => {
    toggleDarkMode();
});

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

const storedColors = JSON.parse(localStorage.getItem('selectedColors'));
if (storedColors) {
    for (let i = 0; i < colorPickers.length; i++) {
        colorPickers[i].value = storedColors[i];
        selectedColors.push(storedColors[i]);
    }
}

colorPickers.forEach((colorPicker, index) => {
    colorPicker.addEventListener('input', function () {
        selectedColors[index] = colorPicker.value;
    });
});

playGameButton.addEventListener('click', function () {
    if (selectedColors.length === 3) {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
        window.location.href = "../pages/game.html";
    } else {
        alert("Please select exactly three colors.");
    }
});
