As your program runs, you can trace the changing values in the program by writing or **logging** those values in the console log with the following method:
```
 console.log(text)
```

where `text` is a text string that will be written **into the console**, which can then be viewed **within the debugger**. [viewed where]

##### how to use the console log to locate the error in the program that incorrectly calculates take-home pay after adjusting the gross pay for taxes and other withholdings.
```js
function calculatePay() {
   let payRate = 15;
   let numHours = 40;

   let grossPay = payRate * numHours;
   console.log("grossPay = " + grossPay); // Verifies grossPay

   let federalTaxes = grossPay * 0.07;
   let stateTaxes = grossPay * 0.05;
   let socialSecurity = grossPay * 0.06;
   let medicare = grossPay * 0.015;

   let netPay = grossPay - federalTaxes;
   netPay -= stateTaxes;

   console.log("grossPay minus taxes = " + netPay); // Verifies netPay after paying state taxes

   netPay *= socialSecurity;
   netPay *= medicare;

   console.log("grossPay minus taxes and withholdings = " + netPay); // verifies net pay after withholdings are deducted.
   return netPay;
}

calculatePay();
```

 ##### Remove the logs for Speed

 Because the console log is **hidden in the debugger user** [where?, is this the debugger from my first question?], you can leave the console.log commands in your program; however you might want to remove them to **speed up the operation of your code**, especially if your app involves processing **hundreds or thousands** of statements.


#### Note

When using the `console.log()` method to trace bugs, it can be helpful to use a [[driver program]], which is a simplified, temporary program that is used for **testing functions and other code**. A driver program is simply a JavaScript program that contains only the code you are testing. 

Driver programs **do not have to be elaborate**; they can be as simple as a single function you are testing. 

This technique allows you to isolate and test an individual function without having to worry about web page elements, event handlers, global variables, and other code that complete your program’s purpose.

---
Back: [[Tracing Error to Their Source]]

related:
- [[`window.alert()` Vs `console.log()`]]

