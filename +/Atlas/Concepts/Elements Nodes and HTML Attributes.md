## Enter the attribute and its value directly as a property
Attributes are considered nodes and JavaScript supports a wealth of tools for working with attribute nodes, but it is often **easier to enter the attribute and its value directly as a property** of a node. 

Every HTML attribute has a corresponding node property. 

For example, the following code **attaches the id property with the value “main”** to the `mainHeading` node (created previously:) [[Creating and Connecting Nodes#Creating mainHeading]].
```js
mainHeading.id = "main";
```

resulting in the following HTML content:
```html
<div id="intro">
	<h1 id="main">My slideshow</h1>
</div>
```

### Use the `src` property the same way
In the same way, you can use the `src` property to add a `src` attribute to the element node for an inline image or the `href` property to define the `href` attribute for the `<a>` tag. 

### `class` is a reserved JavaScript keyword
One exception to this approach is HTML’s class attribute. 

Because `class` is a reserved JavaScript keyword, it **cannot be used as a property of an element node**. 

### `className` Property
Instead, JavaScript uses the `className` property as in the following example that **sets a value for the class attribute** of the `mainHeading` element node:
```js
mainHeading.className = "lightbox";
```


resulting in the following modification to the `<h1>` tag:
```html
<div id="intro">
	<h1 id="main" class="lightbox"></h1.
</div>
```

### `classList` property
A toolbox for managing classes individually

A similar property to the `className` property is the `classList` property, which is **used with HTML elements associated with more than one class**. 
```

```

With the `classList` property you can `add, remove, or replace` `class` **values** from **an element with multiple classes**. 

---
Back: [[Introducing Nodes]]