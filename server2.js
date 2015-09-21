var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// TODO: Install the body parser module in your terminal:

// Then uncomment the following lines and fill in the question marks.
// Hint: the module name is: body-parser
// var bodyparser = require("??????");
// app.use(bodyparser.json());
// app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

var course = {
  level: 201,
  name: 'Foundations 2: JavaScript',
  lectures: [
    { "topic": "Intro, Basics 1",
      "notes": [ "The primitive data types are Boolean, Null, Undefined, Number, and String.",
                 "Parameters become variables inside their function.",
                 "A method is a function that is also the value of an object property."
               ]
    },
    { "topic": "Basics 2",
      "notes": [ "Logical operators return the result of the last expression evaluated.",
                 "Loops execute the same instructions multiple times.",
                 "An infinite loop is a loop that never satisfies its exit condition."
               ]
    },
    { "topic": "Array Methods, Functions, Scope",
      "notes": [ "join() takes a delimiter, returns a string.",
                 "Generally useful code is often packaged up as a collection of functions and data in libraries.",
                 "JavaScript is function-scoped."
               ] },
    { "topic": "Object Oriented Programming" },
    { "topic": "JavaScript in the Browser" },
    { "topic": "Node.js and Express" },
    { "topic": "Workshop" },
    { "topic": "lodash" }
  ],
  labs: [
    { "topic": "Basics" },
    { "topic": "Object Oriented Programming"},
    { "topic": "Project"}
  ]
};

function findPhrase(phrase) {
  var results = {
    lectures: [],
    labs: []
  };

  // Let's start by stubbing out some functionality so we can test
  // the other parts of our code before writing the search algorithm.
  results.lectures = course.lectures;
  results.labs = course.labs;

  return results;
}

// TODO: Instead of app.get(), we want to follow the same pattern using app.post().
//       Surround the following lines of code with app.post() and make sure to
//       call your endpoint "search".


// TODO: Once you've surrounded this code with app.post(),
//       we need to unpack our search phrase from req.body.
//       Instead of the question marks, specify the name of the
//       parameter that contains our search text.
// var searchResults = findPhrase(req.body.?????);
// res.json(searchResults);



app.get('/lectures', function (req, res) {
  res.json(course.lectures);
});

app.get('/labs', function (req, res) {
  res.json(course.labs);
});

app.get('/course_name', function (req, res) {
  res.json(course.name);
});

app.get('/', function (req, res) {
  res.sendFile();
});

app.listen(port, function () {
  console.log('server started on port ' + port);
});
