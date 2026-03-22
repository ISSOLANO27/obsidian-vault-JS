Originally introduced with the Netscape Navigator browser in 1995, the navigator object is used to obtain information about the user’s browser. Different browsers support different properties, but the properties described are supported by all current versions of the major browsers.

## [[Properties of the navigator object]]

| PROPERTY              | DESCRIPTION                                                                                            |
| --------------------- | ------------------------------------------------------------------------------------------------------ |
| navigator.appName     | Returns the name of the browser                                                                        |
| navigator.appVersion  | Returns version information about the browser                                                          |
| navigator.geolocation | Returns a geolocation object that can be used to extract information about the user’s current position |
| navigator.language    | Returns information on the browser’s primary language                                                  |
| navigator.onLine      | Determines whether the browser is currently online                                                     |
| navigator.platform    | Returns information about the platform on which the browser is running                                 |
| navigator.userAgent   | Returns information about the browser, platform name, and compatibility                                |

The navigator object is primarily used for debugging or for verifying that the user is running a compatible browser or operating system. For example, the following code tests whether the language of the browser is based on United States English, running a different command block if it is not:

```js
if (navigator.language !== "en-US") then {
	// Statements to work with browsers of other languages
}
```
In the past, the navigator object was sometimes used for to choose **which code to run** based on the user’s browser. 

For example, an application would run one set of code for Netscape and another for Internet Explorer. 

However, it is usually better and more effective to use [[object detection]] to determine whether the browser (regardless of its vendor) supports a section of code and using a try catch statement to handle exceptions. 


---
Back: [[Exploring Browser Object Model]] 