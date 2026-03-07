Many Application store data in a rectangular format known as a [[matrix]]. 

Entries in a matrix are identified by the [[index]] for the rows and columns..


| 4   | 2   | 1   | 2   |
| --- | --- | --- | --- |
| 1   | 3   | 18  | 6   |
| 3   | 7   | 3   | 4   |
..in this case, to refer to value `18`, call: `(2,1)`

---
## javaScript does not Support Matrices

You can still mimic their behavior #mimicBehavior by nesting one array within another in a structure called **multi-dimensional array**.
like this:
```js
var Array = [[4, 2, 1, 2], 
			[1, 3, 18, 6], 
			[3, 7, 3, 4]];
```

## To Reference Values in a Multi-dimensional array

`array[x][y]`

`x`
the index of the outer array (the row)

`y`
int he index for the inner array (the column)

### **Examples**: Second row, Third Column

`myArray[1][2]` - would return the value `18`. 

> index start form `0` not `1`.

---
## Determining the Number of Rows in a MA

Use the `length` [[property]]..
```js
mArray.length;
mArray[0].length;
```
> This return the **actual number of rows** in the MA; Assuming that every row has the same number of elements as the **first row**.

[You can nest as many arrays in this fashion to `CREATE` matrices of even higher dimensions...]


---
Back: [[Storing Data in Arrays]]

related:
- [[Reasons to use MDAs]]
