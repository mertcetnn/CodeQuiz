var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");
// giving listener to clear 
clear.addEventListener("click", function () {
  localStorage.clear();
  location.reload();
});
// getting data from allcores sending to into displayer
var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
// if scores are not equal to zero
// creates li and put selected datas inside of it
if (allScores !== null) {
  for (var i = 0; i < allScores.length; i++) {
    var createLi = document.createElement("li");
    createLi.textContent = allScores[i].initials + " " + allScores[i].score;
    highScore.appendChild(createLi);
  }
}
// giving addlistener to go back
goBack.addEventListener("click", function () {
  window.location.replace("codequiz.html");
});