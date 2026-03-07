/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: ISrael Solano
     Date:   03/03/2026

     Filename: js03.js
 */

//Days of the week
let weekDays = ["sunday", "Monday", "Tuesday", "Wednsday",
 "Thursday", "Friday", "Saturday"];

 window.addEventListener("load", addWeekDays); // insert event listener to run addWeekDays
 window.addEventListener("load", showGames);


 // Function to write weekday names onti the calendar
 function addWeekDays() {
    let i = 0; // initial counter value

    // reference the collection of heading cells
    let headingCells = document.getElementsByTagName("th");

    // write each of the 7 days into a heading cell
    while (i < 7) {
        headingCells[i].innerHTML = weekDays[i]; 

        // increase the counter by 1
        i++;
    }
}


//Functin to write game information into the calendar
function showGames() {
    for (let i = 0; i < gameDates.length; i++) { // Loop through each game played
        let gameInfo = "";


        // Open the paragraph
        switch (gameResults[i]) {
            case "W":
                gameInfo += "<p class='win'>"; // opening tag for games won
                break;
            case "L":
                gameInfo += "<p class='lose'>"; // opening tag for games lost
                break;
            case "S":
                gameInfo += "<p class='suspended'>"; // opening tag for suspended games
                break;
            case "P":
                gameInfo += "<p class='postponed'>"; // opening tag for postponed games
                break;
        }

        //Display the game location
        if (gameLocations[i] === "h") { 
            gameInfo += "vs. "; // if the game is at home, display the text string "vs."
        } else if (gameLocations[i] === "a") { // if the game is away, display the @ character
            gameInfo += "@ "; 
        }

        // Include the Opponent
        gameInfo += gameOpponents[i] + "<br>"; // Display the name of the opponent for each game.

        // Include the result and score: 
        gameInfo += gameOpponents[i] + ": (" + runsScored[i] + " - " + runsAllowed[i] + ")";

        // Close the paragraph
        gameInfo += "</p>";
        
        // Write the information into a table cell
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeend", gameInfo); // When the content into the table cell metching the game date
    }
}

// beforened: Inserts the content directly before the closing element's closing tag