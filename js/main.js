let nameInput = document.getElementById("name");
let playButton = document.getElementById("playButton");
// let levelEasy = document.getElementById('levelEasy');
// let levelMedium = document.getElementById('levelMedium');
// let levelAdvanced = document.getElementById('levelAdvanced');

playButton.addEventListener("click", function () {
    let playerName = nameInput.value;
    // let playerLevel = nameInput.value;
    localStorage.setItem("userName", playerName);
});
