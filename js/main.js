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


let nameInput = document.getElementById("name");
let playButton = document.querySelector(".button-play");
//Falta introducir la selección del nivel y los colores!!! ++++PENDIENTE++++
playButton.addEventListener("click", event => {
    event.preventDefault();
    let playerName = nameInput.value.trim();
    if (playerName !== "") { 
        localStorage.setItem("userName", playerName);
        window.location.href = "pages/select-colors.html";
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
});
// LOCAL STORAGE: Recupero la info del nombre
let userName = localStorage.getItem("userName");

const showMessage = (userName) => {
    let colorsMessage = document.getElementById("colorsMessage");
    colorsMessage.textContent = `Welcome ${userName}!`;
}

showMessage(userName);
