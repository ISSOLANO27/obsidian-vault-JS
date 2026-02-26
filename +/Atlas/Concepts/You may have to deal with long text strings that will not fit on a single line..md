Although many JavaScript commands can be entered across several lines, a text string cannot split onto a new line without causing an error.

If you have a long text string, there are several things you can do to make your code error-free:  #writingEffectiveCode 

1. Fit as much of the text string as you can on one line and then close out the text with an ending quote followed by the addition operator (+) as in the following example:
	```js
	let message = "This is a very long" +
	" and complete text string to enter.";
	```

2. End the line with the \ character indicating that the text string continues on the next line (this approach might not be supported by all browsers and browser versions).
	```js
	let message = This is a very long /
	and complicated text string to enter.";
	```
---
### Backtick Approach

**Another approach** is to enclose your text strings with the backtick character `` rather than double or single quotes as in the following expression:
```js
let message = `This is a very long
and complicated text string to enter.`;
```
>NOTE:
>Unlike other programming languages, (((**JavaScript includes no special data type for a single character, such as the char data type**))) in the C, C++, and Java programming languages.
---
Back: [[Working with Strings]]