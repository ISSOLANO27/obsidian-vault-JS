In fact, it can appear several levels below the parent in the hierarchy. 

This means that the style rule in [[Contextual Selectors]], matches the h1 element in the following HTML code:
```css
<header>
	<div>
		<h1>Tri and Succeed Sports</h1>
	</div>
</header>
```
The `h1` element is a direct child of the `div` element; but, because it is still a descendant of the header element, the style rule **still applies**.

---
