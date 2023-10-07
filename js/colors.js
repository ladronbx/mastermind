const body = document.body;
const dark = document.getElementById('switch');
const userName = document.getElementById("userName");
const playGameButton = document.getElementById('playGameBoardButton');
const colorOptionsContainer = document.getElementById("color-options-container");
const selectedLevel = localStorage.getItem("selectedLevel");
const numberOfColorOptions = levelColorOptions[selectedLevel];
const storedName = localStorage.getItem("userName");
const userColorOptions = [];
const levelColorOptions = {
    easy: 4,
    medium: 5,
    advanced: 6
};

function checkColors() {
    const selectedCount = userColorOptions.filter(color => color !== "").length;

    if (selectedCount === numberOfColorOptions && !hasDuplicates(userColorOptions)) {
        playGameButton.removeAttribute('disabled');
    } else {
        playGameButton.setAttribute('disabled', 'true');
    }
}

function hasDuplicates(array) {
    return (new Set(array)).size !== array.length;
}

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
        userColorOptions[i] = colorPicker.value;
        checkColors();
        colorCircle.style.backgroundColor = colorPicker.value;
    });
}

if (storedName) {
    userName.textContent = `${storedName}`;
} else {
    userName.textContent = "Select your colors!";
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

playGameButton.addEventListener('click', function (event) {
    if (userColorOptions.length === numberOfColorOptions && !hasDuplicates(userColorOptions)) {
        localStorage.setItem('userColorOptions', JSON.stringify(userColorOptions));

        const selectedLevel = localStorage.getItem("selectedLevel");

        if (selectedLevel === "easy") {
            window.location.href = "easy.html";
        } else if (selectedLevel === "medium") {
            window.location.href = "medium.html";
        } else if (selectedLevel === "advanced") {
            window.location.href = "advanced.html";
        }
    } else {
        event.preventDefault();
        if (hasDuplicates(userColorOptions)) {
            alert("Please make sure you have selected unique colors.");
        } else {
            alert(`Please select all ${numberOfColorOptions} colors before starting the game.`);
        }
    }
});

checkColors();
