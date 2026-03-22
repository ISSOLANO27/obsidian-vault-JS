
To complete the lightbox app, you will add a close button that removes the overlay from the web page, returning the user to the lightbox slideshow. To remove a node, apply the method:
```js
node.removeChild(old)
```
where _node_ is the parent node and _old_ is the child node that will be removed from the parent. Add a close button to the overlay and create an event handler that removes the overlay when that button is clicked.

---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]

related:
- [[Best Practices - Designing the Look of an App]]
- [[CH5 Quickcheck3]]