
##  Before going further..
Currently, the lightbox has no images, so there is nothing that would appear on the web page, but in developing this app you want to **ensure that your code has generated the correct node structure**. Before going further in developing this app, examine the contents and structure of the web page using tools in your browser’s debugger.


![[Viewing the element hierarchy in the Elements tab.png]]


###### **To add the light box images:**
If your page does not contain the elements shown in [Figure 5-11](https://ebooks.cengage.com/reader/4762e1ab-f3bf-4830-afa8-70d38f6335a0/content-bd_ch_05_sect_02_07?code=-1tANIdG1atvCcWisgzctvo8T7nROIiBAe05uxQUVqw&state=e2f7a636-5e50-492e-83f5-e41a18fa275a&scrollTo=KYLT4WCDHJUDC43UE350#YWZBFHHKTNLSBT4CS759), return to the js05.js file in your code editor. Check your code against the code shown in [Figures 5-9](https://ebooks.cengage.com/reader/4762e1ab-f3bf-4830-afa8-70d38f6335a0/content-bd_ch_05_sect_02_06?code=-1tANIdG1atvCcWisgzctvo8T7nROIiBAe05uxQUVqw&state=e2f7a636-5e50-492e-83f5-e41a18fa275a&scrollTo=KYLT4WCDHJUDC43UE350#KYLT4WCDHJUDC43UE350) and [5-10](https://ebooks.cengage.com/reader/4762e1ab-f3bf-4830-afa8-70d38f6335a0/content-bd_ch_05_sect_02_06?code=-1tANIdG1atvCcWisgzctvo8T7nROIiBAe05uxQUVqw&state=e2f7a636-5e50-492e-83f5-e41a18fa275a&scrollTo=KYLT4WCDHJUDC43UE350#MTVAMLLRHRFV7LQYF751). Common errors might involve the misspelling of id names, node variables, or node properties. #commonMistakes 

To add images to the lightbox, use a for loop to iterate through the imgFiles array, creating an img element node for each item in the array and appending it as a child of the lbImages element node. Notice that the code uses the imgCount variable whose value was already calculated in the lightbox_data.js file and stores the number of images in the lightbox.
![[Adding images to the lightbox.png]]


![[Adding the lightbox title and counter..png]]

Next you will use the textContent property to insert the title of the lightbox slideshow and the text of the slide counter. The counter text will have the format:
```
currentImg / imgCount
```
where _currentImg_ is the number of the image currently shown in the lightbox and _imgCount_ is the total number of images.

###### **To add the lightbox title and image counter:**

![[Adding the symbols for the buttons in the light box.png]]


![[Lightbox images and text.png]]


The lightbox displays only the first four of the 12 images. 
The other image files are part of the page but hidden using a style rule defined in the lightbox.css style sheet that hides any overflowing content in the lightbox container.

In the next session you will work with **commands to allow the user to scroll through image list manually or automatically** to view all the images one-by-one.



---
Back: [[Introducing Nodes]]
related: 
- [[CH5 - Quickcheck1]]