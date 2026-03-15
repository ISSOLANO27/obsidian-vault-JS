## “The value exists but it's outside an allowed range”

Example:

```js
let arr = new Array(-1);
```

Result:

`RangeError: Invalid array length`

Or:

```js
(10).toFixed(1000)
```

JavaScript throws a range error because the precision is too large.

Mental model:

> “The number is real, but it's outside the legal limits.”