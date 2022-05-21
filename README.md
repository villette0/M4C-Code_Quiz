# Code Quiz

## Website Description
The website is of a coding quiz which gives multiple choice options as answers. It is initiated by a start button and a timed assessmenet of 35 seconds. If the user misses an an answer 10 seconds are subtracted from the time and if they get one correct answer then 10 seconds are added. They are shown whether they got an answer correct or not before moving to the next question. If they run out of time, they will see a "Game Over" message. Upon it being "Game Over," or completing the quiz, they are able to either restart the quiz to try again or view the high scores. 

## Challenge Description
The challenge required dynamically updated HTML via JavaScript and CSS styling. There was no starter code provided. Various divs are shown and hidden dependent on which section of the quiz the user is on and which button has been pressed. The questions and answers are not on the HTML but rather populated to be shown on the screen via a for-loop array. An event listener on the start button initiates the timer countdown function on the screen for the user to see while each question appears via appending the question container div and they make a multiple choice selection from li items in an unordered list. Event listener functions are also on the high scores and reset buttons. The timer stops and returns to zero if the user runs out of time or if the quiz is not currently running. Otherwise it uses an interval of one second to subtract down from 35.  The quiz will end with the result div; this is either a "Game Over" screen if they run out of time or results of how many questions they got correct. The restart quiz function resets most global variables for time, score, and questions index. The high scores also used a for-loop array to check which is the highest and order them as such. 

## User Story

```
AS A coding boot camp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
```

## Tasks Completed
The HTML document includes:
* a proper title and SEO metadata
* proper HTML semantic labelling
* alt attributes of images for accessibility
* countdown timer, next button, question container
* comments

The CSS document includes:
* an organized structure that matches the HTML order
* variables for repetitive values
* visually appealing styling
* element and class selectors
* comments

The JavaScript document includes:
* variables, query selectors, objects, event listeners, and functions
* start/restart/multiple choice/high scores button event listener on click
* for-loop over questions array 
* for-loop over high scores
* intervals, countdown timers, functions with parameters, functions with appended lists and classes

## Languages
- HTML
- CSS
- JavaScript

## Links
* [Deployed webpage](https://villettec.github.io/Module_4_Challenge-Code_Quiz/)

* [Repository](https://github.com/villettec/Module_4_Challenge-Code_Quiz)

## Screenshot
![image](./assets/images/readme-screenshot.png)

## Credit
Villette Comfort

villette@live.com