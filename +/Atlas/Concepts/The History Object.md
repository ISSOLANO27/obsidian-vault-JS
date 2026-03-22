Each browser window maintains a history of all the pages that have been opened during the current session within a history list. Under the BOM, this information is stored in the history object. For security and privacy reasons, the history object does not store the actual contents or addresses of those pages, but you can go back and forth through the history list using the back(), forward(), and go() methods

## [[Methods of the History Object]]

| HISTORY METHOD          | DESCRIPTION                                                                                                                                                                                                         |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| history.back()          | Go back one page in the history list                                                                                                                                                                                |
| history.forward()       | Go forward one page in the history list                                                                                                                                                                             |
| history.go( _integer_ ) | Go to a page whose index is indicated by _integer_ . Negative integers cause the browser to go back in the history list; positive integers cause the browser to go forward. An integer value of 0 reloads the page. |

#### To go **back** age in the history list:
```js
window.history.back();
window.history.go(-1);
```

#### To go **forward** one page in the history list:
```js
window.history.forward();
window.history.go(1);

```
## Use cases: data entry forms
These navigation methods are often used for applications that involve data entry in web forms spread across multiple pages.

By applying these methods, **users can go back or forward** through the pages to review or revise their answers. 
To navigate through the history list of a popup window, [use the name assigned to the window object as part of the history statement].

#### To see the number of pages in the history list:

The total number of pages stored in the history list is provided by the 
```js
window.history.length
```
[Browser Object Model (BOM)]

---
Back:  [[Exploring Browser Object Model]]