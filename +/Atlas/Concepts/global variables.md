Accessible within **any command block or function** in the program:
```js
let user = "Dawson"; //variable user is Global
function showUser() {
	document.write(user); //writes Dawson
}
```

>Global variables are fine for smaller applications developed and maintained by a single programmer. They make it **easier to share data between functions**, freeing the programmer from having to declare variables within every function and command block. 
>
>However, their use is strongly *discouraged* for larger applications, especially for applications that are managed by a team of programmers. #writingEffectiveCode 
>
>[[The Problem with Using Global]] 


### Advantages
when the company changes its rates in the future, the programmer maintaining this application will only **need to change these constant values once** in the code and not every time they’re used in a calculation or expression.

