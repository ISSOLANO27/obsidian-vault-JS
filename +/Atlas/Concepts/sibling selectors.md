select elements based on the elements that are [[adjacent]] to them in the document hierarchy. 


The following style rule uses the `+` symbol to select the `h2` element, but **only if it is immediately preceded** by an `h1` element:
```cs
h1+h2 {color:blue;}
```

On the other hand, the following style rule uses the ~ symbol to select any h2 element that is preceded (but, not necessarily immediately) by an h1 element:
```cs
h1 ~ h2 {color: blue;}
```
---
Back: [[Contextual Selectors]]

