This means that unlike the + operator, which concatenates any string values, using the += operator with two string operands containing numbers results in a numeric value. 

For instance, the following code defines two variables with string values: x with a value of “5” and y with a value of “4”. In processing the third line of code, a **JavaScript interpreter first converts the strings to the values 5 and 4, respectively, then adds them, and then assigns the result**, the value 9, to the x variable.
```js
x = "5";
y = "4";
x += y; // a numeric value of 9 is returned for x. 
```
this reminds me that we had already seen #LooselyTyped #dynamicallyTyped . 


---
Back: [[Compound assignment operators]]

related:
[[IF Converting is NOT Passible]]


