// Obtener elementos del DOM
const body = document.body;
const dark = document.getElementById('switch');
const userName = document.getElementById("userName");
const playGameButton = document.getElementById('playGameBoardButton');
const colorOptionsContainer = document.getElementById("color-options-container");

// Obtener el nivel seleccionado desde localStorage
const selectedLevel = localStorage.getItem("selectedLevel");

// Definir opciones de colores por nivel
const levelColorOptions = {
    easy: 4,
    medium: 5,
    advanced: 6
};

// Obtener la cantidad de opciones de colores para el nivel actual
const numberOfColorOptions = levelColorOptions[selectedLevel];

// Generar dinámicamente los selectores de colores
for (let i = 0; i < numberOfColorOptions; i++) {
    const colorPickerContainer = document.createElement("div");
    colorPickerContainer.className = "col colors-selection"; // Agregar las clases deseadas

    const colorCircle = document.createElement("div");
    colorCircle.className = "color-circle"; // Agregar la clase deseada
    colorCircle.id = `color-circle-${i}`;

    const colorPicker = document.createElement("input");
    colorPicker.type = "color";
    colorPicker.id = `color-picker-${i}`;
    colorPicker.className = "color-picker"; // Agregar la clase deseada

    colorPickerContainer.appendChild(colorCircle);
    colorPickerContainer.appendChild(colorPicker);

    colorOptionsContainer.appendChild(colorPickerContainer);
}

// Obtener el nombre del usuario almacenado en localStorage
const storedName = localStorage.getItem("userName");

// Configuración inicial del nombre de usuario
if (storedName) {
    userName.textContent = `${storedName}`;
} else {
    userName.textContent = "Selecciona tus colores!";
}

// Manejar el cambio de modo oscuro
dark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

// Aplicar el modo oscuro si está habilitado en localStorage
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Inicializar array para almacenar colores seleccionados
const selectedColors = [];

// Escuchar cambios en los selectores de colores y actualizar el array
const colorPickers = document.querySelectorAll('.color-picker');
colorPickers.forEach((colorPicker, index) => {
    colorPicker.addEventListener('input', function () {
        selectedColors[index] = colorPicker.value;
        checkColors();
    });
});

// Verificar si todos los colores han sido seleccionados
function checkColors() {
    const selectedCount = selectedColors.filter(color => color !== "").length;
    if (selectedCount === numberOfColorOptions) {
        playGameButton.removeAttribute('disabled');
    } else {
        playGameButton.setAttribute('disabled', 'true');
    }
}

// Mostrar alerta si no se han seleccionado todos los colores al hacer clic en "PLAY GAME"
playGameButton.addEventListener('click', function (event) {
    if (selectedColors.length === numberOfColorOptions) {
        localStorage.setItem('selectedColors', JSON.stringify(selectedColors));
        // Aquí redirige a la página "game.html" solo si se han seleccionado todos los colores
    } else {
        event.preventDefault(); // Evita la redirección predeterminada
        alert(`Please select all ${numberOfColorOptions} colors before starting the game.`);
    }
});

// Llamar a la función de verificación al cargar la página
checkColors();

