// Setting up variables
var highScore = document.querySelector("#score");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#score-btn");

// Event listener to clear scores 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});