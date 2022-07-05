//questions and answers
var question1 = ["Commonly used data types DO NoT Include:"]
var answers1 = ["String", "Boolens", "Alerts", "Numbers"]
var correct1 = [[1]]
var correct1 = true
if (correct1 === true) { } else { false };




var question2 = ["The condition in an if / else statement is enclosed with ______."]
var answers2 = ["Quotes", "Curl Brackets", "Parenthesis", "Square Brackets"]
var correct2 = [[2]]
var correct2 = true
if (correct2 === true) { } else { false };







var question3 = ["Arrays in JavaScript can be used to store _______."]
var answers3 = ["Numbers and String", "Other Arrays", "Boolens", "All of the above"]
var correct3 = [[3]]
var correct3 = true
if (correct3 === true) { } else { false };




var question4 = ["String values must be enclosed within______when being assigned to variables."]
var answers4 = ["Commas", "Curly Brackets", "Quates", "Parenthesis"]
var correct4 = [[1]]
var correct4 = true
if (correct4 === true) { } else { false };




var question5 = ["A very useful tool used during development and debugging for printing content to the debugger is:"]
var answers5 = ["JavaScript", "Terminal/bash", "For loops", "consule.log"]
var correct5 = [[2]]
var correct5 = true
if (correct5 === true) { } else { false };


    

// Declared variables
var score = 0;
var questionIndex = 0;

// Start working code 
// Declared variables
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
// Creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
    // We are checking zero because its originally set to zero
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }
    render(questionIndex);
});

// Renders questions and choices to page: 
function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}