
In some of your applications you may need to create and move a copy of a node rather than the node itself. To create a node copy, apply the command:
```js
node.cloneNode(deep)
```

where **_node_** is the node to be copied and
**_deep_** is a Boolean value that is _true_ to create a [[deep copy]] that copies the node and all of its descendants 

or 

false to copy only the node and not any descendants. 

---
In the following code, the `mainCopy` node is a copy of all the content of the `mainElem` node, including any nested headings, paragraphs, text, inline image tags, etc.
```js
let mainElem = document.getElementBy("main");
let mainCopy = mainElem.cloneNode(true);
```

### Will copy all of the node’s DOM content
The `cloneNode()` method will copy all of the node’s DOM content, but it **will not copy any JavaScript properties attached to the node**. 

#### Cloning Will not copy Event handlers
For example, it will not copy event handlers, so those will have to added individually to any node copies.


---
Back: [[Restructuring a Node Tree]]