/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photography
      Variables and functions
      Author: Israel Solano
      Date:   02/20/2026

      Filename: js02.js
 */

//declare global constants for the application
const EMP_COST = 100;
const BOOK_COST = 350;
const REPRO_COST = 1250;
const TRAVEL_COST = 2;

// setup the form when the page loads
window.addEventListener("load", setupForm);

// Set the form's default values
function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = false;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;

      getEstimate(); // The total cost should automatically change when the customer changes values and options on the form

      // Add event handlers for each input control
      document.getElementById("photoNum").onchange =getEstimate;
      document.getElementById("photoHrs").onchange =getEstimate;
      document.getElementById("makeBook").onchange = getEstimate;
      document.getElementById("photoRights").onchange = getEstimate;
      document.getElementById("photoDist").onchange =getEstimate;
}

//Estimate the total cost of the service
function getEstimate() {
   let totalCost = 0;
   let photographs = Number(document.getElementById("photoNum").value);
   let hours = Number(document.getElementById("photoHrs").value);
   let distance = Number(document.getElementById("photoDist").value);
   let buyBook = document.getElementById("makeBook").checked;
   let buyRights = document.getElementById("photoRights").checked;


   // add the total cost of photos fot the hours covered
   totalCost += photographs * hours * EMP_COST;

   // add the cost of the distance per photographer per mile
   totalCost += photographs * distance * TRAVEL_COST;

   // Add the cost of the book if purchased
   totalCost += buyBook ? BOOK_COST : 0;

   // Add the cost of photo rights if purchased
   totalCost += buyRights ? REPRO_COST : 0;

   // Display the total cost estime. textContent works as well
   document.getElementById("estimate").innerHTML = "$" + totalCost; // innerHTML outputs the content between opening and closing tags.
}





/*
  Observation:

  Initially, I expected the form inputs to automatically display default values
  just because I defined setupForm(). However, defining a function does not
  execute it — it must be called explicitly for the default values to appear.

  getElementById() returns a reference to the actual INPUT element in the DOM,
  not the associated label. Even though the <label> uses the "for" attribute
  to reference the same id, setting properties like .value or .checked only
  affects the input element itself.

  For text and number inputs, the .value property controls what is displayed
  inside the input field.

  For checkboxes, the .checked property (boolean) controls whether the box
  appears selected. The .value property does NOT control the visual checked state.

  The label gains interactivity (clicking the label toggles or focuses the input)
  because its "for" attribute matches the input's id — not because of JavaScript.

  Also, refreshing the page reloads the document from scratch, so any entered
  values are cleared unless they are reinitialized by setupForm() or stored
  using persistent storage (e.g., localStorage).
*/
