highest order or precedence.

Added as attributes of specific elements within the HTML file. 

>The use of embedded styles and inline styles is not considered best practice because it violates one of the basic tenets of HTML: that HTML files should only describe the content and structure of the document and not the design itself. 

superseded by: Nothing..

---
back: [[Types of Styles]]

---

### Browsers Care Less about Inline Styles
Inline styles are the last styles that are interpreted by the browser. 

They are applied directly to specific elements:
```cs
<element style="property1: value1; property2: value2;>
	content
</element>

<h1 style="color: red; text-align: center;">
	Tri and Secceed Sports
</h1>
```


This style applies only to this particular `h1` heading and **not to any other h1 heading on the page or in the website**. 

The **advantage** of inline styles is that it is clear exactly what page element is being formatted;

*however*, 
inline styles are [not recommended] in most cases because they make it **difficult to manage** your website design. 

For example, if you used inline styles to format all of your headings, you would have to locate all of the h1 through h6 elements in all of the pages within the entire website and add style attributes to each tag. 

This would be no small task on a large website containing hundreds of headings spread out among dozens of pages. Likewise, it would be a nightmare if you had to modify the design of those headings at a later date. Thus, the recommended practice is to always use external style sheets that can be applied across the entire website.

---
Back: [[Exploring Style Rules]]