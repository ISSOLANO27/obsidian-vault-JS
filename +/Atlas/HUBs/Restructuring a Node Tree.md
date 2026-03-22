
In the next part of the lightbox app you **provide the ability to move forward and backward through the image list**. 

Because only 4 images are displayed at any one time, to move forward the lightbox app **must send the first image to the back of the image list**, shifting the remaining images forward one place in line.
![[Moving Forward through the list of images CH5.png]]

The app does not need to create or copy any elements, it only needs to move a node that already exists.

---
Back: [[Chapter 5 - Creating a Web App Using the DOM]]
Related:
- [[Moving Nodes with the appendChild() Method]]
- [[Moving nodes with the insertBefore() Method]]
- [[Cloning a Node]]