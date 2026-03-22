## “Build First, Attach Later”

> A **DocumentFragment** is a temporary container in memory

### Why use it?

- Build multiple nodes
- Avoid multiple reflows (performance boost)
- Attach everything at once
    
---
#### Example:

```js
let fragment = document.createDocumentFragment();  
  
for (let i = 0; i < 3; i++) {  
  let li = document.createElement("li");  
  li.textContent = "Item " + i;  
  fragment.appendChild(li);  
}  
  
document.querySelector("ul").appendChild(fragment);
```
---

👉 Result:

- All items added in one operation
    
- Faster, cleaner