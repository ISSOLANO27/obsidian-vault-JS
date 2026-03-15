

## 1. Display the value of `orderCost` in an alert box

```javascript
alert(orderCost);
```
This opens a browser alert window showing the value stored in the `orderCost` variable.

---
# 2. Write the value of `orderCost` to the console log
```javascript
console.log(orderCost);
```
This prints the value of `orderCost` in the browser’s developer console.

---
# 3. Three reasons to use `console.log()` instead of `alert()`

### 1. Alert boxes interrupt program execution
Alert dialogs pause the program and require the user to manually close them before the program continues.
### 2. Alerts are inefficient for tracing many operations
If you are debugging loops or long sequences of code, an alert box would appear repeatedly.

Example problem:
```javascript
for (let i = 0; i < 100; i++) {
   alert(i);
}
```
You would have to close **100 alert windows**, which makes debugging slow and frustrating.

---
### 3. Alert messages disappear after closing

Once an alert box is closed, the information is gone. You cannot compare earlier values with later ones.

With `console.log()` you can see a **history of all outputs** and compare them easily.

Example:
```javascript
console.log("Iteration:", i);
```
The console keeps every log entry visible.

---

# 4. Why comment out sections of code during debugging?

You comment out sections of code that you **know are working correctly** in order to isolate the part of the program causing the error.

Example:
```javascript
// calculateTaxes();
// calculateShipping();

calculateTotal();
```
By temporarily disabling working code, you reduce the area where the bug might exist, making it easier to trace the problem to its source.

---
# Key Idea from this Section

Debugging often involves **isolating and tracing program behavior**. Common techniques include:

- `console.log()` to observe variable values
- commenting out working code to narrow down errors
- examining program flow step by step

These methods help developers identify where and why a program is producing incorrect results.

---

If you want, I can also give you the **three console.log patterns professional developers use most** when debugging JavaScript. They make debugging far clearer than what most textbooks show.