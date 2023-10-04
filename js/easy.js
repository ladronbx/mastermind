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

const firstShot = []
// Función para cambiar el color de un token en una fila específica
function changeTokenColor(row, color) {
    const firstAvailableSlot = row.querySelector('.slot-player:not(.selected)');
    if (firstAvailableSlot) {
        firstAvailableSlot.style.backgroundColor = color;
        firstAvailableSlot.classList.add('selected');
        firstShot.push(color);
    } else {
        console.log("Todos los slots de la fila están seleccionados");
    };
};

const userColorSelectionContainer1 = document.getElementById('userColorSelectionContainer1');
const userColorSelectionContainer2 = document.getElementById('userColorSelectionContainer2');
const userColorSelectionContainer3 = document.getElementById('userColorSelectionContainer3');
const userColorSelectionContainer4 = document.getElementById('userColorSelectionContainer4');


const firstShotTokens = document.getElementById('firstShot');
userColorSelectionContainer1.addEventListener('click', () => { changeTokenColor(firstShotTokens, userColorOptions[0]) });
userColorSelectionContainer2.addEventListener('click', () => { changeTokenColor(firstShotTokens, userColorOptions[1]) });
userColorSelectionContainer3.addEventListener('click', () => { changeTokenColor(firstShotTokens, userColorOptions[2]) });
userColorSelectionContainer4.addEventListener('click', () => { changeTokenColor(firstShotTokens, userColorOptions[3]) });

const secondShotTokens = document.getElementById('secondShot');
userColorSelectionContainer1.addEventListener('click', () => { changeTokenColor(secondShotTokens, userColorOptions[0]) });
userColorSelectionContainer2.addEventListener('click', () => { changeTokenColor(secondShotTokens, userColorOptions[1]) });
userColorSelectionContainer3.addEventListener('click', () => { changeTokenColor(secondShotTokens, userColorOptions[2]) });
userColorSelectionContainer4.addEventListener('click', () => { changeTokenColor(secondShotTokens, userColorOptions[3]) });

const thirdShotTokens = document.getElementById('thirdShot');
userColorSelectionContainer1.addEventListener('click', () => { changeTokenColor(thirdShotTokens, userColorOptions[0]) });
userColorSelectionContainer2.addEventListener('click', () => { changeTokenColor(thirdShotTokens, userColorOptions[1]) });
userColorSelectionContainer3.addEventListener('click', () => { changeTokenColor(thirdShotTokens, userColorOptions[2]) });
userColorSelectionContainer4.addEventListener('click', () => { changeTokenColor(thirdShotTokens, userColorOptions[3]) });

const fourtShotTokens = document.getElementById('fourthShot');
userColorSelectionContainer1.addEventListener('click', () => { changeTokenColor(fourtShotTokens, userColorOptions[0]) });
userColorSelectionContainer2.addEventListener('click', () => { changeTokenColor(fourtShotTokens, userColorOptions[1]) });
userColorSelectionContainer3.addEventListener('click', () => { changeTokenColor(fourtShotTokens, userColorOptions[2]) });
userColorSelectionContainer4.addEventListener('click', () => { changeTokenColor(fourtShotTokens, userColorOptions[3]) });

const fifthShotTokens = document.getElementById('fifthShot');
userColorSelectionContainer1.addEventListener('click', () => { changeTokenColor(fifthShotTokens, userColorOptions[0]) });
userColorSelectionContainer2.addEventListener('click', () => { changeTokenColor(fifthShotTokens, userColorOptions[1]) });
userColorSelectionContainer3.addEventListener('click', () => { changeTokenColor(fifthShotTokens, userColorOptions[2]) });
userColorSelectionContainer4.addEventListener('click', () => { changeTokenColor(fifthShotTokens, userColorOptions[3]) });
