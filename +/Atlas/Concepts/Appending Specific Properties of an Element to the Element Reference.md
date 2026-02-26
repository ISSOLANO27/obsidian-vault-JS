This allows you to **retrieve information** about an element or **change the values** assigned to its attributes. 

Suppose you you have an `input` with an `id` value `firstName`; You could change the value of the `input` element using this statement:


```js
//To create a variable that references the element with its id value use:
let fName = document.getElementById("firstName");

```
Now you have a variable called fName..
##### This gives you a handle to the actual HTML element in memory


From there you could append properties to that reference like this:

```js
fName.value = value;
```
```js
document.getElementBYId("firstName").value = value;
```

[[GPT explanation]]

back: 
- [[Referencing Web Page Element]]
