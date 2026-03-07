As with program loops, you can nest decision-making statements within one another, creating a series of conditions that all must be true before an action is taken. This type of structure is called a [[nested decision-making structure]]. The following code shows an example of nested if statements:

```js
if (day === "Friday") {  
if (time === "8am") {  
window.alert("Start of the last day of the week.");  
} else if (time === "5pm") {  
window.alert("Time to start the weekend!");  
} else {  
window.alert("A few more hours until the weekend.");  
}  
} else if (day === "Monday") {  
window.alert("Start of another work week.");  
} else {  
window.alert("Have a great day!");  
}
```
In this example, **if the day is "Friday"**, one of 3 possible messages will be displayed based on the value of the time variable; otherwise two possible messages will be displayed depending on whether the day is "Monday" or another day.

>NOTE: With nested statements, it is very easy to lose track of the opening and closing braces. Mismatching the braces will most likely result in an error. To assist you, most code editors will include visual clues matching opening and closing braces. #commonMistakes 


---
Back: [[Adding Decision Making to Your Code]]