You can also use the addition operator to perform arithmetic operations involving **variables that contain numeric values**.

```js
let salesTotal = 47.58;
let shippingCost = 10:
let totalCost = salesTotal + shippingCost;
document.write("<p>Your total cost is $" + totalCost + "</p>)

// result: 
// <p>your total cose is $57.58</p>
```

>NOTE: 
>script uses the addition operator ( + ) to both add numeric values and to combine text strings. 

If you combine a text string and numeric value, JS **will treat both value as string** and will combine them rather than adding them

`5 + "2"` will return string "52" NOT 7

related:
- [[Building an Expression]]

