// ***********LOCALSTORAGE Y DARKMODE***********
let userName = localStorage.getItem("userName");
const dark = document.getElementById('switch');
const body = document.body;

if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
}

dark.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
    }
});

const showMessage = (userName) => {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = `Good luck ${userName}!`;

    // let scoreMessage = document.getElementById("scoreMessage");
    // scoreMessage.textContent = `${userName} [numero] try left!`; ++++PENDIENTE++++ AÑADIR NÚMERO DE INTENTOS. ¿CÓMO??
}

showMessage(userName);

// ***********LÓGICA EASY***********
const buttonRemove = getElementById('buttonRemove');
const buttonCheck = getElementById('buttonCheck');
const slotSelection = document.querySelectorAll('.slot-selection');

for (let i = 0; i < 5; i++) {
    const color = selectedColors[i];
    const colorId = `color-${i}`;
    // document.write(`<div class="colour color-${color}" id="${colorId}"></div>`);
}

buttonRemove.addEventListener('click', () => {
    //borrar el último del array. Bbuscar método.
})


buttonCheck.addEventListener('click', () =>{
    //checkear el array que ha generado el user
})


//.getComputedStyle




// slotSelection.forEach((slotSelection) => {
//     box.addEventListener('click', () => {
//         const id = box.getAttribute('id');
//         console.log(background)
//     });
    
//     // const getComputedStyle = background.getComputedStyle;

// })


