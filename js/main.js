let nameInput = document.getElementById("name");
let playButton = document.getElementById("playGameButton");
const dark = document.getElementById('switch');
const body = document.body;
playButton.addEventListener("click", function (event) {
    event.preventDefault();
    let playerName = nameInput.value.trim();
    if (playerName !== "") { //Falta introducir la selección del nivel!
        localStorage.setItem("userName", playerName);
        window.location.href = "../pages/colors.html";
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
});

dark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Guardo el nivel del usuario
const levelEasyButton = document.getElementById('levelEasy');
const levelMediumButton = document.getElementById('levelMedium');
const levelAdvancedButton = document.getElementById('levelAdvanced');

levelEasyButton.addEventListener('click', function () {
    localStorage.setItem('selectedLevel', 'easy');
});

levelMediumButton.addEventListener('click', function () {
    localStorage.setItem('selectedLevel', 'medium');
});

levelAdvancedButton.addEventListener('click', function () {
    localStorage.setItem('selectedLevel', 'advanced');
});
