var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

// TODO: Install the body parser module in your terminal:
//
// npm install --save body-parser
//
// (Make sure you're in the root directory of your f2-pdx-simple-site project!)

// Then uncomment the following lines and fill in the question marks.
// Hint: the module name is: body-parser
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/app/'));

// var course = {
//   level: 201,
//   name: 'Foundations 2: JavaScript',
//   lectures: [
//     { "topic": "Intro, Basics 1",
//       "notes": [ "The primitive data types are Boolean, Null, Undefined, Number, and String.",
//                  "Parameters become variables inside their function.",
//                  "A method is a function that is also the value of an object property."
//                ]
//     },
//     { "topic": "Basics 2",
//       "notes": [ "Logical operators return the result of the last expression evaluated.",
//                  "Loops execute the same instructions multiple times.",
//                  "An infinite loop is a loop that never satisfies its exit condition."
//                ]
//     },
//     { "topic": "Array Methods, Functions, Scope",
//       "notes": [ "join() takes a delimiter, returns a string.",
//                  "Generally useful code is often packaged up as a collection of functions and data in libraries.",
//                  "JavaScript is function-scoped."
//                ] },
//     { "topic": "Object Oriented Programming" },
//     { "topic": "JavaScript in the Browser" },
//     { "topic": "Node.js and Express" },
//     { "topic": "Workshop" },
//     { "topic": "lodash" }
//   ],
//   labs: [
//     { "topic": "Basics" },
//     { "topic": "Object Oriented Programming"},
//     { "topic": "Project"}
//   ]
// };

// function findPhrase(phrase) {
//   var results = {
//     lectures: [],
//     labs: []
//   };

//   var notes = [];

//   for (var i = 0; i < course.lectures.length; i++) {
//     // TODO: Use the same code we implemented on the front end to check
//     //       that we have notes and that "notes" is an array.
//     if (course.lectures[i].notes && course.lectures[i].notes.constructor === Array) {
//       for (var j = 0; j < course.lectures[i].notes.length; j++) {
//         if (course.lectures[i].notes[j].indexOf(phrase)) {
//           notes.push(course.lectures[i].notes[j]);
//         }
//       }
//     }
//   }
//   // notes = searchCourseSection('lectures', phrase);
//   // notes.concat(searchCourseSection('labs', phrase));
//   results =  { notes: notes };

//   // TODO: We need to do the same thing for labs that we did for
//   //       lectures. Can you convert the loop into a function
//   //       that accepts 2 parameters: section and phrase,
//   //       and lets us search either lectures or labs?

//   return results;
// }
// TODO: Instead of app.get(), we want to follow the same pattern using app.post().
//       Surround the following lines of code with app.post() and make sure to
//       call your endpoint "search".
app.post('/search', function (req, res) {

// TODO: Once you've surrounded this code with app.post(),
//       we need to unpack our search phrase from req.body.
//       Instead of the question marks, specify the name of the
//       parameter that contains our search text.
  var searchText = req.body.searchText;
  var searchResults = findPhrase(searchText);
  res.json(searchResults);
});



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
