The `content` property can also be used to insert an attribute value into the rendered web page through the `attr()` function.

`content: attr(attribute)`

`attribute` - attribute from selected element.

## Adding `attr()` to add URL of ANY hypertext link to the link text..

```css
a::after {
	content: "( " attr(href) ")";
}
```
---
Back: [[Generating Content with CSS]]
related: 
