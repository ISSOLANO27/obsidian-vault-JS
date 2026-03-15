"use strict";
/*    JavaScript 7th Edition
      Chapter 4
      Project 04-03

      Author: Israel Solano
      Date:   03/12/2026

      Filename: project04-03.js
*/

const MAX_REVIEW = 100;

let commentBox = document.getElementById("comment");
let countValue = document.getElementById("countValue");
let limitLabel = document.getElementById("limit");
let warningBox = document.getElementById("warningBox");

limitLabel.innerHTML = MAX_REVIEW;

commentBox.addEventListener("keyup", updateCount);

function updateCount() {
   let charCount = commentBox.value.length;

   try {

      if (charCount > MAX_REVIEW) {
         throw "You have exceeded the character count limit";
      }
      warningBox.innerHTML = "";

   }catch (error) {
      warningBox.innerHTML = error;
   }
   finally {
      countValue.innerHTML = charCount;
   }
}





