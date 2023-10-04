let userName = localStorage.getItem("userName");
const showMessage = (userName) => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;
}
showMessage(userName);

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
//Fila donde irán los tokens seleccionados por el user
const firstShotTokens = document.getElementById('firstShot');
const removeButton = document.querySelector('.button-remove'); //++++PENDIENTE++++
const checkButton = document.querySelector('.button-check');

const userColorOptions = JSON.parse(localStorage.getItem("userColorOptions"));
const slotWin = document.querySelectorAll('.slot-win');
const slotSelection = document.querySelectorAll('.slot-selection');

function generateRandomCombination(colors, count) {
    const combination = [];
    while (combination.length < count) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        const randomColor = colors[randomIndex];
        if (!combination.includes(randomColor)) {
            combination.push(randomColor);
        }
    }
    return combination;
}

// Ahora winningCombination es un array de colores
const winningCombination = generateRandomCombination(userColorOptions, 4);

// Asigna colores a los huecos de la combinación ganadora
for (let i = 0; i < winningCombination.length; i++) {
    const color = winningCombination[i];
    const slotWinElement = slotWin[i];
    slotWinElement.style.backgroundColor = color;
}
console.log(winningCombination)
console.log("Esta es la combinación ganadora: " + winningCombination);

//Pintar background de los .slot-selection con la combinación seleccionada por el user previamente guardada en localstorage
for (let i = 0; i < userColorOptions.length; i++) {
    const color = userColorOptions[i];
    const slotSelectionElement = slotSelection[i];
    slotSelectionElement.style.backgroundColor = color;
}