let nameInput = document.getElementById("name");
let playButton = document.querySelector(".button-play");

playButton.addEventListener("click", function (event) {
    event.preventDefault();
    let playerName = nameInput.value.trim();
    if (playerName !== "") {
        localStorage.setItem("userName", playerName);
        window.location.href = "pages/game.html";
    } else {
        alert("Por favor, ingresa un nombre de usuario válido.");
    }
});


//MODO OSCURO
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    // Guarda el estado del modo oscuro en el almacenamiento local
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Verifica si el modo oscuro está habilitado en el almacenamiento local al cargar la página
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

