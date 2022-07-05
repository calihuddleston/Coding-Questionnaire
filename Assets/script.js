// selected elements from HTML document
const timeClock = document.getElementById("time-clock");
const startButton = document.getElementById("strt-button");
const highScore = document.getElementById("highscores");
const questionContainer = document.getElementById("question-container");

// timer interval variable
let secondsLeft;
let shuffledQuestions, currentQuestionIndex;
let score = 0;
let userInitials = " ";

const displayScore = document.getElementById('score');
displayScore.textContent = "Score: " + score
// startGame function is called when the start button is clicked
startButton.addEventListener("click", function startGame(){ 
    secondsLeft = 60;
    questionCounter = 0;
    score = 0;
    setTimer(); 
    renderQuestion();
    
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex =0;
    setNextQuestion();
})

/* create button and question element, append to document, create for loop for each? */
function setTimer() {
let timeInterval = setInterval(function() {
    secondsLeft--;
    timeClock.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
         clearInterval(timeInterval);
         sendHighScores();
        } 
    }, 1000);
}

function setNextQuestion() {
    resetState();

    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
    
function renderQuestion (question) {
    let displayQuestion = document.createElement('div');
    displayQuestion.setAttribute('id', 'question');
    displayQuestion.innerHTML = questionBank.question;
    questionContainer.append(displayQuestion);

    question.answers.forEach(answers => {
        const answrBtn = document.createElement('button');
        answrBtn.innerText = answers.text;
        answrBtn.setAttribute('class', 'answr-btns');
        if (answers.correct) {
            answrBtn.dataset.correct = answers.correct
        }
        answrBtn.addEventListener('click', selectAnswer);
        questionContainer.append(answrBtn);
    })
}

let questionBank = [{
    question: "JavaScript is an ________ language.",
    answers: [
        {text: "Object-oriented", correct: true}, 
        {text: "Object-based", correct: false}, 
        {text: "Procedural", correct: false},
        {text: "None of the above", correct: false}],
    
}, {
    question: "Which of the following keywords is used to define a variable in JavaScript?",
    answers: [
        {text: "let", correct: false}, 
        {text: "var", correct: false}, 
        {text: "Both A and B", correct: true},
        {text: "None of the above", correct: false}],
    
}, {
    question: "Which of the following methods is used to access HTML elements using JavaScript?",
    answers: [
        {text: "getElementById()", correct: false}, 
        {text: "getElementByClassName()", correct: false}, 
        {text: "Both A and B", correct: true}, 
        {text: "None of the above", correct: false}],
    
}, {
    question: "Which of the following methods can be used to display data in some form using JavaScript?",
    answers: [
        {text: "document.write()", correct: false}, 
        {text: "console.log()", correct: false}, 
        {text: "window.alert()", correct: false}, 
        {text: "All of the above", correct: true}],
    
}, {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
        {text: "const", correct: true}, 
        {text: "var", correct: false}, 
        {text: "let", correct: false}, 
        {text: "constant", correct: false}],
    
}, {
    question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
    answers: [
        {text: "Boolean", correct: false}, 
        {text: "Undefined", correct: false}, 
        {text: "Object", correct: true}, 
        {text: "Integer", correct: false}],
   
}, {
    question: "Which function is used to serialize an object into a JSON string in JavaScript?",
    answers: [
        {text: "stringify()", correct: true}, 
        {text: "parse()", correct: false}, 
        {text: "convert()", correct: false}, 
        {text: "None of the above", correct: false}],
    
}, {
    question: "Which of the following are closures in JavaScript?", 
    answers: [
        {text: "Variables", correct: false},
        {text: "Functions", correct: false}, 
        {text: "Objects", correct: false}, 
        {text: "All of the above", correct: false}],
  
}, {
    question: "How to stop an interval timer in JavaScript?",
    answers: [
        {text: "clearInterval", correct: true}, 
        {text:"clearTimer", correct: false}, 
        {text: "intervalOver", correct: false}, 
        {text: "None of the above", correct: false}],
  
}, {
    question: "How do we write a comment in JavaScript?",
    answers: [
        {text: "/* */", correct: false}, 
        {text: "//", correct: true}, 
        {text: "#", correct: false}, 
        {text: "$ $", correct: false}],
}];

