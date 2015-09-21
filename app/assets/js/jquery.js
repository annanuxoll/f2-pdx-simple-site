// ---------------------------------------------
// jQuery
// A commonly used JavaScript library — the preferred way of querying and manipulating the DOM.
//
// Why jQuery?
// * Cross browser support.
//   (document.querySelector() isn’t in older versions of IE, etc).
// * Simpler syntax (no looping needed).
// * Extra functionality built-in for common needs (animation, fading).
// * Ecosystem of plugins available.
//   http://plugins.jquery.com/
//
// Include your main.js file in your HTML file.
// > Why does it have to be after including jQuery?
// > Verify that both files loaded in your browser tools.
//
// References:
// * http://api.jquery.com/
// * http://oscarotero.com/jquery/
//
// Example 5: window.addEventListener("load")
//
// Task: Open an alert dialog on page load to welcome the user to the page.
//

// function welcomeUserToPage () {
//   alert("Welcome to Foundations 2!");
// }
// window.addEventListener("load", welcomeUserToPage);

$(window).on("load", function() {
  alert("Welcome to Foundations 2!");
});

// $(window).on("load", welcomeUserToPage);

// $(document).ready(function() {
//   alert("Welcome to Foundations 2!");
// });

// $(function() {
//   alert("Welcome to Foundations 2!");
// });

// KEY CONCEPT:
//
// $(document).ready()
// Register a handler for when the DOM is available.
// This is much more common than waiting for the "load" event.
// Synchronizes and creates a new scope.

//
// Example 6: Handling the resize event
//
//            resize = An event on the window object.
//            Signifies the user changed the viewing dimensions.
//            Use it to implement "responsive design": adjust layout, styling, and element visibility.
//
// jQuery version:
// You'll need: $(window).on()
//              $(window).width()
//              $(element).height(desiredHeight)

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

// $(window).on("resize", function() {
//   var imgWidth = $(window).width() / 2.0;
//   var imgHeight = imgWidth * 0.8;
//   $("li img").width(imgWidth)
//              .height(imgHeight);
// });

//
// $(selector).click(handler) = $(selector).on('click', handler);
//
// $(this)
//
// Inside an event handler, this is the element the event targeted. It’s the same as event.target.
//
// $(this) creates a jQuery object that wraps event.target.

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

// var imgTags = document.getElementsByTagName("img");
// var labsUl = document.getElementsByTagName("ul")[1];

// for(var i = 0; i < imgTags.length; i++) {
//   imgTags[i].addEventListener("click", function (evt){
//     var liToMove = event.target.parentNode;
//     liToMove.remove();
//     labsUl.appendChild(liToMove);
//   });
// }

// jQuery Version 1:
// $("img").click(function() {
//   var $li = $(this).parent();
//   var $ul = $li.parent();
//   $li.remove().appendTo($ul);
// });

// on()
//
// Register a handler on an ancestor of the elements you’re targeting.
//
// Usage: $(ancestor).on(event, decendentSelector, handler);
//
// jQuery Version 2:
// $("ul").on("click", "li", function() {
//   $ul = $(this).parent();
//   $(this).remove()
//          .appendTo($ul);
// });

//
// Example 8: $().show() and $().hide()
//
// Task: Hide all the lab images on page load.
//       When a button is clicked, show the corresponding list item (and only that list item)
//
// Modify HTML:
// - add data element to buttons: data-lab="lab1"
// - add same class names to lab li elements: class="lab1"
// $(document).ready(function () {
//   $('#lab-images li').hide();

//   $('#buttons button').click(function (evt) {
//     evt.preventDefault();

//     var labClass = $(this).data('lab');
//     // What if we type: $(labClass).show();
//     $('#lab-images li').hide();
//     $('.' + labClass).show();
//   });
// });


// BONUS CONCEPT: data attributes

// KEY CONCEPT:  Event bubbling vs. capturing
// * If events BUBBLE:
//    we first see the event (if set) for the innermost element
//    and then we "bubble up" to any events that were set on the parent element(s).
//    --- DEFAULT EVENT BEHAVIOR
// * If events CAPTURE (aka "trickle"):
//    we first see the event (if set) for the outermost element
//    and then we trickle down to any events that were set on the child element(s).
//    --- Set by using: addEventListener("type", function () {}, true)
//    --- Not available in IE<9
//

//
// KEY CONCEPT: Triggering events in code
//
// $(element).trigger("click");
// $(element).click(); // without an argument!
//

//
// KEY CONCEPT: Custom events
//
// An event on a DOM element.
// Can be on any element, named anything, and have any parameters you want.
// Use to coordinate behaviors in your code, or to respond to actions in a library.
//

//
// KEY CONCEPT: Event Parameters
// $('body').on("completeTask", function (e, task){
//   console.log("i completed the following task: " + task);
// });
// $('body').trigger("completeTask", "Lecture for class # 5");
//
