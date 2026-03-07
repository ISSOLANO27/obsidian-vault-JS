
### Iterating through the contents of an Array or HTML Collection
```js
for (let i = 0; i < objects.length; i++) {
	statements;
}
```
`objects` - referenced to either arrays or HTML Collection.

The **counter starts with a value of 0** (because 0 is the index of the first element in the list) with the loop continuing if the counter is less than the value of the length property. 

Recall that the index of **the last item in an array or collection will always be one less than the length value**. 

For example, an array with `100` items will have indexes that range from `0 up to 99`.

---
## Using `<=` on the `object.length`
Most make the mistake of setting the stopping condition `i <= object.length`, which causes an error since the last iteration will go beyond the last item in the array. #commonMistakes

The problem is that when since we use <= with length. length give you the number of values. If you include that last value, since we index at 0, the last element will return `undefined`. 

Correct way:
`i < arr.length`

---
Once you have a defined collection, you can work with individual collection objects as you would with individual array element

### Adding Event Listeners on HTML Collection `input`
```js
let allInputs = document.getElementsByTagName("input");
for (let i = 0; i < allInputs.length; i++) {
	allInputs[i].addEventListener("click", checkorder);
}
```



By applying this, whenever an `input` element in the document is clicked, the `checkOrder()` will run in response.

---
### Write game results into cells of the calendar table
```js
for (let = 0; i < gameDates.length; i++) {
	write a game result into a table celll
 }
```
`gameDates` - array that determines number of games


With each iteration of the loop, the following contents will be written into the table cell, matching the date on which the game was played: 

[so the p element would be placed in the for loop above right? This is what get iterated.. or am i way of in my understanding?] 
Each iteration:

- Looks at one game (index i)
- Gathers data from multiple arrays at the same index
- Builds a paragraph
- Inserts that paragraph into the matching table cell
    
So yes — the `<p>` element is created inside the loop.

Each iteration builds one paragraph for one game.
```js
<p>gameOpponents[i]<br>
gameResults[i]: (runsScored[i] - runsAllowed[i])
</p>
```

#### The Full structure
```js
for (let i = 0; i < gameDates.length; i++) {

   let tableCell = document.getElementById(gameDates[i]);

   let gameInfo =
      "<p>" +
      gameOpponents[i] + "<br>" +
      gameResults[i] + ": (" +
      runsScored[i] + " - " +
      runsAllowed[i] +
      ")</p>";

   tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
}
```
[[Data-Driven Element Selection]]

---
`gameOpponents` - an array that provides the opponent for a particular day
`gameResults` - an array that provides the results of the game
`runsScored` - an array that retrieves the number of runs scored by Tipton's opponent
`runsAllowed` - an array that retrieves the number of runs scored by Tipton's opponent

For example: **The Information on Tipton's first game**
```js
<p>
W: (2 - 1) 
</p>```
```

---

## To Match a Game to a Table Cell

Use the date stored in the `gameDates` array and match it to the `id` value of a table cell (**recall that each table cell has an `id` for a specific calendar date.**) 

So the table cell matching a game played on a specific date would be referenced using the this expression:
```js
let tableCell = document.getElmentById(gameDates[i])
```
[So instead of passing the id itself, we can call the arrays' index position and target specific table cells since they all have ids? ]


### Adding Content to the Table Cell

Table Cells Are Not Empty. Any content will have to be added to the HTML content already present in the cell instead of overwriting it. JS provides the following `insertAdjacentHTML()(position, text)` method to insert additional content into an element: #insertAdjacentHTML 
```js
element.insertAdjacentHTML(position, text)
```
`element` - the element into which the new content is inserted
`position` - location of the new content
`text` - text of the content

##### insertAdjacentHTML: position

-  "`beforeBegin`"—to insert new content directly **before the element’s opening tag**
- "`afterBegin`"—to insert new content directly **after the element’s opening tag**
- "`beforeEnd`"—to insert new content directly **before the element’s closing tag**
- "`afterEnd`"—to insert new content directly **after the element’s closing tag**





---
 For this application, you will insert the new content directly before each table cell’s closing tag, using a position value of "beforeEnd". [[Course Book Project]]

Put all of these pieces together in a new function named **showGames()** that will run when the page is loaded by the browser.

---
Skills at Work:  **Communicating the Structure of a Program with a _Flowchart_**
[please expand on this once we cover everything above.]

When designing a program that involves loops, especially a large and complex program, it can be challenging to explain the structure of the program and the relationships between its parts to other team members who might be working with you to create it. It’s common for programmers to create a visual representation to illustrate the parts of a program and how they fit together both before and during development. For loops, such diagrams often take the form of a flowchart, which shows program components as boxes of different shapes, with lines connecting those components that communicate with each other. A flowchart often includes arrows to indicate the direction that information flows between components. Although software is available to create professional-looking flowcharts, most programmers create flowcharts on white boards.





back: [[Working with Program Loops]]