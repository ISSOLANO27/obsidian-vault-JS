
Array methods that replace [program loops?] are a useful features of that are built into JavaScript.

- faster than program loops
- simpler
- more compact

Each method employs a [[callback function]] or method.


## Examples
### forEach()
Calls a function for each element within an array:
```js
array.forEach(callback, thisArg)
```
`array` - reference to an **array**
`callback` - **function** called
`thisArg` -  optional parameter; Containing a value that can be passed to the callback 

[1. what is this value for?]

[2. Does it pertain to forEach array method?, this optional value?]

---
The callback function:
```js
function callback(arrValue, index, array) {
	statements;
}
```
`arrValue` - the **value of the current array element** during **each** iteration within the array
`index` - index of the **current** array element (*optional*)
`array` - **name** of the array (*optional*)

---
###### The following code uses the forEach() method to apply the `writeValue()` function to each element within the `x` array:
```js
let x = [1, 3, 5, 10];
xforEach(writeValue);

function writeValue(arrValue) {
document.write("<td>" + arrValue + "</td> ";)
}

/*
Resulting In:
<td>1</td> <td>3</td> <td>5</td> <td>10</td>
*/
```
With the `forEach()` method you **do not have to explicitly** 
- write the code for the program loop
- calculate the size of the array
- worry about iterating past the last array element
[3. So this method takes care of iterating properly?]

>NOTE: Yo can replace the name of the callback function with the code of an [[Anonymous Functions]] , written directly within the forEach() method. 
>
>[I took a peek at anonymous and i noticed that it says that (Anonymous functions are also important for use with event handlers as you will learn later in this chapter. #eventHandlers [why are they important?]


---
###### forEach() To Change Array Values
This calls `stepUp5()` function to increase the value of each item in the `x` array by 5:
```js
let x = [1, 3, 5, 10]
x.forEach(stepUp5) 
function stepUp5(arrValue, i, arr) {
	arr[i] = arrValue + 5;
}
```
`stepUp5()` has 3 parameter:

`arrvalue` - represents the value of the array element at each iteration
`i` - represents the index number at each iteration
`arr` - the name of the array
[4. again, three parameters are confusing. Please explain. ]
The array `x` will be changed from

[1, 3, 5, 10] to [6, 8, 10, 15]

[5. so foreach is running on array x, but then we pass down stepup5 function as an argument. Is this what a callback function is? almost reminds me of anonymous function. only that those are handles by a variable that acts as its handle to access it. Anyway, after the array method is applied we define what stepUp5 does. In our case, i noticed we start using the i for the indices. this is where this lost me. We are defining it in a way that when forEach runs this function the arr[i] or better said every element in that array is getting 5 added to each arr[i] in our case for each element encountered when foreach is doing its thing.. i feel so close to understanding this...]

---


|ARRAY METHOD|DESCRIPTION|
|---|---|
|every(_callback_, _thisArg_)|Tests whether the value of the _callback_ function is true for all array elements|
|filter(_callback_, _thisArg_)|Creates a new array populated with the elements of the array that return a value of true from the _callback_ function|
|forEach(_callback_, _thisArg_)|Applies the _callback_ function to each array element|
|map(_callback_, _thisArg_)|Creates a new array by passing the original array elements to the _callback_ function, which returns the mapped value of those elements|
|reduce(_callback_, _thisArg_)|Reduces the array by keeping only those elements returning a true value from the _callback_ function|
|reduceRight(_callback_, _thisArg_)|Reduces the array starting from the last element by keeping only those elements returning a true value from the _callback_ function|
|some(_callback_, _thisArg_)|Tests whether the value of _callback_ function is true for at least one array element|
|find(_callback_, _thisArg_)|Returns the value of the first array element returning a true value from the _callback_ function|
|findIndex(_callback_, _thisArg_)|Returns the index of the first array element returning a true value from the _callback_ function|

---
Back: [[Chapter 3 - Building Arrays and Controlling Flow]]

related:
- [[Array Methods]]