Assuming that the first element in an **array** or an **HTML collection** has an index number of 1 rather than 0 is a common programming error for beginners. #commonMistakes 

- If you are working with an array collection and are seeing results offset by 1 from what you expect, check that your code accounts for 0 as the first index number.

- Another common mistake is to **omit the index number** when using properties that should be applied to a specific element within a collection. For example, the expression
```js
document.getElementByTagName("input".checked)
```
This will result in an error because it attempts to apply the checked status to a collection of input elements. Instead, you must specify only a single element from the collection, as in the following expression that applies the checked status to the first input element:
```js
document.getElementTagName("input")[0].checked
``` 
#commonMistakes 

---
Back: [[Searching through the DOM]]