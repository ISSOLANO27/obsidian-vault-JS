1. Provide the code to reference the last child element of the element with the id “main”.
    ```js
    document.getElementById("main").lastElementChild
    ```
2. What properties would you combine to reference the “cousin” of a node (where cousin refers to the first child of the previous sibling of the parent of node)?
    ```js
    node.parentNode.previousSibling.firstChild
    ```
3. Provide code to create a span element node named rating belonging to the “review” class.
    ```js
    let rating = document.createElement("span");
    rating.className = "review";
    ```
4. Provide code to append the rating element node to a div element with the id “reviews”.
    ```js
    doocument.getElementById("reviews").appendChild(rating);
    ```
5. Provide code to change the font size of the rating element to 1.2em.
```js
rating.style.fontSize = "1.2em";
```