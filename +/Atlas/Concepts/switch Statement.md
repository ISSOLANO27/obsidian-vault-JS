
As the number of possible conditions increases, the entire if else if structure can become large and unwieldy. An alternative to a long list of else if conditions is the following switch statement:

```js
switch (day) {
   case "Friday": alert("Thank goodness it's Friday!"); break;
   case "Monday": alert("Blue Monday"); break;
   case "Saturday": alert("Sleep in today."); break;
   default: alert("Today is " + day);
}
```
> NOTE: Case labels must be discrete values and cannot use operators. Thus, **you cannot define a case label based on numeric ranges** like `< 20 or >= 10`. 
> 
> If you need a numeric range, use an else if construction instead of a switch statement.
> 

## Break Halts Execution

The **break** statement, marking the end of each case, is an optional keyword that halts the execution of the switch statement once a matching case has been found. 

For programs in which more than one label might match the expression, omit the break statements and the JavaScript interpreter will continue moving through the case labels, running all statements in which a match has been found. This situation is known as [[fallthrough]].

---
Back: [[Adding Decision Making to Your Code]]