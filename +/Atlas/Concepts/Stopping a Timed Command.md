
Once a timed command is initiated, it can be stopped using the following `clearInterval()` method:

```js
window.clearInterval(timeVar)
```

where _timeVar_ is the variable storing the id of the timed command. 
### Several timed commands.
An application might have several timed commands running simultaneously, so the `id` is necessary to distinguish one timed command from another.

The lightbox’s `play/pause` button needs to toggle between 2 states:

1. If the slideshow is not running, **clicking the button starts the show**; and
    
2. if the slideshow is running, **clicking the button stops the show** by clearing the timed command.
    

The following if else statement covers both conditions:
```js
if (timeID) {
// Checks weather in the interval is currently active. 
   window.clearInterval(timeID);
   // Stops the interval whose ID is stored in timeID  
   timeID = undefined; 
} else { 
   showNext(); 
   // advance once immediately
   timeID = window.setInterval(showNext, 1500);
   // Start repeating showNext every 1500 ms and store the interval ID
}
```
#### if
The if condition is true only if `timeID` has a **truthy (defined) value** and the slideshow is running. 
The if statement clears the timed command and sets `timeID` back to undefined; 
#### else
otherwise the slideshow is not running and the else condition starts the slideshow by running the `showNext()` function and storing the id of the timed command.

Add this if else statement to the code for the lightbox app.


#### To clear a timed command: 
![[Toggling between starting and stopping the slide show.png]]

#### Timed Commands are placed in a Queue
Note that the browser is **not guaranteed to run** a timed command at exactly the specified time. While the command is scheduled to be run at that time, it is also placed within a queue along with other commands.  #webAPI


Commands are only run when they reach the top of the queue and thus a timed command might not always start exactly at the specified time. 
[[Web APIs callback go in the Queue - Then the Stack]]


---

Back: [[Running Timed Commands]]