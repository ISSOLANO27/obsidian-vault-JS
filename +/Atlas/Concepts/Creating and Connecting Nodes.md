Like objects and variables, nodes **can be created** using JavaScript and **stored as variables.** 

The methods employed by JavaScript to **create or copy nodes** are described in [[Create and Copy Nodes Table]]

| EXPRESSION                        | DESCRIPTION                                                                                                             |
| --------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| document.createAttribute( _att_ ) | Create an attribute node with the name _att_                                                                            |
| document.createComment( _text_ )  | Creates a comment node containing the comment _text_                                                                    |
| document.createElement( _elem_ )  | Creates an element node with the name _elem_                                                                            |
| document.createTextNode( _text_ ) | Creates a text node containing the text string _text_                                                                   |
| [[_node.cloneNode_ ( _deep_ )]]   | Creates a copy of _node_ , where _deep_ is true to copy all the node’s descendants or false to copy only _node_ itself  |
For example, the following code creates an element node for an h1 heading and a text node containing the text string “My Slideshow”:
#### Creating mainHeading:
```js
let mainHeading = document.createElement("h1");
let headingText = document.createTextNode("My slideshow");
```
---

## Creating Document Fragment
Nodes can be combined to create a [[document fragment]]. 

The document fragment resides **only within computer memory** and is not yet part of the web page. [[Combine Replace Remove Nodes Table]] describes the JavaScript methods used to `combine, replace, or remove nodes`.

| EXPRESSION                                  | DESCRIPTION                                                                                                                                                                                                                                                       |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| _node_ .appendChild( _new_ )                | Appends _new_ node as the last child of _node_                                                                                                                                                                                                                    |
| [[node.insertBefore( new , child]]) | Insert _new_ node as a sibling directly before _child_ node (if no _child_ node is specified then _new_ node is added as a sibling after the last child node) [So if there's no sibling Before the ones you're referring to, what happens, give a visual example] |
| _node_ .removeChild( _old_ )                | Remove _old_ node from _node_                                                                                                                                                                                                                                     |
| _node_ .replaceChild( _new_ , _old_ )       |                                                                                                                                                                                                                                                                   |

#### Appending the `headingTxt` node as a child of the `mainHeading` node:
```js
mainHeading.appendChild(headingText);
```
##### resulting in the following document fragment:
```html
<h1>My slideshow</h1>
```
To place `mainHeading` into the web document it **must be attached to a node** already present in that document’s node tree. 

#####  div element with the id “intro”
the `mainHeading` node could be attached to that element using the following code: 
```js
let introDIV = document.getElementById("intro"); // 🔥 introDIV IS a node (an element node)
introDIV.appendChild(mainHeading); 
```
##### resulting:
```html
<div id="intro">
	<h1>My slideshow</p>
</div>
```
### Breakdown:

|Variable|What it is|
|---|---|
|`introDIV`|Reference to an element node already in DOM|
|`mainHeading`|Node you CREATED|
|`appendChild()`|Method that LINKS nodes in the tree|

Proceeding in this fashion, you can continue to append nodes to each other and to elements within the web page, **creating an elaborate hierarchy of parent and child** elements.

>NOTE:  Nodes support the `innerHTML` and `textContent` properties so you can always [[add HTML code and text to a node as a quick way of creating a document fragment]]. 

---
Back: [[Introducing Nodes]]