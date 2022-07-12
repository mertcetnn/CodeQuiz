
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
        question: "A very useful tool for used during development and debugging for printing content to the debugger is____?:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    }
]

// start to declares and selectors
var i = 0;
var score = 0;
var myquestionIndex = 0;

var wrapper = document.querySelector("#wrapper")
var currentTime = document.querySelector("#currentTime")
var timer = document.querySelector("#startTime")
var questionsDiv = document.querySelector("questionDiv")

//countdown collectors
var timeLeft = 76;
var holdTime = 0;
var penaltyPoint = 10;

//timer display set up and
//it suppouse to start timer
// if timer equal to "0"

timer.addEventListener("click", function () {
    if (holdTime === 0) {
        holdTime = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time:" + timeLeft;
            if (timeLeft <= 0) {
                clearInterval(holdTime);
                currentTime.textContent = "Time is up!";
            }
        }, 1000);
    } 
});
//
function myquestions(myquestionIndex) {
   //
    for (var i = 0; i < myquestions.length; i++) {
        var uQuestions = myquestions[myquestionIndex].title
        var uChoices = myquestions[myquestionIndex].choices
        questionsDiv.textContent = uQuestions;
       
    }
// creating  userchoices inside of div than compare each other
    uChoices(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
    })

    function compare(event) {
        var element = event.target;
    
        if (element.matches("li")) {
    
            var createDiv = document.createElement("div");
            createDiv.setAttribute("id", "createDiv");
           
            if (element.textContent == myquestions[myquestionIndex].answer) {
                score++;
            }else{
                timeLeft=timeLeft-penaltyPoint;
            }}
        }
        
        myquestionIndex++;

        if (myquestionIndex >= myquestionIndex.length) {
    
            allDone();
            createDiv.textContent =  "You got  " + score + "/" + myquestions.length + " Correct!";
        } else {
            render(questionIndex);
        }
        questionsDiv.appendChild(createDiv);



        

    }


    

















