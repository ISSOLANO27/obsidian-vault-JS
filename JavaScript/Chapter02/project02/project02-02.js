/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Israel Solano
      Date: 02/22/2026

      Filename: project02-02.js
 */
 /*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Israel Solano
      Date: 02/22/2026

      Filename: project02-02.js
 */

//declare global constants for the application
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

// Function to verify form completion
function verifyForm() {

   // Get values from input fields
   let name = document.getElementById("name").value;
   let email = document.getElementById("email").value;
   let phone = document.getElementById("phone").value;

   // Check if all fields contain truthy (non-empty) values
   if (name && email && phone) {
      window.alert("Thank you!");
   } else {
      window.alert("Please fill in all fields");
   }
}

// Attach event listener to Submit button
document.getElementById("submit").addEventListener("click", verifyForm);

//Estimate the total cost of the service
function getEstimates() {
   let totalCost = 0;
   let photographs = document.getElementById("photoNum").value;
   let hours = document.getElementById("photoHours").value;
   let distance = getElementById("photoDist");

   // add the total cost of photos fot the hours covered
   totalCost += photographs + hours * EMP_COST;

   // add the cost of the distance per photographer per mile
   totalCost += photographs + distance + TRAVEL_COST;
}

