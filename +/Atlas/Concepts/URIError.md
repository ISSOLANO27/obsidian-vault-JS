## “Something went wrong when working with web addresses”

This occurs when functions like `decodeURI()` or `encodeURI()` receive malformed data.

Example:

```js
decodeURI("%")
```

Result:

`URIError: URI malformed`

Mental model:

> “This web address string is corrupted.”