You can combine variables with text strings or numeric value using expressions.

>**NOTE**:
> To assign a value to a variable, the value **must** be on the right side of the assignment operator and the variable on the left, as in the expression firstName = "Graham";. Reversing the order, as in the code `"Graham" = firstName;`
> 
> could produce an error in your script.

---

You can use the **+** operator with `document.write()` method to **combine a literal text string with a variable containing a numeric value**

```js
document.write("<p>Your sales total is $" + salesTotal + ".</p>");

// result: HTML code <p>your sales total is $47.58.</p> written to the web page.
```

---
Back:
- [[Building Expressions with Variables]]
related:
- [[expression]]
- [[operand]]
- [[operators]]
- [[literal]]
- [[Arithmetic Operations]]
