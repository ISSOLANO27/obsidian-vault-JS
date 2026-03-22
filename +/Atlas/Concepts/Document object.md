**Represents the entire content of the web page**. Text, graphics,  or other information displayed in the page of part of the `Document` `object`.

**Child objects:**
- HTML
- body
- input
- div


**Methods**
- [[Write() Method]] - Not part of the DOM tree in the same way as Elements

- Important distinction:
	- The DOM is the structured tree of element objects.
	- The `document` `object` is the top-level controller for that tree.

the DOM is not separate from the `document` object.

The DOM _is_ the object model. It’s the structured collection of objects that represent the page.

Think of it this way:

The browser loads HTML text.  
It builds a tree of objects in memory.  
That tree of objects = the DOM.

At the very top of that tree is one special object:

`document`

- [[Common DOMs]]
 [[gpt explanation on the DOM]]

