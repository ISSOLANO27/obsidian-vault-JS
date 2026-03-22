Another type of timed command is one in which the command is **run once after a specified delay**. To run a delayed command use the following `setTimeout()` method:
```js
let timeVar = window.setTimeout(command, delay);
```

where _delay_ is the delay time in `milliseconds`. 

A delayed command is first managed by the browser timer system. After the delay expires, its callback is added to the queue. Once that callback runs, or the timeout is cleared before it runs, that timeout is finished and will not run again unless a new `setTimeout()` is created.

---
The following command runs the `showNext()` function but only after a 2-second delay:
```js
let timeID = window.setTimeout(showNext, 2000);
```


As with the `setInterval()` method, time-delayed commands can be assigned an id that distinguishes the command from other timed commands. 

#### `clearTimeout()` method:
To **prevent** a delayed command from running, apply the following: 
```js
window.clearTimeout(timeVar)
```


## Temporarily in Queue
Once a time-delayed command runs or is cleared, **it is removed from the queue** and will not run unless another `setTimeout()` method is applied to place it back in the queue.



### Note
With all properties and methods of the window object, you can omit the window part of the reference name, for example, using `setInterval()` in place of `window.setInterval()`. 

####  use the window part of the reference to apply the property or method
You can use the window part of the reference to apply the property or method to a specific browser window in the case of a script that involves working with multiple open windows. 
```js
let newWin = window.open("", "", "width=400,height=300");

newWin.alert("Hello from the original window");

newWin.setTimeout(() => {
  newWin.close();
}, 5000);
```
That means:
- open another window
- wait 5 seconds
- close **that specific window**
---

You have completed your work on the lightbox tools that enable the user to move through the slideshow images. Your final task will be to add a feature that displays full-screen versions of individual images from the lightbox.




---
Back: [[Running Timed Commands]]

related:
- [[CH5 - Quickcheck2]]