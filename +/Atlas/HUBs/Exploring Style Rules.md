If the element tag is the building block of the HTML file, then the style rule, which defines the styles applied to an element or group of elements, is the building block of the CSS style sheet. 

Style rules have the general form
```css
selector {
	property1: value1;
	property2: value2;
}
```
```css
h1 {
	color: red;
	text-align: center;
}
```

`Selectors` can also be entered as **comma separated values**. `h1, h2 {}`

>Css **ignores use of white space**, so you can enter the style more compactly in a single line. Sure you save space, but entering each property on a separate line makes the code easier to read and build. #writingEffectiveCode 

---
Back: [[Tutorial 1_Session 2.1 CSS Styles and Colors]]

related:
- [[Browser Extensions]]
- [[Embedded Style Sheets]]
- [[Inline Styles]]
- [[Style Specificity and Precedence]]
- [[Style Inheritance]]
- [[Browser Developer Tools]]