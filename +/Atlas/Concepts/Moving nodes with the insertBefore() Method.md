To move backwards through the list of images, the lightbox app **must move the last image to the beginning of the line**, shifting the subsequent images back one position.
![[Moving backward through the list of images.png]]

###### To insert a node at **any position other than the end** of the list of child nodes, apply the following `insertBefore()` method:
```js
node.insertbefore(new, child)
```

where _node_ is the **parent** node, 

_new_ is the **node that will be inserted** as a new child of the parent, 

and _child_ is a child node **before** which the new node is to be placed. 
	It is an **existing child of the parent**  
	and you are saying:
	👉 “Place `newNode` right BEFORE this one”

## Same for Appending a child to a parent
### If Node exists, it simply takes its new position
As with the `appendChild()` method, if the _new_ node is already part of the node tree it will be moved from its current location to its new location.

#### `lastElementChild` 
For the lightbox, the _new_ node would be the **last image** referenced with the expression `lbImages.lastElementChild` 

and 
#### `firstElementChild`
the _child_ node would be **first image** referenced with the expression `lbImages.firstElementChild`.  

[[Combine Replace Remove Nodes Table]]
The following command would then **move the last image to the front of image list**:
```js
lbimages.insertbefore(lbImages.lastElementChild,lbImages. firstElementChild);
```

---

### Moving Nodes Backwards
As the user moves backward through the image list, the image counter should decrease by 1 with each image displayed until the first image is reached. 

At that point, the counter will have “looped” to the end of the list and the next image should have a counter value equal to number of the last image. 

#### To update the counter value would use the following conditional operator:
```js
(currentImg > 1) ? currentImg-- : currentImg = imgCount; // counter is set to the imgCount(last element) 
lbCounter.textContent = currentImg + " / " + imgCount;
```
## Loop Logic: Forward and Backward Navigation

|Direction|Condition|Action|
|---|---|---|
|Forward|`< imgCount`|`++`|
|Forward (end)|else|go to `1`|
|Backward|`> 1`|`--`|
|Backward (start)|else|go to `imgCount`|

---
As long as `currentImg` is **greater than 1**, its **value will decrease by 1**, otherwise its value will be set to the number of the last slide image as the slideshow loops back to the end of the image list. 
Add these statements to the `showPrev()` function that will be called when the Previous button is clicked:

---
Back: [[Restructuring a Node Tree]]