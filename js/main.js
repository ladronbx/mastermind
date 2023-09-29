// const toggleButton = document.getElementById('toggle-btn');
// const toggleContent = document.getElementById('toggle-content');

// toggleButton.addEventListener('click', () => {
//     toggleContent.classList.toggle('hidden');
//     toggleContent.classList.toggle('visible');
//     toggleButton.classList.toggle('active');
// });


// Crea una función que reciba 2 números y un callback e invoque ese
// callback tras 1 segundo con la suma de los números como argumento.


// setTimeout(() => {
//     const suma = (num1, num2) =>{
//         setTimeout(() => {
//             console.log(num1 + num2);
//         }, 1000);
//     }
//     console.log(num1 + num2);
// }, 1000);




// let suma = (a, b, setTimeout() => {

// }, 1000);) => {
//     return console.log(a+b)
// }

// suma(2,2);


// suma(3,4);


const sumWithDelay = (a, b, callback) => {
    const sum = a + b;
    setTimeout(() => callback(sum), 1000);
};

sumWithDelay(1, 2, (sum) => {
    console.log(sum);
});





const suma = (a, b) => {
    return a + b
}

const function1 = (num1, num2, cb) => {
    setTimeout(() => {
        console.log(cb(num1, num2))
    }, 1000)
}

function1(4, 5, suma)