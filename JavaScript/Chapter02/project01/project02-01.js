/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Fahrenheit Converter
      Author: Israel Solano
      Date: 02/22/2026

      Filename: project02-01.js
*/

// Converts Fahrenheit to Celsius
function FahrenheitToCelsius(degree) {
   return (degree - 32) / 1.8;
}

// Converts Celsius to Fahrenheit
function CelsiusToFahrenheit(degree) {
   return degree * 1.8 + 32;
}


// Event handler for Celsius input
document.getElementById("cValue").onchange = function() {

   let cDegree = document.getElementById("cValue").value;

   document.getElementById("fValue").value =
      CelsiusToFahrenheit(cDegree);

};


// Event handler for Fahrenheit input
document.getElementById("fValue").onchange = function() {

   let fDegree = document.getElementById("fValue").value;

   document.getElementById("cValue").value =
      FahrenheitToCelsius(fDegree);

};