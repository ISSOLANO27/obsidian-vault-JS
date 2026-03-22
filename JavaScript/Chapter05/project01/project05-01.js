"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Hands-on Project 5-1

      Author: Israel
      Date: 03/15/2026

      Filename: project05-01.js
*/

// Quiz time limit
let quizTime = 90;

// Correct quiz answers
let correctAnswers = ["10", "4", "-6", "-5", "-7"];

// Page elements
let startQuiz = document.getElementById("startQuiz");
let quizClock = document.getElementById("quizClock");
let overlay = document.getElementById("overlay");

// Time left in quiz
let timeLeft = quizTime;

// STEP 3: Declare timeID without assigning an initial value
let timeID;

// STEP 4: Store all quiz input boxes in questionList
let questionList = document.querySelectorAll("div#quiz input");

// Starts the quiz time clock
startQuiz.onclick = function () {
   overlay.className = "showquiz";
   timeID = window.setInterval(countdown, 1000);
};

// Marks all incorrect answers with the fail class
function checkAnswers() {
   let correctCount = 0;

   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         questionList[i].className = "";
         correctCount++;
      } else {
         questionList[i].className = "fail";
      }
   }

   return correctCount;
}

// STEP 6: Create the countdown function
function countdown() {
   if (timeLeft === 0) {
      window.clearInterval(timeID);

      let totalCorrect = checkAnswers();

      if (totalCorrect === correctAnswers.length) {
         window.alert("Congratulations! You got 100%!");
      } else {
         window.alert(
            "You got " +
            totalCorrect +
            " correct out of " +
            correctAnswers.length +
            "."
         );

         timeLeft = quizTime;
         quizClock.value = timeLeft;
         overlay.className = "hidequiz";
      }
   } else {
      timeLeft--;
      quizClock.value = timeLeft;
   }
}