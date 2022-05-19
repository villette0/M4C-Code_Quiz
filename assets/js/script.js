// Universal variables first
var startContainer = document.querySelector(".start-container");
var timer = document.querySelector(".timer");
var startButton = document.querySelector(".start-btn");
var questionContainer= document.querySelector(".question-container");
var questionText = document.querySelector(".question-text");
var answerList = document.querySelector(".answer-list");
var nextButton = document.querySelector(".multiple-choice-button");
var endContainer = document.querySelector(".end-container");

questionContainer.style.display="none";

startButton.addEventListener("click", function(){
    questionContainer.style.display="block";
    startContainer.style.display="none";
    startGame();
});

var timeLeft = 75;
function setTimer() {
    timeLeft--;
    timer.textContent=("Timer: " + timeLeft);
    if (timeLeft === 0) {
        clearInterval(quizTime);
    }
}

var quizTime;
function startGame() {
    quizTime = setInterval(setTimer, 1000);
}

var questions = [
    { 
        text: "What type of variable can hold more than one value?",
        options: ["array", "JavaScript", "event bubbling"],
        correct: "array",
    },
    {
        text: "3+1",
        options: ["3", "4", "5"],
        correct: "4",
    },
    {
        text: "2+1",
        options: ["3", "4", "5"],
        correct: "3",
    },
    {
        text: "2+5",
        options: ["6", "7", "5"],
        correct: "7",
    },
    {
        text: "1+1",
        options: ["3", "2", "5"],
        correct: "2",
    },
]

// for loop for next button to cycle through questions 
var questionIndex = 0;
function displayQuestion(index) {
    answerList.innerText="";
    // var questions comes from line 33 that is used in the .length
    for(var i=0; i<questions.length; i++) {
        // console.log(questions[i].text)
        var question = questions[index].text;
        var answersList = questions[index].options;
        // var from up top
        questionText.textContent = question;
    }
    // we made up the word answer
    answersList.forEach(function(answer) {
        // console.log(answer)
        var answerButton = document.createElement("button");
        answerButton.textContent = answer;
        answerButton.classList.add("multiple-choice-btn");
        answerList.appendChild(answerButton);
        answerButton.addEventListener("click", function(){
            checkAnswer(answerButton.textContent);
        });
    });
}

// we made up the word answer
function checkAnswer(answer) {
    var display = document.createElement("h2");
    if(questions[questionIndex].correct===answer) {
        console.log(true);
        display.textContent = "Correct!";
    } else {
        console.log(false);
        display.textContent = "Incorrect!"
    }
    questionContainer.appendChild(display);
    questionIndex++
    displayNext(questionIndex, display);
}

function displayNext (question, status) {
    displayQuestion (question);
    status.textContent="";
}

displayQuestion(questionIndex);

// add a score after they get something right or wrong
// minus time  10 if they mistake it
// add 5 sec if they get correct