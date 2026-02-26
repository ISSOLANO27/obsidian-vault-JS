The problem with **no Id on div elements** is that one designer might use "heading" or "top". These inconsistencies makes it harder for [[Search Engines]] to identify the page's main topics. #writingEffectiveCode 

Take advantage of the Sectioning-Semantic Elements as their tag name indicates its purpose leading to greater uniformity in how they are designed and interpreted. #sectionElements 

5.0
```html
<header></header>
<nav></nav>
<section></section>
<aside></aside>
<footer></footer>
```
vs

4.0
```html
<div id="header"></div>
<div id="nav"></div>
<div id="section"></div>
<div id="aside"></div>
<div id="article"></div>
<div id="footer"></footer>
```

