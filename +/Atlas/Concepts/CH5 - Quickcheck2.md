1. Where does the `appendChild()` method place nodes?
    The notes are always placed after the last child node of the parent node.

2. Provide code to create a copy of the rating node, including all the node’s descendants.
    ```js
    rating.cloneNode(true)
    ```

3. Provide code to repeat the `checkAnswers()` function every 10 seconds; store the time id in the variable `timeID`.
    ```js
    timeID = window.setInterval(checkAnswers, 10000);
    ```

4. Provide code to stop the `checkAnswers()` function from repeating.
    ```js
    clearInterval(timeID);
    ```
