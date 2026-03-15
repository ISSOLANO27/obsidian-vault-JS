The try catch statement is not much help in managing user error because those would not be recognized as errors by the JavaScript interpreter. However, you can define your own errors called [[exceptions]] using the following throw operator:

```js
throw id
```


where _id_ is a **value or text string that that identifies the error**. The id will appear in the debugger console **as the explanation** for the error.

---
The following code uses the ** operator to calculate the square root of a given number.

While this is an illegal math operation for negative values, it is not a fatal error because the program will simply generate a `NaN` value and continue on. 

To create an exception for this event, the code **first tests whether number is less than zero**. If it is, the code will throw an exception, and **the program halts**; otherwise, the program continues as normal.
```js
let number = -9;
if (number < 0)
let sqrt = number**0.5;
window.alert("The square root of " + number is + " + sqrt);
```

Because number is negative in this example, the **debugger would stop at the throw statement**, writing the message “*Attempt to calculate the square root of a negative value*.” to the debugger console.

Thrown **exceptions can be combined with the try catch statement** to create a customized error response. 


---
The following code employs **a try catch statement with the throw operator to catch a user error** in which the value of the `IDBox` input box has been left blank.
```js
try {
   userID = document.getElementById("IDBox").value;
   if (userID === "") throw "Missing user ID"; // throw will look for the next catch in the stack.d
   window.alert("Your user ID is " + userID);
} 
catch (err) { // can be ANY name
   window.alert("You must enter a user ID");
}
```
If the `IDBox` control has been left blank, an exception is thrown, generating an alert box with the message “*You must enter a user ID*”. 

If `IDBox` is not blank, there is no error, and the program **displays an alert box showing the user ID**.

---


---
Back: [[Managing Errors]]