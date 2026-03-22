"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Chapter Case

      Application to generate a slide show
      Author: 
      Date:   

      Filename: js05.js
*/

window.addEventListener("load", createLightbox);

function createLightbox() {
   // Lightbox Container
   let lightBox = document.getElementById("lightbox");

   // Parts of the lightbox | These variables hold the elements which will be added to the lightbox container
   let lbTitle = document.createElement("h1");
   let lbCounter = document.createElement("div");
   let lbPrev = document.createElement("div");
   let lbNext = document.createElement("div");
   let lbPlay = document.createElement("div");
   let lbImages = document.createElement("div");

   // Design the lightbox title
   lightBox.appendChild(lbTitle); // Add the title element to the lightbox container
   lbTitle.id = "lbTitle"; // Set the id attribute of the title element
   lbTitle.textContent = lightboxTitle; // Set the text content of the title element to the value of the lightboxTitle variable

   // Design the lightbox slide counter
   lightBox.appendChild(lbCounter); // Add the slide counter element to the lightbox container
   lbCounter.id = "lbCounter"; // Set the id attribute of the slide counter element
   let currentImg = 1; // Initialize the current image index to 1
   lbCounter.textContent = currentImg + " / " + imgCount; // renders the current image index and total image count in the slide counter element

   // Design the lightbox previous slide button
   lightBox.appendChild(lbPrev); // Add the previous slide button element to the lightbox container
   lbPrev.id = "lbPrev"; 
   lbPrev.innerHTML = "&#9664;"; 
   lbPrev.onclick = showPrev; // Set the onclick event handler of the previous slide button to the showPrev function

   // Design the lightbox next slide button
   lightBox.appendChild(lbNext);
   lbNext.id = "lbNext";
   lbNext.innerHTML = "&#9654;";
   lbNext.onclick = showNext; // Set the onclick event handler of the next slide button to the showNext function

   // Design the lightbox Play-Pause button
   lightBox.appendChild(lbPlay);
   lbPlay.id = "lbPlay";
   lbPlay.innerHTML = "&#9199;";
   let timeID;
   lbPlay.onclick = function() {
      showNext();
      timeID = window.setInterval(showNext, 1500);
   }

   // Design the lightbox images container
   lightBox.appendChild(lbImages);
   lbImages.id = "lbImages";

   // Add images from the imgFiles array to the container
   for (let i = 0; i < imgCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createOverlay;
      lbImages.appendChild(image);
   }

      // Function to move forward through the image list
   function showNext() {
      lbImages.appendChild(lbImages.firstElementChild);
      (currentImg < imgCount) ? currentImg++ : currentImg = 1;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }

   // Function to move backward through the image list
   function showPrev() {
      lbImages.insertBefore(lbImages.lastElementChild, lbImages.firstElementChild);
      (currentImg > 1) ? currentImg-- : currentImg = imgCount;
      lbCounter.textContent = currentImg + " / " + imgCount;
   }

   function createOverlay() {
      let overlay = document.createElement("div");
      overlay.id = "lbOverlay";

      // Add the figure box to the overlay
      let figurebox = document.createElement("figure");
      overlay.appendChild(figurebox);

      // Add the image to the figure box
      let overlayImage = this.cloneNode(true);
      figurebox.appendChild(overlayImage);

      // Add the caption to the figure box
      let overlayCaption = document.createElement("figcaption");
      overlayCaption.textContent = this.alt; // the img triggering the overlay is the context for the caption text
      figurebox.appendChild(overlayCaption);

      // Add the close button to the overlay
      let closeBox = document.createElement("div");
      closeBox.id = "lbOverlayClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(overlay);
      }
      overlay.appendChild(closeBox);

      document.body.appendChild(overlay);
   }
}

/*
window.addEventListener("load", setupGallery);
*/

function setupGallery() {
   let imageCount = imgFiles.length;
   let galleryBox = document.getElementById("gallery");
   let currentSlide = 1;
   let runShow = true;
   let showRunning;
   
   let galleryTitle = document.createElement("h1");
   galleryTitle.id = "galleryTitle";
   galleryTitle.textContent = slidesTitle;
   galleryBox.appendChild(galleryTitle);
   
   let slideCounter = document.createElement("div");
   slideCounter.id = "slideCounter";
   slideCounter.textContent = currentSlide + "/" + imageCount;
   galleryBox.appendChild(slideCounter);
   
   let leftBox = document.createElement("div");
   leftBox.id = "leftBox";
   leftBox.innerHTML = "&#9664;";
   leftBox.onclick = moveToLeft;   
   galleryBox.appendChild(leftBox);
   
   let rightBox = document.createElement("div");
   rightBox.id = "rightBox";
   rightBox.innerHTML = "&#9654;";  
   rightBox.onclick = moveToRight;   
   galleryBox.appendChild(rightBox);
   
   let playPause = document.createElement("div");
   playPause.id = "playPause";
   playPause.innerHTML = "&#9199;";
   playPause.onclick = startStopShow;
   galleryBox.appendChild(playPause);
   
   let slideBox = document.createElement("div");
   slideBox.id = "slideBox";
   galleryBox.appendChild(slideBox);
   
   for (let i = 0; i < imageCount; i++) {
      let image = document.createElement("img");
      image.src = imgFiles[i];
      image.alt = imgCaptions[i];
      image.onclick = createModal;
      slideBox.appendChild(image);


   }
   
   function moveToRight() {
      let firstImage = slideBox.firstElementChild.cloneNode(true);
      firstImage.onclick = createModal;
      slideBox.appendChild(firstImage);
      slideBox.removeChild(slideBox.firstElementChild);
      currentSlide++;
      if (currentSlide > imageCount) {
         currentSlide = 1;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;
   }
   
   function moveToLeft() {
      let lastImage = slideBox.lastElementChild.cloneNode(true);
      lastImage.onclick = createModal;
      slideBox.removeChild(slideBox.lastElementChild);
      slideBox.insertBefore(lastImage, slideBox.firstElementChild);
      currentSlide--;
      if (currentSlide === 0) {
         currentSlide = imageCount;
      }
      slideCounter.textContent = currentSlide + " / " + imageCount;      
   }  
   
   function startStopShow() {
      if (runShow) {
         showRunning = window.setInterval(moveToRight, 2000);
         runShow = false;
      } else {
         window.clearInterval(showRunning);
         runShow = true;
      }
   }
   
   function createModal() {
      let modalWindow = document.createElement("div");
      modalWindow.id = "activeModal";
      
      let figureBox = document.createElement("figure");
      modalWindow.appendChild(figureBox);
      
      let modalImage = this.cloneNode(true);
      figureBox.appendChild(modalImage);
      
      let figureCaption = document.createElement("figcaption");
      figureCaption.textContent = modalImage.alt;
      figureBox.appendChild(figureCaption);
      
      let closeBox = document.createElement("div");
      closeBox.id = "modalClose";
      closeBox.innerHTML = "&times;";
      closeBox.onclick = function() {
         document.body.removeChild(modalWindow);
      };
      
      modalWindow.appendChild(closeBox);
      document.body.appendChild(modalWindow);
   }
}