
Scroll bars for overflow content are usually placed vertically so that you scroll down to view the extra content. 

## You can scroll Horizontally nowrap
In some page layouts, however, you may want to view content in a horizontal rather than a vertical direction. You can accomplish this by adding the following style properties to the element:
```css
overflow: auto;
whitespace: nowrap;
```


The `white-space` property defines **how browsers should handle white space** in the rendered document. 

### Default whitespace behavior
1. The default is to collapse consecutive occurrences of white space into a single blank space

2. automatically wrap text to a new line if it extends beyond the width of the container. 

#### Keep inline content on a single line
However, you can set the white-space property of the element to `nowrap` to keep inline content on a single line, preventing line wrapping.  #askLater [When would this be useful?]

With the content thus confined to a single line, **browsers will display only horizontal scroll bars for the overflow content**. 

##### whitespace property
Other values of the white-space property include: #askLater [expand on these: how do they handle whitespace?]
- `normal` (for default handling of white space)
- `pre` (to preserve all white space from the HTML file)
- `pre-wrap` (to preserve white space but to wrap excess content to a new line).

---
Back: [[Handling Overflow]]