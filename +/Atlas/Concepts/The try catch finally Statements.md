
JavaScript supports the following optional finally clause to supplement exception handling:
```js
// Exception handling structure
try {
   // statements that might contain an error
}
catch (error) {
   // statements to respond to the error
}
finally {
   // statements to run with or without an error
}
```

Statements in the finally command block **are always run**, whether or not an error is found. 

The [[finally command block]] is often used to perform those tasks that are necessary even in the presence of an error. 

In the following code, an alert box with the Thank You message is **always displayed after the error checking is performed**.
```js
try {
   userID = document.getElementById("IDBox").value;
   if (userID === "") throw "Missing user ID";
   window.alert("Your user ID is " + userID);
}
catch (err) {
   window.alert("You must enter a user ID");
}
finally {
   window.alert("Thank You");
}
```

### You can have multiple catch statements within a program to deal with multiple types of thrown exceptions. 

Whenever a try statement throws an exception, the JavaScript interpreter executes the **nearest catch statement**. 


If a catch statement is not located within the construct that throws the exception, the JavaScript interpreter looks at the next higher levels of code for a catch statement **until it locates one**.


>**Every try statement must be followed by a catch or a finally statement or both**. 
>
>If the catch statement is omitted, the program **terminates** in the **presence of the error or exception** after it has run the commands in the **finally** statement. 
>
>If both are included, an error will cause the commands in the catch statement to be run followed by the commands in the finally statement. [explanation needed, why can it never be omitted? when does it terminate?] 


---
Back: [[Managing Errors]]