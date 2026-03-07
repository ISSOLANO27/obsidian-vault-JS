You can search based on:
class attribute
```js
document.getElementsByClassName(class) 
document.getElementsByTagName(tag) 
document.getElementsByName(name)
```
---
`class` -  The value of the **class attribute**.
`tag` - Is the name of the **HTML tag**.
`name` - Is the value of the **name attribute**.

### To Reference the first h1 within the document
```js
document.getElementBytagName("h1")[0]
document.getElementByClassName("sideBar")[1] // Second Element belonging to the class
document.getElementBytagName("menuChoice")[2] // Third Element
```
---
## Notice that all methods start the same 

`document.getElement`
### plural form
with the phrase `document.getElements` (**plural**).

### singular form

As opposed with `document.getElementId()` method... (Uses singular)

This is because the singular form **returns only one object**, instead of an [[Exploring HTML Collections#HTML Collections]].

Careful not to use the singular form when searching through the DOM. #writingEffectiveCode #producesError 

---
 
 ALL 3 returns matching elements within the entire document.

## Return a Specific part of the Document
```js
object.objects
```
`object` 
Is an element that contains other elements and objects is a collection within that container.

`objects`
a collection within that container.

---
The following expression return the collection of paragraphs nested within the first table cell element of the web page. 
```js
document.getElementsByTagName("td")[0].getElementByTagName("p")
```
 


---
Back: [[Exploring HTML Collections]]

Common Mistakes:
- [[Working with Arrays and Indices]]

related:
- 