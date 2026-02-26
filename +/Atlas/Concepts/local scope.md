In the following example the **local value** assigned to the user variable is limited to the scope of the function *while the global value is unchanged outside of the function*:

```js
let user = "Dawson";
function showUser() {
	let user = "Reynolds";
	document.write(user); // writes Reynolds
}
document.write(user); // writes Dawson (no user from within the function escapes the block scope)
```