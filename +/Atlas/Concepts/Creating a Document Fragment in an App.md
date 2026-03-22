You will use nodes **to develop the content** of the lightbox app. 

The general structure of the lightbox is as follows:
```html
<div id="lightbox">
   <h1>Lightbox Title</h1>
   <div id="lbCounter"></div>
   <div id="lbPrev"></div>
   <div id="lbNext"></div>
   <div id="lbPlay"></div>
   <div id="lbImages">
      images
   </div>
</div>
```

## We will be adding nodes to the lighbox id
Compare this HTML code to the preview of the completed lightbox shown earlier in ![[Contents of the lightbox data js file in ch5.png]] You have already added the lightbox container element to the web page, so **any nodes appended to it will automatically be added to the page**. 

### innerHTML works, but it is hard to Manipulate..
While you could add this general structure using the `innerHTML` property, such a text string would be **long** and **cumbersome to create and manipulate**. #ch5askLater  [complicated and long how? in what way; would this be considered hard coding?]

###  Nodes are easier to Manage
The content and the structure will be **more easily managed with nodes**. 

Commands to create this lightbox structure will be placed within a `createLightbox()` function that runs when the browser initially **loads** the page.  [Is there a difference between an event handler and an event listener? I ask because whenever I saw loads Went back to listen to me 'cause I had to remember seeing it in the table and created That was there. I remember there was a moon called on click, not just click Or is that for something else]
![[Creating element nodes.png]]


![[Attaching element nodes to the light box container.png]]


#### Note
##### At end of parents children
The `appendChild()` method **always places the node at the end of the parent node’s children**. 

##### At beginning of parents children
To insert a node at a different position—such as at the beginning of the child list—use the `insertBefore()` method.

---
Back: [[Introducing Nodes]]