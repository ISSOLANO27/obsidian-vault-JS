Because no two elements can share the same ID, HTML uses the class attribute to identify groups of elements that share a similar characteristic or property. 

The following h1 element and paragraph element both belong to the intro class of elements:

```css
<h1>class="intro">content</h1>
<p class="intro">content</p>
```

To select an element based on class value:

`elem.class`

---
If you want to apply it to all elements of any class, simply **omit** the element name.
```css
.intro {color: name;}
```

> An element can belong to several classes by including the class names in a **space separated list** in the class attribute.

---
back: [[Attribute Selectors]]

related:
- [[Table - Attribute Selectors]]