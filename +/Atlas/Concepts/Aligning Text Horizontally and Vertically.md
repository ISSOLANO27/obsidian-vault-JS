Text can be aligned horizontally or vertically within an element. To align the text horizontally, use the following `text-align` property:

`text-align: alignment`

alignment:
- left
- right
- center
- justify

[[Vertical-Align]]

instead of keywords,

you can specify a **length** or a **percentage** for an element to be vertically aligned relative to the surrounding content #relativeToSurroundingContent

`vaertica-align: 50%;`

---

> Note: The **subscript** and **superscript** styles lower or raise text vertically, but do not resize it. To create true subscripts and superscripts, you also **must reduce the font size.** #askLater 


## **A negative value drops the content**: 

For example, the following style **drops the element an entire line** height below the baseline of the current line:

`vertical-align: -100%;`

---
back: [[Working with Font Styles]]