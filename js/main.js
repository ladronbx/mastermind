let nameInput = document.getElementById("name");
let playButton = document.querySelector(".button-play");

playButton.addEventListener("click", function (event) {
    event.preventDefault();
    let playerName = nameInput.value.trim();
    if (playerName !== "") { //Falta introducir la selección del nivel!
        localStorage.setItem("userName", playerName);
        window.location.href = "pages/game.html";
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
});

const dark = document.getElementById('switch');
const body = document.body;
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