## “Something went wrong with `eval()`”

This one is mostly historical. It relates to issues when using JavaScript’s `eval()` function (which runs code from a string). Modern engines rarely throw this anymore.

Example conceptually:

```js
eval("bad code here")
```

Mental model:

> “The dynamically executed code failed.”

In practice, developers almost never rely on this error.