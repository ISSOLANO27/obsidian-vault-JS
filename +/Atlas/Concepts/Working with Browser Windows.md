Another approach to creating a popup window is to **open a new browser window**. The browser window then becomes its own `window` object with its own collection of properties and methods. You can use JavaScript to **create** a new `window` object and **define** the window’s appearance and content.  [I though i had read something about the popup windows are are handled by the browser; It's not so much that we style these objects, but are defined with properties that are provided by the window object right]

describes some of the JavaScript properties associated with the window object.
## [[Properties of the `window` object]]

| PROPERTY           | DESCRIPTION                                                                         |
| ------------------ | ----------------------------------------------------------------------------------- |
| window.closed      | Returns true if the browser window or tab has been closed                           |
| window.document    | References the document stored in the window                                        |
| window.history     | References the browsing history stored with the window                              |
| window.innerHeight | Returns the height of the window’s content area, including the scrollbar            |
| window.innerWidth  | Returns the width of the window’s content area, including the scrollbar             |
| window.location    | Returns information about the current URL displayed in the window                   |
| window.name        | Sets or returns the name of the window                                              |
| window.navigator   | References an object containing information about the browser displaying the window |
| window.outerHeight | Returns the height of the browser window, including the scrollbar                   |
| window.outerWidth  | Returns the width of the browser window, including the scrollbar                    |
| window.screen      | References an object containing information about the user’s viewscreen             |
| _window_ .status   | Sets or returns the text displayed in the browser window status bar                 |

## [[Methods for the `window.open()` method]]

| METHOD                                        | DESCRIPTION                                                                                                                                                                                                                                                                                                                                               |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| window.blur()                                 | Removes the focus from the browser window or tab                                                                                                                                                                                                                                                                                                          |
| window.close()                                | Closes the browser window or tab                                                                                                                                                                                                                                                                                                                          |
| window.focus()                                | Makes the window object the active window or tab                                                                                                                                                                                                                                                                                                          |
| window.moveBy(_x_, _y_)                       | Moves the browser window _x_ pixels horizontally and _y_ pixels vertically                                                                                                                                                                                                                                                                                |
| window.moveTo( _x, y_ )                       | Moves the browser window to the screen coordinates ( _x_ , _y_ )                                                                                                                                                                                                                                                                                          |
| [[window.open(_url, name, option, replace_)]] | Opens a new browser window or tab where **_url_** is the location of a file loaded into the window, **_name_** is the window’s name, **_options_** defines the window’s appearance, and **_replace_** is `Boolean` value that specifies whether _url_ should create a new entry in the window’s history list (true) or replace the existing entry (false) |
| window.print()                                | Opens the print dialog box displaying the content of the browser window                                                                                                                                                                                                                                                                                   |
| window.resizeBy( _width, height_ )            | Resizes the window by specified _width_ and _height_ relative to its current size                                                                                                                                                                                                                                                                         |
| window.resizeTo( _width, height_ )            | Resizes the window to a specified _width_ and _height_                                                                                                                                                                                                                                                                                                    |
| window.scrollBy( _xnum, ynum_ )               | Scrolls the browser window or tab by a specified amount in the horizontal ( _xnum_ ) and vertical direction ( _ynum_ )                                                                                                                                                                                                                                    |
| window.scrollTo( _xpos, ypos_ )               | Scrolls the browser window or tab to a specified ( _xpos_ , _ypos_ ) coordinate in the document                                                                                                                                                                                                                                                           |


#### To create a new browser window, apply the following `window.open()` method:
```js
window.open(url, title, option, replace)
```
 _url_ is the location of the file displayed in the window, 

_title_ is the window’s title, 

_options_ is a comma-separated list of features defining the window’s appearance, 

 _replace_ is an optional Boolean value that specifies whether _url_ should create a new entry in the window’s history list (true) or replace the existing entry (false). [You can include all or none of the arguments for the `window.open()` method.] 

Depending on the arguments used with the `window.open()` method, the new content might open as a popup window or it might appear as a new tab within the browser. 

##### new browser or tab if url left as empty string
For example, the statement `window.open("http://www.example.com");` 
	opens the page at `www.example.com` in a new browser window or tab. If you exclude a _url_ value or specify and empty text string, a blank browser window or tab opens.


#### Options
You can customize the appearance of a new browser window or tab using the _options_ argument in the `window.open()` method. 

##### lists options common to all major browsers. 
Because the window object is part of the Browser Object Model, the exact list of features is determined by the browser. Some browsers also include the ability to turn off the address bar or allow the window to be resized; others do not.

[[Options for the window.open() method]]

| NAME                     | DESCRIPTION                                                   |
| ------------------------ | ------------------------------------------------------------- |
| height= _value_          | Sets the window’s height in pixels                            |
| left= _value_            | Sets the horizontal position of the window in pixels          |
| menubar=yes\|no\|1\|0    | Displays the menu bar (yes or 1) or hides it (no or 0)        |
| scrollbars=yes\|no\|1\|0 | Displays scrollbars (yes or 1) or hides them (no or 0)        |
| status=yes\|no\|1\|0     | Displays the status bar (yes or 1) or hides it (no or 0)      |
| toolbar=yes\|no\|1\|0    | Displays the browser toolbar (yes or 1) or hides it (no or 0) |
| top= _value_             | Sets the vertical position of the window in pixels            |
| width= _value_           | Sets the window’s width in pixels                             |

## Omitting an Option list
If you omit an option list in the `window.open()` method, then all standard options are included in the new browser window. 
However, if the `window.open()` method does include an option list, **only those features specified in that list will be applied** to the new window or tab. 

## Forcing a new Browser... not a tab
To force the browser to display a new browser window rather than a new tab, **always include a width and height value** in the option list of the `window.open()` method.

##### creating a browser window
The following statement creates a browser window that is `400 pixels` wide by `600 pixels` tall displaying the contents of the page at _www.example.com_ **without** a toolbar, menu bar, location box, or status bar.

0 false
1 true
```js
let newWin = window.open("www.example.com", "win", "width=400, height=600, toolbar=0, menubar=0. scrollbars=0, status=0");
```


The window is stored in an object variable named `newWin`. When a window has been saved under a variable name, you can apply the properties and methods described in [[Properties of the `window` object]] and [[Methods for the `window.open()` method]] to it. 

For example, the following statement moves the `newWin` browser window to a position 
- `300 pixels` to **left** 
- 400 pixels **down from the top-left** corner of the screen
- increases its **width and height** by 50 pixels.
```js
newwin.moveTo(300,400);
newwin.resizeBy(50,50);
```

Values for moving, sizing, or scrolling browser windows are **always measured in pixels**. You do not have to include the px unit, only the value itself. #pixelsOnly 


#### Note

You can reference the window from which the popup window was opened using the opener property. The expression `newWin.opener` [explain opener, i did not see it in any of the tables here..]would refer to the original window that opened the `newWin` popup. In this way, the two windows can exchange information and content.


---
Back: [[Working with Popup Windows]]