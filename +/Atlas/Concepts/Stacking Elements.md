Positioning elements can sometimes lead to objects that overlap each other. By default, elements that are loaded later by the browser are displayed on top of elements that are loaded earlier. In addition, elements placed using CSS positioning are stacked on top of elements that are not. To specify a different stacking order, use the following z-index property:
```css
z-index: value;
```

where _value_ is a positive or negative integer, or the keyword auto. 

Objects with the highest z-index values are placed on top of other page objects. A value of auto stacks the objects using the default rules.
![[Pasted image 20260315030022.png]]


The z-index property works only for elements that are placed with absolute positioning. Also, an element’s z-index value determines its position relative only to other elements that share a common parent; the style has no impact when applied to elements with different parents. 

This shows a layout in which the object with a high z-index value of 4 is still covered because it is nested within another object that has a low z-index value of 1.
![[Pasted image 20260315030048.png]]

You do not need to include the z-index property in your style sheet because none of the elements in the infographic page are stacked upon another.

---
Back: [[Session 3.3 - Layout with Positioning Styles]]
related:
- [[Proskills - Problem Solving -- Principles of Design]]