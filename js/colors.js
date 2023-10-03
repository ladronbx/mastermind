const body = document.body;
const dark = document.getElementById('switch');
const userName = document.getElementById("userName");
const playGameButton = document.getElementById('playGameBoardButton');
const colorOptionsContainer = document.getElementById("color-options-container");

const selectedLevel = localStorage.getItem("selectedLevel");

const levelColorOptions = {
    easy: 4,
    medium: 5,
    advanced: 6
};

const numberOfColorOptions = levelColorOptions[selectedLevel];

for (let i = 0; i < numberOfColorOptions; i++) {
    const colorPickerContainer = document.createElement("div");
    colorPickerContainer.className = "col colors-selection";

    const colorCircle = document.createElement("div");
    colorCircle.className = "color-circle";
    colorCircle.id = `color-circle-${i}`;

    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = `color-picker-${i}`;
    colorPicker.className = "color-picker";

    colorPickerContainer.appendChild(colorCircle);
    colorPickerContainer.appendChild(colorPicker);

    colorOptionsContainer.appendChild(colorPickerContainer);

    colorPicker.addEventListener('input', function () {
        selectedColors[i] = colorPicker.value;
        checkColors();
        colorCircle.style.backgroundColor = colorPicker.value;
    });
}

const storedName = localStorage.getItem("userName");

if (storedName) {
    userName.textContent = `${storedName}`;
} else {
    userName.textContent = "Selecciona tus colores!";
}

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

const selectedColors = [];

function checkColors() {
    const selectedCount = selectedColors.filter(color => color !== "").length;

    if (selectedCount === numberOfColorOptions && !hasDuplicates(selectedColors)) {
        playGameButton.removeAttribute('disabled');
    } else {
        playGameButton.setAttribute('disabled', 'true');
    }
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

playGameButton.addEventListener('click', function (event) {
    if (selectedColors.length === numberOfColorOptions && !hasDuplicates(selectedColors)) {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
    } else {
        event.preventDefault();
        if (hasDuplicates(selectedColors)) {
            alert("Please make sure you have selected unique colors.");
        } else {
            alert(`Please select all ${numberOfColorOptions} colors before starting the game.`);
        }
    }
});

checkColors();
