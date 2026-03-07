The first selector pattern you’ll examine is a contextual selector, which specifies the context under which a particular page element is used. Context is based on the hierarchical structure of the document, which involves the relationships between a parent element containing one or more child elements and within those child elements several levels of descendant elements. A contextual selector relating a parent element to its descendants has the following pattern

`parent decendant { styles }`

Example:
Setting the text color to H1 heading to red but only when those headings are nested somewhere within the header element:
```css
header h1 {
	color: red;
}
```
---
Contextual selectors follow the **general rule** discussed in the last session; that is, `the more specific style is applied in preference to the more general rule`. 

For instance, the following style rules would result in **h1 headings within the section element** being displayed in **red** while all other h1 headings would appear in **blue**:
```css
section h1 {color: red;} /*applied in preference*/
h1 {color: blue;}
```
---

![[Pasted image 20260226135241.png]]

>NOTE:
	Remember that, because of style inheritance, **any style applied to an element is passed down the document tree**. Thus, a style applied to a `header` element is automatically passed down to elements contained **within that header** unless that style conflicts with a more specific style.

---
back: [[Exploring Selector Patterns]]
related:
- [[Descendant element does not have to be a direct child of the parent]]
- [[Table- contextual selectors]]
- [[Wildcard selector]]
- [[sibling selectors]]

[[Reference - Using Contextual Selectors]]