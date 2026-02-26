
[js02.html](../../../JavaScript/Chapter02/chapter/js02.html)

---
>**Task 7**: Refresh or reload the web page and notice that by refreshing or reloading the page, your **values are erased**.

How to fix..

One way could be to use the function named `setupForm()` (see: [js02.html](../../../JavaScript/Chapter02/chapter/js02.html)) which define those default values.

>Note that functions like these cannot run until they are called. (see: [js02.js](../../../JavaScript/Chapter02/chapter/js02.js)

To set the value of an input box:
```js
object.value = value;
```
`object` -  is a reference to an input control on the web form.

`value` -  is the value to insert into that control.

`id` - d Only if the control CAN be identified by the value of the *id* attribute. 

---



related:
- [[Input Properties]]