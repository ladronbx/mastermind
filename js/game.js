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


//Huecos donde van los tokens ganadores
const slotWin = document.querySelectorAll('.slot-win');

//Fila donde irán los tokens seleccionados por el user
const firstShotTokens = document.getElementById('firstShot');
const removeButton = document.querySelector('.button-remove'); //++++PENDIENTE++++
const checkButton = document.querySelector('.button-check');

//función que genera colores randome
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
const winningCombination = [generateRandomCombination(userColorOptions, 4)];
console.log(winningCombination);

// // //recorre el array y le asigna el color a la fila ganadora que debe estar oculta -> ++++++++z-index?????? PENDIENTE++++++++
// for (let i = 0; i < winningCombination.length; i++) {
//     const color = winningCombination[i];
//     const slotWinElement = slotWin[i];
//     slotWinElement.style.backgroundColor = color;
// }

