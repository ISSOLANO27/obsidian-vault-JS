Each **element, attribute, comment, processing instruction, or text string** within a web document is a distinct entity known as a node. For example, the following fragment of HTML code consists of two nodes—one node for the h1 element and one node for the text string “My Slideshow” contained within that element.



In the **Document Object Model**, nodes are organized into a hierarchical structure called a node tree. 

shows the representation of the node tree for a sample HTML file.
![[A Node Tree.png]]


Nodes in the node tree have a familial relationship; Each node can be a parent, child, and/or sibling of other nodes. 


In the node tree shown;
The parent of the body node is the html node, and the parent node at the top of the node tree is known as the `root node`. 

#### The body element has two child nodes: 
an h1 element and a paragraph (p) element. The h1 element and the paragraph element are siblings of each other because they share a common parent.

---
>NOTE: The root node can be referenced using the `documentElement` object. The page body itself can be referenced using the `document.body` object.
---

Each of these familial relationships can be referenced using the JavaScript properties shown in the [[Node Relationship Table]]:

| EXPRESSION            | DESCRIPTION                                                         |
| --------------------- | ------------------------------------------------------------------- |
| _node_ .firstChild    | The first child of _node_                                           |
| _node_.lastChild      | The last child of _node_                                            |
| _node_ .childNodes    | A node list of all nodes which are direct children of _node_        |
| node.previousSibling  | The sibling listed before _node_ on the same level in the node tree |
| _node_ .nextSibling   | The sibling listed after _node_ on the same level in the node tree  |
| _node_ .ownerDocument | The root node of the document                                       |
| _node_ .parentNode    | The parent of _node_                                                |

## Examples
### To reference the parent of a node WITHIN the node tree
```
node.parentNode
```
### To go 2 levels up ("grandparent")  
#### Add another `parentNode` property to Expression:
```
node.parentNode.parentNode
```
### To go to an "aunt or uncle" node
#### Go up to the Parent Node and move to either Sibling:
```
node.parentNode.previousSibling
node.parentNode.nextSibling
```

By combining the properties listed in [[Node Relationship Table]], you can **start from any node in the node tree** and navigate to **any other node**. 

## You can Reference a Collection of Nodes
Nodes can also be referenced as part of collection within a [[node list]]. 

To references a collection of all nodes that are children of the _node_ object:
```
node.childNodes
```

## Nodes and Arrays and HTML Collection Oh My..
As with arrays and HTML collections, a node list is indexed starting with an index of `0` and the **total number of nodes** within the list indicated by the `length` property. 

Both of the following expressions reference the first child node of its parent: #HTMLCollections #Array #ch5askLater 
```js
node.firstChild // gets directly gives you the first node; even whitespace
node.childNodes[0] // On its own it returns a collection of all types node.chileNodes 

//[0] gets the first item in that list.
```
[[Are these the same]]

---

## 🔥 Node properties are too general — Element properties are more precise
they grab **everything**, not just elements

The properties in [[Node Relationship Table]] make no distinction between nodes that represent elements and nodes that represent **text strings, comments, and other types of nodes [[what other type of Nodes]] in the node tree**. Most applications are concerned only with **element nodes**. To work directly with those, JavaScript provides the properties listed in [[Element Nodes Table]]. 

[[What is wrong with the ones in the Node Relationship Table -  Why do programmers prefer the element Nodes]]
#### Element Nodes

| EXPRESSION                     | DESCRIPTION                                                       |
| ------------------------------ | ----------------------------------------------------------------- |
| _node_ .children               | A node list of all elements which are direct children of _node_   |
| _node_ .firstElementChild      | The first element within _node_                                   |
| _node_ .lastElementChild       | The last element within _node_                                    |
| _node_ .previousElementSibling | The sibling element immediately prior to _node_ in the node tree  |
| _node_ .nextElementSibling     | The sibling element immediately following _node_ in the node tree |
| _node_ .parentElement          | The parent element of _node_                                      |


One of the reasons to use nodes to create page content instead of using a property like `innerHTML` is that **nodes provide the ability to create, add, remove, and rearrange elements within the node tree**, giving the programmer control over not just the **content** of the web document but also its **structure**. [[so it is safe to say that innerHTML probably a better fit for  static applications- Something you can expect to edit very often]]



---
Back: [[Introducing Nodes]]
related:
- [[Common Mistakes - Referencing Child Elements]]