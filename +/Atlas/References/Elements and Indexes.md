
Each value stored in an array is called an [[element]], and each element is identified by its position or [[index]] within the array. Indexes always start with the number 0, so the first element in any array has an index of 0, the second has an index of 1, and so forth. You can set a specific array value by its index using the expression:

`array[index] = value;

```js
monthName[0] = "january";
monthName[1] = "February";
monthName[2] = "March";
...
```

## Arrays in JavaScript are Dynamic
They will automatically expand to allow for new elements.

```js
let values = [10, 20, 30, 40];
dataValues[4] = 50; // 40 is also stored as the next element..
``` 


## Data is NOT always Defined.. 
JavaScript also allows for the creation of [[sparse arrays]].

They appear often in application that involve data where items such as phone numbers or postal codes have not been stored for every individual..

---
>NOTE
>JS can treat an entire array as text entries in comma separated lists:

```js
let x = ["iowa", "Kansas", "Illinois"];
document.write(x);
```
will write the text string "Iowa,Kansas,Illinois" into the web page.

---
Back: [[Storing Data in Arrays]]

related:
- [[sparse arrays]]
- [[To Determine the Size of an Array]]