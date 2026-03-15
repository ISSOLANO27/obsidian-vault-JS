
## When messages are not enough..

If you are unable to locate a bug in your program by using error messages, or if you suspect a logic error (which does not generate error messages), then you must trace your code. [[Tracing]] is the examination of individual statements in an executing program. 

For example, the following function calculates weekly net pay by adjusting the gross pay for taxes and withholdings. *There are no syntax errors*, but the function returns a value of `$171,072` instead of the correct value, `$485`.

```js
function calculatePay() {
   let payRate = 15;
   let numHours = 40;

   let grossPay = payRate * numHours;

   let federalTaxes = grossPay * 0.07;
   let stateTaxes = grossPay * 0.05;

   let socialSecurity = grossPay * 0.06;
   let medicare = grossPay * 0.015;

   let netPay = grossPay - federalTaxes;
   netPay -= stateTaxes;
   netPay *= socialSecurity;
   netPay *= medicare;

   return netPay;
}
```
The function obviously contains one or more logic errors. 

## Showing partial results with Alert Boxes
One method of tracing the errors is to **display alert boxes**, using the `window.alert()` method **at different points in the code**, showing partial results of the function. 

### everything pauses
Each time the JavaScript interpreter encounters the `window.alert()` method, it **pauses the program** to display contents of the alert box to the user. 

## Break it down in sections
The important goal of this technique is to **take a long and complex program and break it into discrete sections of a few lines**, which you can then examine in detail to discover the error. 

## They eventually come down
Once you have confirmed that one section of the code is working correctly, you can **remove** the alert boxes in that section and focus on other sections.

---
> NOTE:  When you use the alert box approach, **include the variable name alongside the variable values**, so you will be able to interpret the results of your code.

## Limitations of Alert boxes
Using alert boxes to trace the progress of your program is a fast and easy approach to debugging, but there are **several limitations** with this method:

- Alert boxes interfere with the normal operation of the code and must be deleted after their use.
    
- Alert boxes do not perform well in tracing a long sequence of operations. Imagine displaying an alert box for each iteration in a for loop that goes through hundreds of iterations.
    
- You cannot compare the contents of one alert box with subsequent boxes, because closing the alert box removes it from the browser window.

---
Back: [[Tracing Error to Their Source]]

