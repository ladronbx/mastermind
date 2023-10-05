let userName = localStorage.getItem("userName");
console.log("userName:", userName);
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
console.log("localStorage 'dark-mode':", localStorage.getItem('dark-mode'));

const userColorOptions = JSON.parse(localStorage.getItem("userColorOptions"));
console.log("userColorOptions:", userColorOptions);
const winningCombination = generateRandomCombination(userColorOptions, 4);
console.log("winningCombination:", winningCombination);

const slotWin = document.querySelectorAll('.slot-win');
const slotSelection = document.querySelectorAll('.slot-selection');
const slotPlayer = document.querySelectorAll('.slot-player');
// const slotCheck = document.querySelectorAll('.slot-check');
const userColorSelectionContainer1 = document.getElementById('userColorSelectionContainer1');
const userColorSelectionContainer2 = document.getElementById('userColorSelectionContainer2');
const userColorSelectionContainer3 = document.getElementById('userColorSelectionContainer3');
const userColorSelectionContainer4 = document.getElementById('userColorSelectionContainer4');

const firstShotTokens = document.getElementById('firstShot');
const secondShotTokens = document.getElementById('secondShot');
const thirdShotTokens = document.getElementById('thirdShot');
const fourtShotTokens = document.getElementById('fourthShot');
const fifthShotTokens = document.getElementById('fifthShot');

const firstCheck = document.getElementById('firstCheck');
const secondCheck = document.getElementById('secondCheck');
const thirdCheck = document.getElementById('thirdCheck');
const fourthCheck = document.getElementById('fourthCheck');
const fifthCheck = document.getElementById('fifthCheck');

const firstShot = [];
const secondShot = [];
const thirdShot = [];
const fourthShot = [];
const fifthShot = [];

const removeButton = document.querySelector('.button-remove');
const checkButton = document.querySelector('.button-check');

//colores para que pueda seleccionar el usuario
for (let i = 0; i < userColorOptions.length; i++) {
    const color = userColorOptions[i];
    const slotSelectionElement = slotSelection[i];
    slotSelectionElement.style.backgroundColor = color;
}

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
};
//combinación ganadora random se colorea
for (let i = 0; i < winningCombination.length; i++) {
    const color = winningCombination[i];
    const slotWinElement = slotWin[i];
    slotWinElement.style.backgroundColor = color;
}
console.log("Esta es la combinación ganadora: " + winningCombination);

// Función para poder reutilizar los contenedores
function configureEventListeners(row, array, checkRow) {
    userColorOptions.forEach((color, index) => {
        row.addEventListener('click', () => {
            changeTokenColor(row, color, array, index);
        });
    });

    checkButton.addEventListener('click', () => {
        checkUserCombination(array, checkRow);
    });
}

configureEventListeners(firstShotTokens, firstShot, firstCheck);

let intentos = 5;
console.log("intentos:", intentos);

function checkUserCombination(array, rowCheck) {
    if (intentos >= 0 && intentos < 6) {
        if (array.length === winningCombination.length) {
            for (let i = 0; i < array.length; i++) {
                const userColor = array[i];
                const winnerColor = winningCombination[i];
                const tokenCheck = rowCheck.querySelector('.slot-check.check:nth-child(' + (i + 1) + ')');

                if (userColor === winnerColor) {
                    tokenCheck.style.backgroundColor = 'black';
                } else if (winningCombination.includes(userColor)) {
                    tokenCheck.style.backgroundColor = 'blue';
                }
            }

            if (JSON.stringify(winningCombination) === JSON.stringify(array)) {
                alert('¡Has ganado!');
                window.location.href = 'winner.html';
            } else {
                alert('Intenta de nuevo.');
                intentos--;
                console.log("intentos:", intentos);
                // Configuración de eventos de clic para el siguiente intento para que así pase al siguiente....
                if (intentos > 0) {
                    configureEventListeners(getNextRowTokens(), getNextRowArray(), getNextRowCheck());
                } else {
                    alert('¡Has perdido!');
                    window.location.href = 'loser.html';
                }
            }
        } else {
            alert('¡Has perdido!');
            window.location.href = 'loser.html';
        }
    }
}

function getNextRowTokens() {
    switch (intentos) {
        case 4:
            return secondShotTokens;
        case 3:
            return thirdShotTokens;
        case 2:
            return fourtShotTokens;
        case 1:
            return fifthShotTokens;
        default:
            return null;
    }
}

function getNextRowArray() {
    switch (intentos) {
        case 4:
            return secondShot;
        case 3:
            return thirdShot;
        case 2:
            return fourthShot;
        case 1:
            return fifthShot;
        default:
            return null;
    }
}

function getNextRowCheck() {
    switch (intentos) {
        case 4:
            return secondCheck;
        case 3:
            return thirdCheck;
        case 2:
            return fourthCheck;
        case 1:
            return fifthCheck;
        default:
            return null;
    }
}
