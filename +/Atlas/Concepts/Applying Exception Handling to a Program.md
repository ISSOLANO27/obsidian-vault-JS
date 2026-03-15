
```js
/*
   if (acresBox.value === "" || acresBox.value <= 0) {
      acresComplete = false;
   } else {
      acresComplete = true;
   }   
*/
   try {
      if (!(acresBox.value > 0)) throw "Enter a positive acrege";
      testFormCompleteness();
   } catch(error) {
      messageElement.innerHTML = error;
      messageElement.innerHTML = "";
   }

}
```

[what is wrong with simply using an if statement?] 

### What it was doing before..
#### verifyAcres()
We replaced the if else statements for a try catch. 
The try block first checks if the acres input is NOT greater than 0; Instead of using an if statement to include two conditions, empty, or negative number.

If the try fails, an exception is thrown and if a catch is not found it goes up the call stack until it finds a catch that specifies how to handle the exception.

the catch is found right away, but this may not always be the case, some ay be handled later by another function that is called and added in the call stack.

#### verifyMonths
We also use an if statement in the try block to set a condition for values that are between 1 and 12. No more no less.

If the condition passes the test function runs

otherwise,
we throw a string that describes what is causing the error.
That throw, finds the next catch.

The parameter can be anything that describes the exception. its is only a formal parameter [i think that is what is called., it acts as a placeholder.]

```js
function verifyMonths() {
 try {
   if (!(monthsBox.value >= 1 && monthsBox.value <= 12))
      throw "Enter months between 1 and 12";
   testFormCompleteness();
 } catch(error) {
   messageElement.innerHTML = error;
   messageHeadElement.innerHTML = ""; // Sets an empty heading and a message with the thrown error message.
 }
}
```


---
Back: [[Managing Errors]]