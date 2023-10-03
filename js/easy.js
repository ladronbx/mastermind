let userName = localStorage.getItem("userName");
const showMessage = (userName) => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;

    // let scoreMessage = document.getElementById("scoreMessage");
    // scoreMessage.textContent = `${userName} [numero] try left!`; ++++PENDIENTE++++ AÑADIR NÚMERO DE INTENTOS. ¿CÓMO??
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

const selectedColors = JSON.parse(localStorage.getItem("selectedColors"));
const numberOfColorOptions = selectedColors.length;

for (let i = 0; i < numberOfColorOptions; i++) {
    const color = selectedColors[i];
    const colorId = `color-${i}`;

    // Crea una ficha de color con el fondo correspondiente
    document.write(`
                <div class="colour color-${color}" id="${colorId}"></div>
            `);
}