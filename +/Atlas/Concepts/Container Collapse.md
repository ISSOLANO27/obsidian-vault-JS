
Recall that a floated element is taken out of the document flow so that it is no longer “part” of the element that contains it. 

Literally it is floating free of its container. 

When every element in a container is floated, there is no content left. As far as the browser is concerned, the container is empty and thus has no height and no background to color, a situation known as **container collapse**.

---
  
What you usually want in your layout is to **have the container expand to surround all of its floating content**. 

One way this can occur is if the container is followed by another element that is displayed [only when the margins are clear of floats]. 

In that situation, the container’s height will expand up to that trailing element and in the process **surround its floating content**.

## Add placeholder element after the footer

The problem with the footer in the Pandaisia home page is that there is no trailing element—the footer is the last element in the page body. One way to fix that problem is to use the **after** pseudo-element to add a placeholder element after the footer. The general style rule is:
```css
container::after {
	clear: both;
	content: "";
	display: table;
}
```

`clear` property keeps this placeholder element from being inserted until both margins are clear of floats.


The element itself is a web table but contains an empty string so that no actual content is written to the web page.. 

That’s okay because **the mere presence of this placeholder element is enough** to keep the container from collapsing.


---
Back: [[Floating Page Content]]


[Search other ways to prevent container collapse...]