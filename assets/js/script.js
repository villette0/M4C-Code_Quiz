// Global scope variables first
var viewHighScores = document.querySelector(".view-scores-link");
var timer = document.querySelector(".timer");

var startContainer = document.querySelector(".start-container");
var startButton = document.querySelector(".start-btn");

var questionContainer = document.querySelector(".question-container");
var questionText = document.querySelector(".question-text");
var answerUlList = document.querySelector(".answer-ullist");
var correctVsIncorrect = document.querySelector(".result");

var endContainer = document.querySelector(".end-container");
var endResult = document.querySelector(".end-result");
var initialsInput = document.querySelector(".initials-input");
var submitInitialsButton = document.querySelector(".submit-initials-button");

var highScoresContainer = document.querySelector(".highscores-container");
var highScoresUlList = document.querySelector(".highscores-ullist");
var highScoresPageRestartButton = document.querySelector(".highscores-restart-page-btn");
var clearHighScoresButton = document.querySelector(".clear-highscores-btn");

//for localstorage
var initialsAndHighScoresArray = []; 

var quizTime;
var timeLeft = 35;
var score = 0;
var questionIndex = 0;

// Hide all but start container initially
startContainer.style.display = "block";
questionContainer.style.display = "none";
endContainer.style.display = "none";
highScoresContainer.style.display = "none";


// added to both viewhighscores link and submit initials button
viewHighScores.addEventListener("click", () => {
    document.getElementById("highscores-ullist").innerHTML = "";
    if (userAndScoreArray.length > 1) {
        userAndScoreArray.sort(orderHighScores("score"));
    }
    forLoopInitialsScore();
    displayHighScoresContainer();
    stopTimer();
});

startButton.addEventListener("click", () => {
    startContainer.style.display = "none";
    questionContainer.style.display = "block";
    startTimer();
    displayNextQuestion(questionIndex, correctVsIncorrect);
});

function startTimer() {
    // Initiate timerClock function once per second
    quizTime = setInterval(timerClock, 1000);
}

function stopTimer() {
    clearInterval(quizTime);
}

function timerClock() {
    timeLeft--;
    timer.textContent = "Timer: " + timeLeft;
    if (timeLeft <= 0) {
        // clearInterval so it doesn't go into negatives
        clearInterval(quizTime);
        timer.textContent = "Timer: 0";
        gameOver();
    }
}

var questionsList = [
    {
        text: "What type of variable can hold more than one value?",
        multipleChoices: [
            "array",
            "JavaScript",
            "event bubbling",
            "query selector",
        ],
        correct: "array",
    },
    {
        text: "What type of listener would one use to enable a function on click?",
        multipleChoices: ["downturn", "event", "command", "upstream"],
        correct: "event",
    },
    {
        text: "What's inside the parenthesis of a function?",
        multipleChoices: ["placeholder", "variable", "parameter", "concat"],
        correct: "parameter",
    },
    {
        text: "What number does an array index start at?",
        multipleChoices: ["1", "100", "0", "5"],
        correct: "0",
    },
    {
        text: "Where does one place the link to the custom css file in the HTML document?",
        multipleChoices: [
            "outside the <html>",
            "in the <DOCTYPE>",
            "at the top <head>",
            "at the bottom of <head>",
        ],
        correct: "at the bottom of <body>",
    },
];

function displayQuestion(questionIndexNumber) {
    answerUlList.innerText = "";

    for (var i = 0; i < questionsList.length; i++) {
        var aSingleQuestion = questionsList[questionIndexNumber].text;
        var multipleChoiceArray = questionsList[questionIndexNumber].multipleChoices;
        questionText.textContent = aSingleQuestion;
    }
    createAnswers(multipleChoiceArray);
}

//multipleChoiceArray is the collection of multiple choice possibilities
function createAnswers(multipleChoiceArray) {
    for (var i = 0; i < multipleChoiceArray.length; i++) {
        // addingAnswerButton for each item in array
        addAnswerButtons(multipleChoiceArray[i]);
    }
}

function addAnswerButtons(answerPlaceholder) {
    var answerLi = document.createElement("li");
    var answerButton = document.createElement("button");

    answerButton.classList.add("multiple-choice-btn");
    answerButton.textContent = answerPlaceholder;

    answerUlList.appendChild(answerLi);
    answerLi.appendChild(answerButton);

    answerButton.addEventListener("click", () => {
        checkAnswer(answerButton.textContent);
        moveToNextQuestion();
    });
}

