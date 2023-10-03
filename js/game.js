let userName = localStorage.getItem("userName");
const showMessage = (userName) => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;

    // let scoreMessage = document.getElementById("scoreMessage");
    // scoreMessage.textContent = `${userName} [numero] try left!`; ++++PENDIENTE++++ AÑADIR NÚMERO D EINTENTOS. ¿CÓMO??
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
// Contador de intentos
let currentAttempt = 0;

const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
const winningCombination = generateRandomCombination(selectedColors, 4);
const userSelection = document.getElementById('userSelection');
const userSelectionElements = document.querySelectorAll('.slot-selection');

function generateRandomCombination(colors, count){
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

function assignColorsToSelection(colors) {
    if (colors.length !== userSelectionElements.length) {
        console.error("La cantidad de colores no coincide con la cantidad de elementos .slot-selection.");
        return;
    }

    userSelectionElements.forEach((element, index) => {
        element.style.backgroundColor = colors[index];
    });
}

assignColorsToSelection(selectedColors);


console.log("Esta es la combinación ganadora " + winningCombination);
console.log("Esta es la combinación que tiene el usuario para jugar" + selectedColors);

