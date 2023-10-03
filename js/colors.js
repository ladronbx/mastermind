// let nameInput = document.getElementById("name");
// let playButton = document.querySelector(".button-play");
// //Falta introducir la selección del nivel y los colores!!! ++++PENDIENTE++++
// playButton.addEventListener("click", event => {
//     event.preventDefault();
//     let playerName = nameInput.value.trim();
//     if (playerName !== "") { 
//         localStorage.setItem("userName", playerName);
//         window.location.href = "pages/select-colors.html";
//     } else {
//         alert("Por favor, ingresa un nombre de usuario válido.");
//     }
// });
// // LOCAL STORAGE: Recupero la info del nombre
// let userName = localStorage.getItem("userName");

// const showMessage = (userName) => {
//     let colorsMessage = document.getElementById("colorsMessage");
//     colorsMessage.textContent = `Welcome ${userName}!`;
// }

// showMessage(userName);


// //DARK MODE CON LOCALSTORAGE
// const dark = document.getElementById('switch');
// const body = document.body;
// dark.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     if (body.classList.contains('dark-mode')) {
//         localStorage.setItem('dark-mode', 'enabled');
//     } else {
//         localStorage.setItem('dark-mode', 'disabled');
//     }
// });

// // Verifica si el modo oscuro está habilitado en el almacenamiento local al cargar la página
// if (localStorage.getItem('dark-mode') === 'enabled') {
//     body.classList.add('dark-mode');
// }




//primero un queryselector all para llamar a todos los colores... y luego
//un for each para saber a cual estamod llamando porque tendrán una id única. 
const colorPickers = document.querySelectorAll('.color-picker');
const colorCircles = document.querySelectorAll('.color-circle');
const playButton = document.getElementById('play-game-button');

let selectedColors = []; // Aquí se almacenarán los colores seleccionados

colorPickers.forEach((picker, index) => {
  picker.addEventListener('input', (event) => {
    const selectedColor = event.target.value;
    colorCircles[index].style.backgroundColor = selectedColor;
    selectedColors[index] = selectedColor; // Guardar el color seleccionado en el arreglo
  });
});

playButton.addEventListener('click', (event) => {
  event.preventDefault();
  let playerName = nameInput.value.trim();
  if (playerName !== "") {
    localStorage.setItem("userName", playerName);
    localStorage.setItem("selectedColors", JSON.stringify(selectedColors)); // Guardar los colores en el almacenamiento local
    window.location.href = "../pages/game.html"; // Redirigir al juego
  } else {
    alert("Por favor, ingresa un nombre de usuario válido.");
  }
});

