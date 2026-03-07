A great challenge for any web developer is ensuring that program code is supported by the browser. 

Older browser versions may not recognize the latest enhancements made to ECMAScript, and customers running those browsers will be faced with an application that fails due to its lack of support. 

If you feel that a feature of your code might not be universally supported, you can [add a browser test confirming that the feature is recognized by the JavaScript interpreter] and providing alternate statements if it is not. The general syntax is:

```js
if (feature) {
	statements that use the feature
} else {
	statements that use replacement code
}
```

---

where _feature_ is a JavaScript object, property, or method that should be tested for browser support. 

If the feature returns true, you can apply statements that use the feature; 

but if the condition returns a falsy value (such as undefined), you can **supply an alternate set of commands** that use a different feature that is supported.

For example, the method `find()` is an [[Array Methods]] that locates the first element in array returning a true value from a callback function. 

However, the method was introduced in 2015 with ES6 and thus might not be supported by some older browsers. The following code shows how to conduct a browser test for the find() method in a program that analyzes customer orders:
```js
// array of order ids
let orders = ["33-104", "21-098", "88-001", "14-791"];

// find the first order that has not shipped
if (orders.find) {
   // the find method is supported by the browser
   let firstUnshipped = orders.find(unshipped);
} else {
   // alternate code in place of the find method
}

function unshipped(arrValue) {
   // callback function to determine whether an order has shipped
}
```
If the expression orders.find is not recognized, the JavaScript interpreter will return the falsy value undefined and the test condition fails so that the else command block is executed with an alternate set of commands; but if the test condition is true, the find() method is applied to accomplish the task.

Browser testing is often used to ease the transition into new ECMASCript features, so that the most current features are applied where supported and older features are used where needed. As newer features become more widely supported, developers can simplify their code by removing the browser test and the alternate set of instructions. Throughout the years, many statements using outdated methods have been winnowed away in this fashion, resulting in faster, more efficient code.

---
Back: [[Adding Decision Making to Your Code]]