
 //questions and answers
var myquestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
]

// start to declares and selectors
var i=0;
var score = 0;
var questionIndex=0;

var wrapper=document.querySelector("#wrapper")
var currentTime=document.querySelector("#currentTime")
var timer =document.querySelector("#startTime")
var questionDiv=document.querySelector("questionDiv")
//countdown collectors
var timeLeft = 76;
var holdTime = 0;
var penaltyPoint = 10;
//creat ul elements with 
var createUl = document.createElement("ul");
//timer display set up
startquiz.addEventListener("click", function () {
    //it suppouse to start timer
    // if timer equal to "0"
    if (holdTime === 0) {
        holdTime = setInterval(function () {
            timeLeft--;
            countDown.textContent = " Time:" + timeLeft;
            //if timer equal to "0"
            if (timeLeft <= 0) {
                clearInterval(holdTime);
                allDone();
                countDown.textContent = "Good luck for results"
            }
        }, 1000)

    }


});



      






