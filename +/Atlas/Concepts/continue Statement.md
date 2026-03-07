The continue statement is like the break statement except that instead of stopping a program loop altogether, the **continue statement stops only the current iteration and continues on to the next iteration**. 

## Avoiding Undefined Values
A continue statement is useful in programs that need to avoid undefined values that can cause the program to fail. In the following code, a for loop is used to examine the contents of an array of customer email addresses. However, the `customerEmail` array may be sparse with several undefined values that would result in errors if processed. This problem is avoided with an if statement that continues the loop to the next iteration when an undefined value is detected:

```js
for (let i = 0; i < customerEmail.length; i++) {
	if (customeremail[i] === undefined) {
		continue;
	} else {
		//statments to process the email address...
	}
}
```

---
back: [[Managing Program Loops and Conditional Statements]]