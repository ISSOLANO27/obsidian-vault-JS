
## querySelectorAll()
You can define a node list **based on a CSS query** using the following `querySelectorAll()` method:
```
document.querySelectorAll(css)
```

where `css` is **the text of CSS selector**. #ch5askLater  [what is it referencing?]

For example, the following expression **creates a node list** by:
### Selecting all `<p>` element nodes belonging to the `review` class:
```js
document.querySelectorAll(p.review);
```

#### More Options 
The `querySelectorAll()`  method gives the programmer more options selecting elements than could be achieved by the `getElementsByClassName()` or `getElementsByTagName()` methods.

##### Do not Confuse these 2: 
However, the` querySelectorAll()` method creates a [[node list]] , not an HTML collection, and there are some important differences. [[NodeList vs HTMLCollection]]



JavaScript also provides the `querySelector()` method, which **returns the first element node that matches the CSS selector** rather than the complete node list. 



---
Back: [[Introducing Nodes]]
related:
- [[Programming Concepts - Node Lists VS HTML Collections]]