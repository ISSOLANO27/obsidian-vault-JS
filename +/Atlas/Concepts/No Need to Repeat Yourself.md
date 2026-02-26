#### Including a script Element for Each Code Section


A single HTML file **can contain several script elements**. The following document fragment includes two separate script sections. The script sections create the information that is displayed beneath the h2 heading elements.


```js
<h2>Sales Total</h2>
<script>
let salesTotal = 47.58;
document.write("<p>Your sales total is $" + salesTotal + "</p>");
</script>

<h2>Sales Total with Shipping</h2>
<script>
let shipping = 10;
let totalCost = salesTotal + shipping; //salesTotal come from the other script
document.write("<p>Your sales total plus shipping is $" + totalCost + "</p>");
</script>
```


### Statements in one script section are accessible to subsequent script sections. 

For example, the `salesTotal` variable was declared in the first script, but its value was **still accessible to the second script**. 

For the purposes of your programs, you can think of the two scripts as being “**connected**” even if they are separated by HTML code.

Back:
- [[Structuring JavaScript Code]]

related
- [[Script Element Placement]]
