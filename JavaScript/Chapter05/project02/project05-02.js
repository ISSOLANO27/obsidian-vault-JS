"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Israel Solano
      Date:   03/15/2026

      Filename: project05-02.js
*/

// Collection of all image elements
let images = document.getElementsByTagName("img");

// Reference to the photo bucket
let photoBucket = document.getElementById("photo_bucket");

// Reference to the photo list
let photoList = document.getElementById("photo_list");

// Loop through every image
for (let i = 0; i < images.length; i++) {

   images[i].onclick = function() {

      // If the image is currently inside the bucket
      if (this.parentNode.id === "photo_bucket") {

         let newItem = document.createElement("li");

         photoList.appendChild(newItem);

         newItem.appendChild(this);

      }

      // Otherwise return it to the bucket
      else {

         let oldItem = this.parentNode;

         photoBucket.appendChild(this);

         oldItem.parentNode.removeChild(oldItem);

      }

   };

}