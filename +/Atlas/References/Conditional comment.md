You may run into these..

Encloses content that should only be run by particular versions of the Internet Explorer browser.
The general form:

```html
<!--[if operator IE version] >content<![endif]-->
```

`operator` is a logical operator, `version` is the version number of an Internet Explorer browser, and `content` is the HTML code that will be run ONLY if the conditional expression is true.


>The following code uses the lt (less than) logical operator to warn users that they need to upgrade their browser if they are running Internet Explorer prior to version 8.

```html
<!--[if lt IE 8] > <p>Upgrade your browser to view this page.</p>
<![endif]-->
```

Other logical operators include lte (less than or equal to), gt (greater than), gte (greater than or equal to), and ! (not). For example, the following code uses the logical operator ! to display the paragraph text only when the browser is _not_ Internet Explorer:

```html
<!--[if!IE] >
	<p>You are not running Internet Explorer.</p>
<![endif]-->
```

>Note that if you omit the version number, the conditional is applied to all Internet Explorer versions!



Related:
-  [[Why The Need For Conditional Comments]]
- [[Adding Comments]]
