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
