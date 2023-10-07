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

const userColorOptions = JSON.parse(localStorage.getItem("userColorOptions"));
const winningCombination = generateRandomCombination(userColorOptions, 4);

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

let currentShotToken = firstShotTokens;

const firstCheck = document.getElementById('firstCheck');
const secondCheck = document.getElementById('secondCheck');
const thirdCheck = document.getElementById('thirdCheck');
const fourthCheck = document.getElementById('fourthCheck');
const fifthCheck = document.getElementById('fifthCheck');

let currentCheck = firstCheck;

let currentShot = [];

const removeButton = document.querySelector('.button-remove');
const checkButton = document.querySelector('.button-check');

//colores para que pueda seleccionar el user
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
//combinación ganadora random
for (let i = 0; i < winningCombination.length; i++) {
    const color = winningCombination[i];
    const slotWinElement = slotWin[i];
    slotWinElement.style.backgroundColor = color;
}
console.log(winningCombination)
console.log("Esta es la combinación ganadora: " + winningCombination);

function changeTokenColor(row, color) {
    const firstAvailableSlot = row.querySelector('.slot-player:not(.selected)');
    if (firstAvailableSlot) {
        firstAvailableSlot.style.backgroundColor = color;
        firstAvailableSlot.classList.add('selected');

    } else {
        console.log("Todos los slots de la fila están seleccionados");
    }
};

userColorSelectionContainer1.addEventListener('click', () => {
    changeTokenColor(currentShotToken, userColorOptions[0]);
    currentShot.push(userColorOptions[0]);
});
userColorSelectionContainer2.addEventListener('click', () => {
    changeTokenColor(currentShotToken, userColorOptions[1]);
    currentShot.push(userColorOptions[1]);
});
userColorSelectionContainer3.addEventListener('click', () => {
    changeTokenColor(currentShotToken, userColorOptions[2])
    currentShot.push(userColorOptions[2]);
});
userColorSelectionContainer4.addEventListener('click', () => {
    changeTokenColor(currentShotToken, userColorOptions[3])
    currentShot.push(userColorOptions[3]);
});





let intentos = 0;
console.log(intentos);
function checkUserCombination(array, rowCheck) {
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
            window.location.href = 'winner.html';
        } else {
            currentShot = []
            switch (intentos) {
                case 0:
                    currentShotToken = secondShotTokens;
                    currentCheck = secondCheck;
                    intentos++;
                    break;
                case 1:
                    currentShotToken = thirdShotTokens;
                    currentCheck = thirdCheck;
                    intentos++;
                    break;
                case 2:
                    currentShotToken = fourtShotTokens;
                    currentCheck = fourthCheck;
                    intentos++;
                    break;
                case 3:
                    currentShotToken = fifthShotTokens;
                    currentCheck = fifthCheck;
                    intentos++;
                    break;
                default:
                    alert('¡Has perdido!');
                    window.location.href = 'loser.html';
                    break;
            }
        }
    } else {
        alert('Se debe seleccionar al menos 4 colores');
    }
}


checkButton.addEventListener('click', () => {
    checkUserCombination(currentShot, currentCheck);
});