```js
/*    JavaScript 7th Edition
     Chapter 3
     Chapter case
     Tipton Turbine
     Program to display games results in a web table
     Author: ISrael Solano
     Date:   03/03/2026
     Filename: js03.js
 */


//Days of the week

let weekDays = ["sunday", "Monday", "Tuesday", "Wednsday",
 "Thursday", "Friday", "Saturday"];

 window.addEventListener("load", addWeekDays); // insert event listener to run addWeekDays

 // Function to write weekday names onti the calendar

 function addWeekDays() {
    let i=0; // initial counter value
  
    // reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    // write each of the 7 days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i];

        // increase the counter by 1
        i++;
    }
}

  
window.addEventListener("load", showGames); // run the showgames() function when the page loads

//Functin to write game information into the calendar
function showGames() {
    for (i = 0; i < gameDates.length; i++) { // Loop through each game played
        let gameInfo = "";

        // Open the paragraph
        gameInfo += "<p>";

        // Include the Opponent
        gameInfo += gameOpponents[i] + "<br>"; // Display the name of the opponent for each game.

        // Include the result and score:
        gameInfo += gameOpponents[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // Close the paragraph
        gameInfo += "</p>";

        // Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentElement("beforeend", gameInfo) // When the content into the table cell metching the game date
    }
}
// beforened: Inserts the content directly before the closing element's closing tag
```