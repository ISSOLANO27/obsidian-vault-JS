```js
function errorFn(message, url, line) {
	statements;
	return value;
}
```

where _message_ , _url_ , and _line_ are optional parameters that **provide the message**, **file URL**, and **line location** associated with the error. 

The return statement’s value is either **true or false**. 

### If return is true:
the error handling function replaces the browser’s default error handling; 

### if return is false or omitted:
The error handling function supplements the actions of the browser **but does not replace them**.

#### Specialized Message to the Console Log
The following `processErrors()` function writes a specialized message to the console log, specifying:
- the name of the file
- the type of error that occurred 
- line location
```js
function processErrors(msg, url, line) {
	console.log("This file " + url
	+ " generated the following error. "
	  + msg + " on line. " + line);
	    return true;
}
```

> NOTE: Because the return value is true; This error handling function will override the default way the browser manages errors..

---
Back: [[Customizing Your Error Handling]]
related:
- [[Best Practices - Minimizing Bugs in Your Code]]
