
Having set the initial values in the web form you will next create a function to estimate the total cost of the photographic services. To do that however, you will first need to learn about **variables, data types, and operators**.

```js
/*    JavaScript 7th Edition
      Chapter 2
      Chapter case

      Fan Trick Fine Art Photograph
      Variables and functions

      Author: Israel Solano
      Date:   02/20/2026

      Filename: js02.js
 */

// setup the form when the page loads

window.addEventListener("load", setupForm);


// Set the form's default values

function setupForm() {
      document.getElementById("photoNum").value = 1;
      document.getElementById("photoHrs").value = 2;
      document.getElementById("makeBook").checked = true;
      document.getElementById("photoRights").checked = false;
      document.getElementById("photoDist").value = 0;
}
setupForm();
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
```
>Having set the initial values in the web form you will next create a function to estimate the total cost of the photographic services. To do that however, you will first need to learn about variables, data types, and operators.