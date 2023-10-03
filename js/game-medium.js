let userName = localStorage.getItem("userName");
const showMessage = (userName) => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;

    // let scoreMessage = document.getElementById("scoreMessage");
    // scoreMessage.textContent = `${userName} [numero] try left!`; ++++PENDIENTE++++ AÑADIR NÚMERO D EINTENTOS. ¿CÓMO??
}
showMessage(userName);

//DARK MODE CON LOCALSTORAGE
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

// Verifica si el modo oscuro está habilitado en el almacenamiento local al cargar la página
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

//colores que puede seleccionar el user
const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
// const pink = document.getElementById('pink');
// const purple = document.getElementById('purple');
// const orange = document.getElementById('orange');

const slotWin = document.querySelectorAll('.slot-win');

const firstShotTokens = document.getElementById('firstShot');
const secondShotTokens = document.getElementById('secondShot');
const thirdShotTokens = document.getElementById('thirdShot');
const fourthShotTokens = document.getElementById('fourthShot');
const fifthShotTokens = document.getElementById('fifthShot');
const possibleColors = ['green', 'red', 'blue']
const removeButton = document.querySelector('.button-remove'); //++++PENDIENTE++++
const checkButton = document.querySelector('.button-check');

function generateRandomCombination() {
    const randomCombination = [];
    for (let i = 0; i < 3; i++) {
        if (possibleColors.length === 0) {
            break;
        }
        const randomIndex = Math.floor(Math.random() * possibleColors.length);
        const randomColor = possibleColors.splice(randomIndex, 1)[0];
        randomCombination.push(randomColor);
    }
    return randomCombination;
}

const arrayWinner = generateRandomCombination();
console.log(arrayWinner);

//recorre el array y le asigna el color a la fila ganadora que debe estar oculta -> ++++++++z-index?????? PENDIENTE++++++++
for (let i = 0; i < arrayWinner.length; i++) {
    const color = arrayWinner[i];
    const slotWinElement = slotWin[i];
    slotWinElement.style.backgroundColor = color;
}

//eventos
green.addEventListener('click', () => {
    changeTokenColor('rgb(136, 251, 82)');
});


red.addEventListener('click', () => {
    changeTokenColor('rgb(251, 82, 82)');
});

blue.addEventListener('click', () => {
    changeTokenColor('rgb(75, 151, 243)');
});

// pink.addEventListener('click', () => {
//     changeTokenColor(' rgb(234, 108, 203)');
// });

// orange.addEventListener('click', () => {
//     changeTokenColor('rgb(251, 152, 82)');
// });
// yellow.addEventListener('click', () => {
//     changeTokenColor('rgb(220, 241, 124)');
// });

checkButton.addEventListener('click', () => {
    checkUserCombination();
});

// Función: Recorrer la primera fila para buscar el primer slot disponible para cambiar el color!
// El parámetro color se lo pasamos al realizar clic en los colores.
function changeTokenColor(color) {
    const firstAvailableSlot = firstShotTokens.querySelector('.slot-player:not(.selected)');

    if (firstAvailableSlot) {
        firstAvailableSlot.style.backgroundColor = color;
        firstAvailableSlot.classList.add('selected');
    }
    // Debe salir null si no consigue asignar color.
    console.log(firstAvailableSlot);
}


function checkUserCombination() {
    const userTokens = firstShotTokens.querySelectorAll('.slot-player.selected');
    const userColorsSelection = Array.from(userTokens).map(token => token.style.backgroundColor);

    for (let i = 0; i < arrayWinner.length; i++) {
        const winnerColor = arrayWinner[i];
        const userColor = userColorsSelection[i];
        const tokenCheck = document.getElementById('firstCheck').querySelector('.slot-check.check:nth-child(' + (i + 1) + ')');

        if (userColor === winnerColor) {
            tokenCheck.style.backgroundColor = 'black';
        } else if (userColorsSelection.includes(winnerColor)) {
            tokenCheck.style.backgroundColor = 'pink';
        }
    }

    if (userColorsSelection.join('') === arrayWinner.join('')) {
        alert('¡Has ganado!');
    }
}