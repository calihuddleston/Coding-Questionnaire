// selected elements from HTML document
var timeClock = document.getElementById("time-clock");
const startButton = document.getElementById("strt-button");
var highScore = document.getElementById("highscores");
var insertQuestion = document.getElementById("question");
let answerBtns1 = document.getElementById("btns1");
let answerBtns2 = document.getElementById("btns2");
let answerBtns3 = document.getElementById("btns3");
let answerBtns4 = document.getElementById("btns4");
let btns = document.getElementById("btns");

let secondsLeft;

var userInitials = " ";
var score = 0;

let questionsOne = [{
    question: "How many elements can you apply an ID attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"
}];




// startGame function is called when the start button is clicked
function startGame(){ 
    secondsLeft = 60;
    startButton.disabled = true;
    setTimer(); 
    renderQuestion();
};




function setTimer() {
   
var timeInterval = setInterval(function() {
    secondsLeft--;
    timeClock.textContent = "Time: " + secondsLeft;
    if (secondsLeft == 0) {
         clearInterval(timeInterval);
         return;
         sendHighScores();
        } 
    }, 1000);
};

function sendHighScores(){
    insertQuestion.textContent = "Please add your initials";

    btns.userInput
    btns.createElement = "input";
    var userInput = btns.children[0].setAttribute = (userInitials);
    replaceBtns.appendChild(userInput);
}


startButton.addEventListener("click", startGame);
highScore.addEventListener("click", sendHighScores);
setTimer();

