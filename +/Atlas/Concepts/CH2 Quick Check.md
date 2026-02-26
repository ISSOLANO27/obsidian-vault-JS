1. [What is the difference between a named function and an anonymous function?]
>A named function is a set of related statements that is assigned a name. You can use this name to reference, or call, this set of statements in other parts of your code. An anonymous function, on the other hand, is a set of related statements with no name assigned to it. The statements in an anonymous function work only in a single context—the place in the code where they are located.
    
2. [What is a command block?]
    
>A collected group of JavaScript statements enclosed within a set of opening and closing curly braces.
    
3.  [Provide an expression to call the findSqr() function using 10 as the parameter value.]

> `findSqr(10)`
    
4. [What is the difference between the [capture] phase and the [bubbling] phase for an event occurring within a website?]
    
>Under JavaScript’s event model, an event like click is first tracked in the capture phase, moving down the object hierarchy from the most general object (the browser window) down to the specific (the figure itself). The capture phase is followed by the bubbling phase as the event moves back up the object hierarchy ending with the browser window.
    
5. An HTML file contains the following tag:
    ```js
    input type="button" value="Submit  id="SubmitButton" />
    ```
    [Provide the code to run the submitOrder() function in response to the user clicking this input button using the following approaches]: as a **HTML attribute**, as an **object property entered as an event handler**, and as an **event listener (during the bubbling phase)**.

```html
<!-- HTML attribute -->
<input type="button" value="Submit" id="SubmitButton"
       onclick="submitOrder()" />
```
```js
// Object property

document.getElementById("SubmitButton").onclick = submitOrder;
```
```js
// Event listener
document.getElementById("SubmitButton")
        .addEventListener("click", submitOrder);
```
       