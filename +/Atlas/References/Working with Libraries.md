
### Working with Libraries

In addition to storing scripts for multiple pages in the same website, sometimes JavaScript source files store especially useful generic scripts used on many different websites. These files, known as libraries, are often developed by a single programmer or a team of programmers and distributed online. Many libraries are developed to solve a problem on one website and turn out to be useful for other sites as well. Programmers often make libraries available for free reuse.

After downloading a .js file containing a library that you want to use on a web page, you incorporate it into your HTML code just as you would any other JavaScript source file: by creating a script element in the head section and using the src attribute to specify the file name of the library.

A handful of libraries are commonly used to perform a variety of functions on large, complex websites. For instance, Node.js and jQuery contain tools for creating and managing large web applications. Another library, Modernizr, is widely used to enable web authors to deliver a consistent design and functionality across different browsers, browser versions, and platforms.

#### Note

Libraries can contain massive amounts of code. Because every extra line of code increases the amount of time a web page takes to download, web developers generally create customized versions of libraries that they use, so a library file downloaded for a site contains only those parts of the library that the site actually uses.