Most common way is through an [[array literal]].

values are separated by commas `,`.

> values are not confines within a single line..

## Different Data Types
Values stored within an array can have many different [[data type]]s. 

```js
let datavalues = ["April", 3, true, null]; // text string, numerical, boolean, and null value
```
---
## Initialize with no Value
```js
let datavalues = []; // no values
```
Since arrays are Objects..

Another way:
```js
let array = new Array(values);
```
---
## Declare and Initialize a variable array as an Array Object
```js
let months = new Array("jan", "Feb", "March", "...", "...", "...", "...", "..", "...", "...", "...", "Dec");
```

## Constructor can set up Undefined Values
It can also define arrays based on the number of items within the array:
```js
let array = new Array(length)
```
- `length` 
can be inserted as an integer between 0 - 2^32 

```js
let months = new Array(12);
```
>You can do the same thing with an [[array literal]]. If you do not specify the values you can do this to create 4 undefined values within the array:
```js
>let dataValues = [,,,];
```



---
Back: [[Storing Data in Arrays]]