
const quizConteiner=document.getElementById("#quizconteiner");
const submitButton=document.getElementById("#startquiz");
const resultsConteiner=document.getElementById("#results");

function myQuiz(){}
function showResults(){}

myQuiz();
 submitButton.addEventListener('click',showResults);

 //questions and answers
const myqestions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
];

// start to declares and selectors
var score = 0;
var questions = 0;


var countDown = document.querySelector("#countDown")

//countdown collectors
var timeLeft = 75;
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

function buildQuiz(){
const output=[];
myqestions.forEach((currentQuestion,questionsNumber)=>{
    const answers=[];
    for(letter in currentQuestion.answers){
        answers.push(
            <label>
                <input type="radio" name="question${questionNumber}"
            </label>
        )

    }


}


}



