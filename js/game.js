let userName = localStorage.getItem("userName");

if (userName) {
    let welcomeMessage = document.getElementById("welcomeMessage");
    welcomeMessage.textContent = "¡Hola, " + userName + "!";
}