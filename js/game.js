// let userName = localStorage.getItem("userName");

// if (userName) {
//     let welcomeMessage = document.getElementById("welcomeMessage");
//     welcomeMessage.textContent = `Good luck ${userName}!`;

//     let scoreMessage = document.getElementById("scoreMessage");
//     scoreMessage.textContent = `${userName} : Your score is!`;
// }

//colores que puede seleccionar el user
const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');

//Huecos donde van los tokens ganadores
const slotWin = document.querySelectorAll('.slot-win');

//Fila donde irán los tokens seleccionados por el user
const firstShotTokens = document.getElementById('firstShot');

// //Array vacío de la selección de tokens del usuario
// const userColorsSelection = []; NOOOO se declara dentro de la función.

//Botones
const removeButton = document.querySelector('.button-remove'); //++++PENDIENTE++++
const checkButton = document.querySelector('.button-check');

//++++++++++++ PENDIENTE : Falta hacer la combinación random!++++++++++++
const arrayWinner = ['green', 'blue', 'red'];
console.log(arrayWinner);

//recorre el array y le asigna el color a la fila ganadora que debe estar oculta -> ++++++++z-index?????? PENDIENTE++++++++
for (let i = 0; i < arrayWinner.length; i++) {
    const color = arrayWinner[i];
    const slotWinElement = slotWin[i];
    slotWinElement.style.backgroundColor = color;
}

//eventos
green.addEventListener('click', () => {
    changeTokenColor('green');
});

red.addEventListener('click', () => {
    changeTokenColor('red');
});

blue.addEventListener('click', () => {
    changeTokenColor('blue');
});



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