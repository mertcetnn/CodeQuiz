
 //questions and answers
const myquestions = [
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
var question=$("question");
var quizContainer=$("quiz-conteiner");
var scorecard=$("scorecard");
var option0=$("option0");
var option1=$("option1");
var option2=$("option2");
var option3=$("option3");
var option4=$("option4");
var next =document.querySelectorAll("next");
var points=$("score");
var span=document.querySelectorAll("span")

// start to declares and selectors
var i=0;
var score = 0;
myquestions = 0;
function displayQuestion(){
    for (var a=0;a<span.length;a++){
        span[a].style.background="none";
        question.innerHTML="Q"+(i+1)+""+myquestions[i].question;
        option0.innerHTML=myquestions[i].option[0];
        option1.innerHTML=myquestions[i].option[1];
        option2.innerHTML=myquestions[i].option[2];
        option3.innerHTML=myquestions[i].option[3];
        option4.innerHTML=myquestions[i].option[4];
        statusbar.innerHTML="Question"+'' +(i+1)+''+myquestions.length;
    }
}


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



      






