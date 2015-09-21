$(function () {
  // Let's use a class instead of the button element.
  // This will make our code more reusable and compatible.
  // It will also improve performance on the front end
  // because the browser looks for CSS selectors by
  // narrowing the search left to right.
  $('.get-info').click(function () {
    var section = $(this).attr('id');

    $.get("http://localhost:3000/" + section, function (response) {
      $("#show-" + section).text(response[0].topic);
    });
  });

  // Code Challenge 1:
  // When the user clicks the "Find It" button,
  // let's get back all the Lectures notes and display them.
  $("#search").on("submit", function(e) {
    // TODO: Prevent the form from submitting the default way.
    e.preventDefault();

    // TODO: Get the value of the input text box with name="searchText"
    //       and assign the value into a variable called searchText.
    // Hint: Look up the CSS selector to find an input by its "name"
    // Hint: Use the jQuery method .val() to get the value of an input
    var searchText = $('input[name=searchText]').val();
    var lucky = $('input[name=lucky]').is(':checked');
    var data = { searchText: searchText, lucky: lucky };
    // TODO: What's the URL of the endpoint we're going to hit?
    var url = 'http://localhost:3000/search';

    console.log(data); // this will be a sanity check to see that we're getting the data
    $.post(url, data, function(response) {
      var lectures,
          output = '';

      // TODO: Get the lectures property from the response object and
      //       assign it into the lectures variable.
      if (response.notes && response.notes.constructor === Array) {
        for (var i = 0; i < response.notes.length; i++) {
          output += '<li>' + response.notes[i] + '</li>';
        }
      }
      output = '<ul>' + output + '</ul>';

      // TODO: What div are we putting our results into?
      //       Which variable shows our unordered list?
      $("#search-results").html(output);
    });
  });

      // for (var i = 0; i < lectures.length; i++) {
      //   if (typeof lectures[i].notes === 'object') {
      //     for (var j = 0; j < lectures[i].notes.length; j++) {
      //       output += '<li>' + lectures[i].notes[j] + '</li>';
      //     }
      //   }
      // }


  // Done with Code Challenge 1 early? Next steps:
  // 1. First, use your browser console tools to watch your Ajax
  //    request and response. Open the "Network" tab and hit the search
  //    button a few times. Use different values in your search box.
  // 2. Still want more? Try using a jQuery iterator to loop over the results
  //    you get back from the server, instead of using a for loop.

});




