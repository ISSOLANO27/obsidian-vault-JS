Another type of pseudo selector is a **pseudo-element**, which is an object that **exists only in the rendered page**.

`element::pseudo-element`

Example:
a `<p>` element that is marked in the HTML file

but

The first line of the paragraph IS NOT.

Same thing goes for the first letter of the paragraph; it is NOT a document element.

---

#### Pseudo-Elements

| Pseudo-Element     | Description                                  |
| ------------------ | -------------------------------------------- |
| ::[[first-letter]] | The first letter of the element text         |
| ::[[first-line]]   | The first line of the element text           |
| ::[[before]]       | Content inserted directly before the element |
| ::[[after]]        | Content inserted directly after the element  |

---
Back: [[Pseudo-Classes and Pseudo-Elements]]