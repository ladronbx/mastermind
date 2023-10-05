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

const firstShot = [];
const secondShot = [];
const thirdShot = [];
const fourthShot = [];
const fifthShot = [];

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

//El user pinta la primera fila:
userColorSelectionContainer1.addEventListener('click', () => { 
    changeTokenColor(firstShotTokens, userColorOptions[0]);
    firstShot.push(userColorOptions[0]);
    console.log(firstShot)
});
userColorSelectionContainer2.addEventListener('click', () => { 
    changeTokenColor(firstShotTokens, userColorOptions[1]);
    firstShot.push(userColorOptions[1]);
    console.log(firstShot)
});
userColorSelectionContainer3.addEventListener('click', () => { 
    changeTokenColor(firstShotTokens, userColorOptions[2])
    firstShot.push(userColorOptions[2]);
    console.log(firstShot)
});
userColorSelectionContainer4.addEventListener('click', () => { 
    changeTokenColor(firstShotTokens, userColorOptions[3])
    firstShot.push(userColorOptions[3]);
    console.log(firstShot)
});

function checkUserCombination(array) {
    if (array.length === winningCombination.length) {

        for (let i = 0; i < array.length; i++) {
            const userColor = array[i];
            const winnerColor = winningCombination[i];
            const tokenCheck = document.getElementById('firstCheck').querySelector('.slot-check.check:nth-child(' + (i + 1) + ')');

            if (userColor === winnerColor) {
                tokenCheck.style.backgroundColor = 'black';
            } else if (winningCombination.includes(userColor)) {
                tokenCheck.style.backgroundColor = 'blue';
            };
        };

        if (JSON.stringify(winningCombination) === JSON.stringify(array)) {
            alert('¡Has ganado!');
            // Redirigir a la pantalla ganadora
        } else {
            alert('Intenta de nuevo.');
            // Se desbloqueará la siguiente fila para jugar
        }
        
    } else {
        alert('Se debe seleccionar al menos 4 colores y no repetir colores.');
    }
}


checkButton.addEventListener('click', () => {
    if(firstShot.length === 4){
        checkUserCombination(firstShot);
    }else{
        alert('Debes seleccionar al menos 4 colores.')
    }
});



// userColorSelectionContainer1.addEventListener('click', () => { 
//     changeTokenColor(secondShotTokens, userColorOptions[0]);
//     secondShot.push(userColorOptions[0]);
//     console.log(secondShot)
// });
// userColorSelectionContainer2.addEventListener('click', () => { 
//     changeTokenColor(secondShotTokens, userColorOptions[1]);
//     secondShot.push(userColorOptions[1]);
//     console.log(secondShot)
// });
// userColorSelectionContainer3.addEventListener('click', () => { 
//     changeTokenColor(secondShotTokens, userColorOptions[2])
//     secondShot.push(userColorOptions[2]);
//     console.log(secondShot)
// });
// userColorSelectionContainer4.addEventListener('click', () => { 
//     changeTokenColor(secondShotTokens, userColorOptions[3])
//     secondShot.push(userColorOptions[3]);
//     console.log(secondShot)
// });


// userColorSelectionContainer1.addEventListener('click', () => { 
//     changeTokenColor(thirdShotTokens, userColorOptions[0]);
//     thirdShot.push(userColorOptions[0]);
//     console.log(thirdShot)
// });
// userColorSelectionContainer2.addEventListener('click', () => { 
//     changeTokenColor(thirdShotTokens, userColorOptions[1]);
//     thirdShot.push(userColorOptions[1]);
//     console.log(thirdShot)
// });
// userColorSelectionContainer3.addEventListener('click', () => { 
//     changeTokenColor(thirdShotTokens, userColorOptions[2])
//     thirdShot.push(userColorOptions[2]);
//     console.log(thirdShot)
// });
// userColorSelectionContainer4.addEventListener('click', () => { 
//     changeTokenColor(thirdShotTokens, userColorOptions[3])
//     thirdShot.push(userColorOptions[3]);
//     console.log(thirdShot)
// });

// userColorSelectionContainer1.addEventListener('click', () => { 
//     changeTokenColor(fourtShotTokens, userColorOptions[0]);
//     thirdShot.push(userColorOptions[0]);
//     console.log(fourthShot)
// });
// userColorSelectionContainer2.addEventListener('click', () => { 
//     changeTokenColor(fourtShotTokens, userColorOptions[1]);
//     thirdShot.push(userColorOptions[1]);
//     console.log(fourthShot)
// });
// userColorSelectionContainer3.addEventListener('click', () => { 
//     changeTokenColor(fourtShotTokens, userColorOptions[2])
//     thirdShot.push(userColorOptions[2]);
//     console.log(fourthShot)
// });
// userColorSelectionContainer4.addEventListener('click', () => { 
//     changeTokenColor(fourtShotTokens, userColorOptions[3])
//     thirdShot.push(userColorOptions[3]);
//     console.log(fourthShot)
// });

// userColorSelectionContainer1.addEventListener('click', () => { 
//     changeTokenColor(fifthShotTokens, userColorOptions[0]);
//     thirdShot.push(userColorOptions[0]);
//     console.log(fifthShot)
// });
// userColorSelectionContainer2.addEventListener('click', () => { 
//     changeTokenColor(fifthShotTokens, userColorOptions[1]);
//     thirdShot.push(userColorOptions[1]);
//     console.log(fifthShot)
// });
// userColorSelectionContainer3.addEventListener('click', () => { 
//     changeTokenColor(fifthShotTokens, userColorOptions[2])
//     thirdShot.push(userColorOptions[2]);
//     console.log(fifthShot)
// });
// userColorSelectionContainer4.addEventListener('click', () => { 
//     changeTokenColor(fifthShotTokens, userColorOptions[3])
//     thirdShot.push(userColorOptions[3]);
//     console.log(fifthShot)
// });