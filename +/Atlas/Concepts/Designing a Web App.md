In this chapter you will create a web app that displays a slideshow or [[lightbox]] in which multiple images are displayed in a scrolling gallery with individual images expanded to fill the entire screen, dimming the rest of the page. [Figure 5-1] shows a preview of the lightbox you will create and the features it will support.
![[Contents of the lightbox data js file in ch5.png]]

## A web app like the lightbox is built on 4 foundations:

- The HTML code that provides a container for the web app
    
- The CSS code that defines the look of the app
    
- The JavaScript code that manages the operation and output from the app
    
- The data used by the app, often stored in an external file, or retrieved from a database server
    

In some environments these features might not even be handled by the same person. A team of designers might work with the HTML and CSS code while a team of programmers manages the JavaScript code, and a third team is responsible for data.

For the lightbox app, you are **responsible** for 
- the JavaScript code
- the images
- the code for the HTML and CSS files are already created for you.

---
##### In the js05.html file:
- We included 2 js files `stylesheet. js05.js` and `lightbox_data.js`.
- Included 1 stylesheet `lightbox.css`
and
- Added a div with an `id="lightbox"` after the article
---
#### in the lightbox data js file:
![[contents of lightbox js file.png]]

This shows the contents of the lightbox_data.js file. 

In this app, the title of the lightbox is stored in the `lightboxTitle` variable
#### imgFiles
- the image file names are stored in the `imgFiles` array
#### imgCaptions
- the captions associated with each image are stored in the `imgCaptions` array
#### imgCount
- the total number of images is calculated and stored in the `imgCount` variable.

There are 12 images in this example, but you will write your code so that the lightbox app can manage **any number of images**.

---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]