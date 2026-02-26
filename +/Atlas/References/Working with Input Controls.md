Recall: [[Input Properties]]

The value inserted into an input control can be referenced using the following `value` property. `object.value`
```js
document.getElementById("photoNum").value
```

---
Input control `values` are **text strings even if they appear as numbers**.  

**JS will concatenate two strings**
If you use the `+` operator to add the values of two input controls, JavaScript will combine the two text strings and not add their numeric values. #beCareful

You can **convert a text string by enclosing the text within** the `Number()` function as in the expression `Number("12.3")`, which returns the numeric value 12.3. #convertTextToNum


---
Back: [[Using Expressions with Web Form Controls]]


