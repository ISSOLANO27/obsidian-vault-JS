used to **combine style rules from several style sheets into a single file**. 

For example, an online store might have one style sheet named `basic.css` containing all of the basic styles used in every web page and another style sheet named `sales.css` containing styles used with merchandise-related pages. The following code imports styles from both files:
```css
@import url(basic.css);
@import url(sales.css);
```

---
Using multiple `@import` rules in a CSS file has the same impact as adding multiple link elements to the HTML file. 

One **advantage** of the @import rule is that it **simplifies** your HTML code by placing the decision about which style sheets to include and exclude in the CSS file rather than in the HTML file. 

---
Back: [[Creating a Style Sheet]]