[[Contextual Selectors]] can also be based on attributes and attribute values within elements. 

Two attributes, **id** and **class**, are often key in targeting styles to specific elements. 

Recall that the id attribute is used to identify specific elements within the document. To apply a style to an element based on its id, you use either the selector:  `#id`

or

`element#id`

Ids are suppose to be unique, either form is acceptable. including the element will give more clarity. #writingEffectiveCode 

```css
<h1 id="title">Tri and Succeed Sports</h1>
```

can be entered as either `#title` or `h1#title` in your CSS style sheet.

---
Back: [[Exploring Selector Patterns]]

related:
- [[Identifying Groups of Elements]]