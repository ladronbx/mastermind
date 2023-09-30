let userName = localStorage.getItem("userName");

if (userName) {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;

    let scoreMessage = document.getElementById("scoreMessage");
    scoreMessage.textContent = `${userName} : Your score is!`;
}


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









// Variables globales
const boardContainer = document.getElementById('game-board');
const maxAttempts = 10; // Número máximo de intentos permitidos

// Función para crear una fila de intento
function createRow() {
    const row = document.createElement('div');
    row.classList.add('row', 'tokens-row');
    
    // Agregar los espacios para las fichas de colores
    for (let i = 0; i < 3; i++) {
        const slot = document.createElement('div');
        slot.classList.add('slot-player');
        row.appendChild(slot);
    }
    
    // Agregar un botón para verificar el intento
    const checkButton = document.createElement('button');
    checkButton.textContent = 'Check';
    checkButton.classList.add('button-check');
    checkButton.addEventListener('click', () => {
        checkUserCombination(row);
    });
    row.appendChild(checkButton);
    
    return row;
}

// Función para agregar una nueva fila de intento al tablero
function addRowToBoard() {
    if (boardContainer.children.length < maxAttempts) {
        const newRow = createRow();
        boardContainer.appendChild(newRow);
    } else {
        alert('Has alcanzado el número máximo de intentos.');
    }
}

// Función para eliminar una fila del tablero
function removeRowFromBoard(row) {
    boardContainer.removeChild(row);
}

// Evento para agregar una nueva fila al hacer clic en un botón
const addButton = document.getElementById('add-button');
addButton.addEventListener('click', addRowToBoard);

// Ejemplo de función para verificar la combinación del usuario
function checkUserCombination(row) {
    // Implementa la lógica de verificación aquí
    // Por ejemplo, puedes comparar la combinación del usuario con la combinación ganadora
    // y actualizar las fichas de retroalimentación en la fila correspondiente.
    // Si el usuario adivina la combinación ganadora, muestra un mensaje de victoria.
}

// Agregar la primera fila al iniciar el juego
addRowToBoard();
