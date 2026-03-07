===`objects[idref]`===

or 

===`object.idref`===

`object`
- reference to an HTML collection. 

`idref`
- Can be either an **[[index]] number** representing the position of the element within the collection **or** the value of the `id`. 

> The **first element** in the collection has an index value of `0`. The **second** element has an index value of 1

---
### Examples
#### If first Inline Image has this tag:
```html
<img src="logo.png" id="TiponLogo", alt="Tipton Turbines">
```
You reference with any of these expressions:
```css
document.images[0]
document.images["TiptonLogo"]
document.images.TiptonLogo
```
#### Referencing Other Element Collections
##### JavaScript Arrays

###### Length:
You can determine the number of elements within a collection with the `length` **property**

`document.images.length`

> The ordering of the elements within an HTML collection reflects the order of the element tags within the HTML file..


---
Back: [[Exploring HTML Collections]]