function checkAnswer(answerplaceholder) {
    // if it's the same as the question selected by the user
    if (questionsList[questionIndex].correct === answerplaceholder) {
        correctVsIncorrect.textContent = "Correct! You gained 10 seconds";
        score++;
        timeLeft += 10;
    } else {
        correctVsIncorrect.textContent = "Incorrect! You lost 10 seconds!";
        timeLeft -= 10;
    }
}

function moveToNextQuestion() {
    questionIndex++;
    if (questionIndex === questionsList.length) {
        endPage();
    } else {
        displayNextQuestion(questionIndex, correctVsIncorrect);
    }
}

function displayNextQuestion(questionIndexNumber, changeCorrectorIncorrect) {
    displayQuestion(questionIndexNumber);
    changeCorrectorIncorrect.textContent = "";
}

function endPage() {
    clearInterval(quizTime);
    timer.textContent = "Timer: 0";
    questionContainer.style.display = "none";
    correctVsIncorrect.style.display = "none";
    highScoresContainer.style.display = "none";
    endContainer.style.display = "block";

    // Could use percent instead of 2
    if (score > 2) {
        endResult.textContent =
            "Your score is " +
            score +
            " correct out of " +
            questionsList.length +
            "! You passed!";
    } else {
        endResult.textContent =
            "Your score is only " +
            score +
            " correct out of " +
            questionsList.length +
            "! You failed.";
    }
}

function gameOver() {
    endContainer.style.display = "block";
    endResult.textContent = "GAME OVER! You ran out of time.";
    questionContainer.style.display = "none";
    correctVsIncorrect.style.display = "none";
    highScoresContainer.style.display = "none";
}

//Go to high scores page and add score
submitInitialsButton.addEventListener("click", () => {
    if (initialsInput.value !== "") {
        highScoresUlList.innerHTML = "";
        appendHighScoresToArray();
        if (userAndScoreArray.length > 1) {
            userAndScoreArray.sort(orderHighScores("score"));
        }
        forLoopInitialsScore();
        displayHighScoresContainer();
    }
});


function displayHighScoresContainer() {
    startContainer.style.display = "none";
    endContainer.style.display = "none";
    questionContainer.style.display = "none";
    highScoresContainer.style.display = "block";
}

function forLoopInitialsScore() {
    for (var i = 0; i < userAndScoreArray.length; i++) {
        var arrayInitials = userAndScoreArray[i].initials;
        var arrayScore = userAndScoreArray[i].score;
        var rank = i + 1; //starting at 1 instead of 0
        appendHighScoresToHTML(arrayInitials, arrayScore, rank);
    }
}

function appendHighScoresToHTML(arrayInitials, arrayScore, rankNumber) {
    var initialsScoreLi = document.createElement("li");
    var initialsScoreP = document.createElement("p");

    initialsScoreLi.classList.add("initialsscore-li");
    initialsScoreP.classList.add("initialsscore-p");

    initialsScoreP.innerText =
        rankNumber + ". " + arrayInitials + " " + arrayScore;

    highScoresUlList.appendChild(initialsScoreLi);
    initialsScoreLi.appendChild(initialsScoreP);
}

var userAndScoreArray = [];
function appendHighScoresToArray() {
    var myObj = {
        initials: initialsInput.value,
        score: score,
    };
    userAndScoreArray.push(myObj);

    for (var i = 0; i < userAndScoreArray.length; i++) {
        localStorage.setItem(i, JSON.stringify(userAndScoreArray[i]));
    }
}

function orderHighScores(property) {
    //json sort by property of object
    return function (a, b) {
        if (a[property] < b[property]) {
            return 1;
        } else if (a[property] > b[property]) {
            return -1;
        } else {
            return 0;
        }
    };
}

highScoresPageRestartButton.addEventListener("click", () => {
    questionContainer.style.display = "block";
    correctVsIncorrect.style.display = "block";
    startContainer.style.display = "none";
    endContainer.style.display = "none";
    highScoresContainer.style.display = "none";
    // reset all our global variables
    questionIndex = 0;
    timeLeft = 35;
    score = 0;
    initialsInput.value = "";
    displayNextQuestion(questionIndex, correctVsIncorrect);
    startTimer();
});

clearHighScoresButton.addEventListener("click", () => {
    highScoresUlList.innerHTML = "";
    localStorage.clear();
    userAndScoreArray = [];
});

function getItemsFromLocalStorage() {
    for (var i = 0; i < localStorage.length; i++) {
        var value = JSON.parse(localStorage.getItem(i));
        userAndScoreArray.push(value);
    }
}

getItemsFromLocalStorage();
