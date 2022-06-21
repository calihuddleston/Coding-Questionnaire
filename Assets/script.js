var timeClock = document.getElementById("time-clock");
var secondsLeft;
var startButton = document.getElementById("strt-button");
var highScore = document.getElementById("highscores");
var isWin = false;
var questions = ["What is a '==' operator?", "What is a '===' operator?"]
var answers = ["Used to compare values", "Used to compare values and types"]
var userInitials = " ";
var score = 0;

// startGame function is called when the start button is clicked
function startGame(){
    isWin = false; 
    secondsLeft = 60;
    startButton.disabled = true;
    setTimer();
};

function setTimer() {
   
var timeInterval = setInterval(function() {
    secondsLeft--;
    timeClock.textContent = "Time: " + secondsLeft;
   
    if (secondsLeft === 60) {
        
        } 
    }, 1000);
};

setTimer();

