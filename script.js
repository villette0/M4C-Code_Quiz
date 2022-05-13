// Universal variables first
var startContainer = document.querySelector(".start-container");
var timer = document.querySelector(".timer");
var startButton = document.querySelector(".start-btn");
var questionContainer= document.querySelector(".question-container");
var questionText = document.querySelector(".question-text");
var answerList = document.querySelector(".answer-list");
var nextButton = document.querySelector(".next-button");
var endContainer = document.querySelector(".end-container");

questionContainer.style.display="none";

startButton.addEventListener("click", function(){
    questionContainer.style.display="block";
    startContainer.style.display="none";
    startGame();
});

var timeLeft = 10;
function setTimer() {
    timeLeft--;
    timer.textContent=timeLeft;
    if (timeLeft === 0) {
        clearInterval(quizTime);
    }
}

var quizTime;
function startGame() {
    quizTime = setInterval(setTimer, 1000);
}

