Computer displays vary widely depending on the type of device, the size and resolution of the monitor, the features of the graphics card and screen settings chosen by the user. Information about the screen is stored in the screen object.

## [[Properties of the `screen` object]]

| PROPERTY           | DESCRIPTION                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| screen.availHeight | Returns the height of the screen in pixels, excluding parts of the browser such as the taskbar, menu, or scrollbars |
| screen.availWidth  | Returns the width of the screen in pixels, excluding parts of the browser such as the taskbar, menu, or scrollbars  |
| screen.colorDepth  | Returns the bit depth of the screen’s color palette                                                                 |
| screen.height      | Return the total height of the screen in pixels                                                                     |
| screen.pixelDepth  | Returns the color resolution in bits per pixel of the screen                                                        |
| screen.width       | Returns the total width of the screen in pixels                                                                     |

###  To center the popup within the screen
If your app employs popup windows, you can use the width and height properties of the screen object to center the popup within the screen. To center a popup window, 
- **subtract** the width and height of the popup from the screen’s width and height  
- **divide** those differences by 2
- Assign the two calculated values to the popup window’s **left and top** position. 

The following code show a function that opens a popup window centered on the screen for a given width and height value:
```js
function centerPopup(url, popName, popWidth, popHeight) {
   let leftPos = (screen.width - popWidth) / 2;
   let topPos = (screen.height - popHeight) / 2;

   let popOptions = "width=" + popWidth + 
                    ", height=" + popHeight + 
                    ", left=" + leftPos + 
                    ", top=" + topPos;

   let popWin = window.open(url, popName, popOptions);
}
```

>Note that this method will not work for users running multiple monitors; however, there are workarounds involving using the available height and width within the current browser window.




---
Back: [[Exploring Browser Object Model]] 
related:
- [[Skills at Work - Designing your Web App]]