You can change a variable’s value at any point in a script by using an expression to assign it a new value.


```js
let totalSales = 0;
let item1Sales = 50, item2Sales = 75, item3Sales = 40;

totalSales = item1Sales + item2Sales + item3Sales;

document.write("<p>Total sales = $" + totalSales + "</p>");

```

it is only necessary to declare once, we could have done this:

```js
let totalSales; // forget initializing; no point

totalSales = item1Sales + item2Sales + item3Sales;

```


If you use the `const` keyword for the totalSales, this would not be possible.

related:
- [[Using Variables]]