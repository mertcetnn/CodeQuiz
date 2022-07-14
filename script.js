
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    title:
      "String values must be enclosed within ____ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    title:
      "A very useful tool for used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal / bash", "for loops", "console log"],
    answer: "console log",
  },
];

var score = 0;
var questionList = 0;
var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var checkAnswer = document.querySelector("#answerCheck");
var choicesUl=document.querySelector("#choicesUl");
//Creating the Timer
var secondsLeft = 75;
var holdInterval = 0;
var penalty = 5;


timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time Left: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionList);
});
var ulCreate = document.createElement("ul");
function render(questionList) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionList].title;
    var userChoices = questions[questionList].choices;
    var trueA = questions[questionList].answer
    questionsDiv.textContent = userQuestion;


  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", function (event) {


      if (event.target.textContent === questions[questionList].answer) {
        var correct = document.createElement("h2")
        correct.textContent = "Good job !correct!!!"
        questionsDiv.appendChild(checkAnswer);
        checkAnswer.appendChild(correct)
        correct.setAttribute("class", "comments")
        return correct;



      } else {
        var wrong = document.createElement("h2")
        wrong.textContent = "Wrong, Next time!"
        questionsDiv.appendChild(checkAnswer)
        checkAnswer.appendChild(wrong)
        wrong.setAttribute("class", "comments")
        secondsLeft = secondsLeft - penalty;
        return wrong;
          }  
        }
        ) ;

        
      })}
     
