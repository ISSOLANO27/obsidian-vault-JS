Variables declared with the var keyword have [[Function Scope]], in that their scope is limited to the **function in which they are defined**, or any code nested therein. 

var ignores any block boundaries (JS legacy Behavior)

In the following example, the user variable is only recognized within the `showUser()` function but not outside of it.
```js
function showUser() {
	var user = "Reynolds";
	document.write(user); // writes Reynolds
}
document.write(user); //produces an error
```
Because functions contain command blocks, **any variable declared within a function using the let or const keywords is also NOT accessible outside of that function**.

---
Back: [[Variable Scope]]

related:
