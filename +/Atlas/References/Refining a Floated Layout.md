
When the total width of floated objects exceeds the width of their parent, **excess content is automatically wrapped to a new row**. Even a small increase would cause the total width of the two columns to exceed 100% and, as a result, the right column move to a new row.

`box-sizing: type`

value: 
- content-box
- border-box
- inherit

To keep floats within the same row, you have to understand how CSS handles widths. Recall that [block elements are laid out according to the box model], in which the content is surrounded by the padding space, the border space, and finally the margin space. 
By default, browsers measure widths using the [[content box model]].

CSS also supports the [[border box model]].

>Many designers prefer to use the border box model in page layout so that there is no confusion about the total width of each element.
---

Back: [[Floating Page Content]]