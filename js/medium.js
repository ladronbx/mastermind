let possibleColors = ['green', 'red', 'blue'];
const tokenWinnerElements = document.querySelectorAll('.token-win');
const firstShotTokens = document.getElementById('firstShot');
const green = document.getElementById('green');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const removeButton = document.querySelector('.button-remove');
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

for (let i = 0; i < arrayWinner.length; i++) {
    const color = arrayWinner[i];
    const tokenElement = tokenWinnerElements[i];
    tokenElement.style.backgroundColor = color;
}

green.addEventListener('click', () => {
    changeTokenColor('green');
});

red.addEventListener('click', () => {
    changeTokenColor('red');
});

blue.addEventListener('click', () => {
    changeTokenColor('blue');
});

function changeTokenColor(color) {
    const firstAvailableToken = firstShotTokens.querySelector('.token-player:not(.selected)');

    if (firstAvailableToken) {
        firstAvailableToken.style.backgroundColor = color;
        firstAvailableToken.classList.add('selected');
    }
}

removeButton.addEventListener('click', () => {
    removeLastSelection();
});

checkButton.addEventListener('click', () => {
    checkUserCombination();
});



function checkUserCombination() {
    const userTokens = firstShotTokens.querySelectorAll('.token-player.selected');
    const userColors = Array.from(userTokens).map(token => token.style.backgroundColor);

    for (let i = 0; i < arrayWinner.length; i++) {
        const winnerColor = arrayWinner[i];
        const userColor = userColors[i];
        const tokenCheck = document.getElementById('firstCheck').querySelector('.token-check:nth-child(' + (i + 1) + ')');

        if (userColor === winnerColor) {
            tokenCheck.style.backgroundColor = 'black';
        } else if (userColors.includes(winnerColor)) {
            tokenCheck.style.backgroundColor = 'pink';
        }
    }

    if (userColors.join('') === arrayWinner.join('')) {
        alert('¡Has ganado!');
    }
}


function removeLastSelection() {
    const selectedTokens = firstShotTokens.querySelectorAll('.token-player.selected');
    const lastSelectedToken = selectedTokens[selectedTokens.length - 1];

    if (lastSelectedToken) {
        lastSelectedToken.style.backgroundColor = '';
        lastSelectedToken.classList.remove('selected');
    }
}



// EL nuevo qu eno funciona.
    // const removeLast = () => {
    //     if (currentShot.length > 0) {
    //         const lastElement = currentShot.pop();
    //         lastElement.style.backgroundColor = '';
    //         lastElement.classList.remove('selected');
    //     } else {
    //         console.log("No hay elementos para eliminar.");
    //     }
    // };