
An occurrence of an error is an event.

This means it can be managed with an **event handler** or and **event listener**.
```js
window.onerror = function;
```
or 
```js
window.addEventlistener("error", function)
```
function is the function is that will run whenever an error occurs; Anywhere within the program

#### For example
This run the `processErrors()` function in response to error occurring with the program or browser.

```js
windoe.addEventListener("error", processErrors)
```

> NOTE; Running the function is response to an error **will not fix the error**. The function's only purpose is to create a customized method of handling errors.


---
Back: [[Customizing Your Error Handling]]