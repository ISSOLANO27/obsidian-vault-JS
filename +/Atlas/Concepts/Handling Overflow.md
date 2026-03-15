The infographic is long because it displays several information boxes. If you reduce the height of the infographic you run the risk of cutting off several of the boxes that will no longer fit within the reduced infographic. However you can control how your browser handles this excess content using the following overflow property
```css
overflow: type;
```


where `type` is `visible (the default), hidden, scroll, or auto`. 

#### visible
A value of `visible` instructs browsers to increase the height of an element to fit the overflow content. 

#### hidden
The `hidden` value keeps the element at the specified height and width, but cuts off excess content. 

#### scroll
The `scroll` value keeps the element at the specified dimensions, but adds horizontal and vertical scroll bars to allow users to scroll through the overflowed content. 

#### auto
Finally, the `auto` value keeps the element at the specified size, adding scroll bars only as they are needed.


examples of the effects of each overflow value on content that is too large for its space.
![[Pasted image 20260315023019.png]]

CSS also provides the overflow-x and overflow-y properties to handle overflow specifically in the horizontal and vertical directions.




---
Back: [[Session 3.3 - Layout with Positioning Styles]]
related:
- [[Reference - Working with Overflow]]
- [[Insight - Managing White Space with CSS]]