

### Methods like `getElementById()` are **not inside `<html>`**.

They belong to the **Document object**.

The DOM is not the HTML itself.  
The DOM is a JavaScript object representation of the HTML.

So your structure is closer to this:

```
window
  └── document
        └── <html>
              ├── <head>
              └── <body>
```

Important distinction:

- `<html>`, `<body>`, `<div>` are DOM nodes.
- `getElementById()` is a method of the `document` object.
    
When you write:
```js
document.getElementById("myDiv");
```
You are:

1. Calling a method on the `document` object.
2. That method searches through the DOM tree.
3. It returns a node (an element object).
    

---
### Arrays are **not part of the DOM itself**.

[Arrays are part of the JavaScript language].

But the DOM often returns array-like objects.

Example:
```js
document.getElementsByTagName("p");
```

This returns an **HTMLCollection**.

An HTMLCollection is:
- Array-like
- Has a `.length`
- Can be accessed with `[index]`
    

But it is NOT a true JavaScript array.

That’s a crucial distinction.

You cannot automatically use array methods like `.map()` or `.filter()` on an HTMLCollection unless you convert it:

```js
Array.from(document.getElementsByTagName("p"));
```
---
So here’s the clean insight you could say in class:

The DOM is an object-based representation of the HTML document.  
The `document` object provides methods that allow JavaScript to search, modify, and create elements within that structure.  
These methods return element objects or collections of elements.  
While those collections may look like arrays, they are actually HTMLCollection or NodeList objects, which are array-like but not true arrays.  
Arrays themselves belong to JavaScript, not the DOM, but they are often used to work with DOM collections.

Now let’s go one level deeper.

Everything starts with `window`.

`window` is the global object in the browser.

Inside `window` lives:

- `document`
    
- `console`
    
- `alert`
    
- `setTimeout`
    
- etc.
    

The DOM is specifically the `document` and everything under it.

So the hierarchy is:

JavaScript language (arrays, functions, objects)  
↓  
Browser environment (window object)  
↓  
Document object (DOM root)  
↓  
HTML element nodes

Arrays do not “fall under the DOM.”

They exist independently.  
They just interact with DOM data.

Final clean mental model:

DOM = structured object tree representing HTML.  
JavaScript = language used to manipulate that tree.  
HTMLCollection = DOM collection object (array-like).  
Array = native JavaScript data structure.

Once you separate those layers in your mind, everything becomes much clearer.