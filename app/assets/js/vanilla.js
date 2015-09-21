//
// Example 1: getElementsByTagName()
//
var titleTags = document.getElementsByTagName("title");
var title = titleTags[0]; //titleTags is an array
title.text = "F2: JavaScript | Class Summary";


//
// Example 2: getElementById()
//
// Task: Use getElementById to add a style attribute to the <ul>
//       that removes the bullets to the left of the images.
//
// Resources:
// https://developer.mozilla.org/en-US/docs/Web/API/Element.setAttribute
// https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type
//
var picsUl = document.getElementById("lab-images");
picsUl.style.cssText = "list-style-type: none;";

// Alternate:
// picsUl.setAttribute("style", "list-style-type: none;");

//
// Example 3: querySelectorAll()
//
// Task: Make the images all have a maximum width of 200px.
//
var imgTags = document.querySelectorAll("li img");

for(var i = 0; i < imgTags.length; i++) {
  imgTags[i].setAttribute(
    "style",
    "max-width: 200px;"
  );
}

//
// Example 4: querySelector() + createElement() + appendChild()
//
// Task: Find another picture to illustrate one of the labs.
//       Use JavaScript to add a new <li> element in your existing <ul>.
//       Then add a new <img> element to the <li> and specify its src.
//       You can use the URL of the image you found as the src,
//       or you can download the new image to your assets/img folder.
//
// You’ll need: document.createElement() and element.appendChild()
//

// var ulTag = document.querySelector("ul"); // Note: this assumes just one ul on the page
// var newLi = document.createElement("li");
// var newImg = document.createElement("img");
// newImg.setAttribute( "src", "http://www.ex-astris-scientia.org/gallery/30-jahre/st3-klingons.jpg" );
// newLi.appendChild(newImg);
// ulTag.appendChild(newLi); // Why doesn't it have the styling we applied earlier?

//
// Example 5: window.addEventListener("load")
//
// Task: Open an alert dialog on page load to welcome the user to the page.
//
// You’ll need: alert() and <script>
// To begin, do this in lecture-summary.html at the bottom of the page.
// (You can't proof this code in the console. Why not?)
//

function welcomeUserToPage () {
  alert("Welcome to Foundations 2!");
}
// window.addEventListener("load", welcomeUserToPage);

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// Task: Make the images half the window width each time the resize event triggers.
//
// You’ll need: window.innerWidth and window.innerHeight
//

// window.addEventListener("resize", function () {
//   var imgTags = document.getElementsByTagName("img");
//   var previousStyle;
//   var imgWidth = window.innerWidth / 2;
//   var imgHeight = imgWidth * 0.8;
//   for(var i = 0; i < imgTags.length; i++) {
//     previousStyle = imgTags[i].getAttribute("style") || "";
//     var newStyle = previousStyle + " height:" + imgHeight + "px;width:" + imgWidth + "px;";
//     imgTags[i].setAttribute("style", newStyle);
//   }
// });

// KEY CONCEPT: Event Object
//
// An object passed to event handlers to give you information about the event.
//
//   element.addEventListener(eventName, function (event) {});
//
// event.target is the node on which the event was triggered.


//
// Example 7: Handling a click event
//
//            click = An event on a DOM element.
//            Signifies the user clicked that element with a mouse or trackpad.
//            Use it to interact with the user: open a menu,respond to a button-click, etc.
//
// Task: Every time an image is clicked, move it to the end of the <ul>.
//
// You’ll need: event.target.parentNode
//              element.remove()
//              element.appendChild()
//

var imgTags = document.getElementsByTagName("img");
var labsUl = document.getElementsByTagName("ul")[1];
// What alternatives do we have for getting labsUl that might be better?

for(var i = 0; i < imgTags.length; i++) {
  imgTags[i].addEventListener("click", function (evt){
    var liToMove = event.target.parentNode;
    liToMove.remove();
    labsUl.appendChild(liToMove);
  });
}



