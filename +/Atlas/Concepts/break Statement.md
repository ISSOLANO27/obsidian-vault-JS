Can be used anywhere within any program loop or conditional statement.

When a break is encountered, the execution of the code passes to the next set of statements. Breaks are often used to exit a program loop before the stopping condition is met.

### Example
#### Examining the `customerId` array for a specific customer ID number:
```js
for (let i = 0; i < customerID.length; i++) {
	if (customerID[i] === "C-14281") {
		window.alert("C-14281 is found");
		break; // stop processing the for loop
	}
}
```
##### No need to iterate through everything
Once the specific customer ID has been located, there is little point in continuing the for loop. The break command saves the JavaScript interpreter from having to fruitlessly examine the rest of an array that might contain tens of thousands of elements.


---
back: [[Managing Program Loops and Conditional Statements]]