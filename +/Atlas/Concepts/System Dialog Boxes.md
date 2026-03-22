
One popup window that you’ve already seen is the alert window created with the `window.alert()`method. The alert window simply displays a message along with an OK button to close the window, but the method does not ask for any response from the user.

## `window.alert()`
A window that does provide the ability for the user to respond is a [[confirmation window]] that displays a message along with an OK and Cancel button. 

The window returns a value of true or false depending on whether the user closed the window by clicking the OK button or the Cancel button. 

#### To create a confirmation window, apply the following `window.confirm()` method:
```js
response = window.confirm(message)
```

### `window.confirm()` Stored as Boolean
where **_response_** is a Boolean value that is **true** if the user clicks the OK button 
and 
**false** if the user clicks the Cancel button, and _message_ is the text that appears in the window.


### For a more general response
JavaScript provides the prompt window that displays a message along with an input box into which the user can enter a text string. To create a [[prompt window]], apply the following window.prompt() method:

```js
response = window.prompt(message, default)
```


where _response_ is the text of the user’s response, _message_ is the prompt message, and _default_ is the input box’s default value.  
##### Shows examples of each window along with the code that generated it:

![[JavaScript popup windows.png]]

##  Each Browsers determines window appearance
The exact appearance of the window is determined by the operating system and the browser. There are no JavaScript properties or CSS styles to modify these windows.



---
Back: [[Working with Popup Windows]]