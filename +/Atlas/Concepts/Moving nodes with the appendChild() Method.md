You have already used the `appendChild()` (see: [[Combine Replace Remove Nodes Table]]) method *to add a new child to a parent node*. 

As the name implies, the method appends the node, placing it **at the end of the child list**. 
### If already there, Node moves from current to end of child list
If the node is already part of a document tree, the `appendChild()` method moves the node from its current location to that new position. Thus, the following statement:
```js
lbimages.appendChild(lbImages.firstElementChild)
```

moves the first image, referenced with the expression `lbImages.firstElementChild` to the _end_ of the list of images. 

#### Everything Shift to the Left
All the other images will move up in position so that the **second image is now the first**, the **third image is now the second**, and so forth.

---
As the user moves through the image list the value of the `currentImg` variable should increase by 1 with each image moved. 

#### Last Node Loops 
When the user goes beyond the last image the `currentImg` variable should **reset to 1** as the lightbox “loops” back to the beginning of the list. 

You can determine the value of `currentImg` with the following [[Conditional Operators]] that tests whether the `currentImg` **value is less than the total number of images**. 

If it is, the counter is increased by 1; otherwise it is reset to 1.
```js
(currentImg < imgCount) ? currentImg++ : currentImg = 1;
lbCounter.textContent = currentImg + " / " + imgCount;
```
---
Notice that by placing the `showNext(`) function within the command block, **you have given the function local scope**, confined to the `createLightbox()` function. 

### 🧠 What just happened?

- `showNext()` exists ONLY inside `createLightbox()`
- You CANNOT call it from outside

#### 🔥 Why this matters

> You are protecting your code from the outside world

### ⚔️ Real-World Problem (why this exists)

Imagine:

- Your app has `showNext()`
- Another library ALSO has `showNext()`
    
👉 Without scope:  
💥 One overrides the other

[[Apps used by third parties should use local scope]]
When creating apps that may be used by third parties, you want to give your variables and functions local scope so they do not interfere with any other code your users might be running. It is not uncommon for an app to have a single function with several nested functions doing the work. #ch5askLater  

---
Back: [[Restructuring a Node Tree]]