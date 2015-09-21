
module.exports = function(searchText) {

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

  var findPhrase = function (phrase) {
    var results = {
      lectures: [],
      labs: []
    };

    var notes = [];

    notes = searchCourseSection('lectures', phrase);
    notes.concat(searchCourseSection('labs', phrase));
    results =  { notes: notes };

    return results;
  }

  var searchCourseSection = function (section, phrase) {
    var results = [],
        noteLc = '';

    for (var i = 0; i < course[section].length; i++) {
      if (course[section][i].notes && course[section][i].notes.constructor === Array) {
        for (var j = 0; j < course[section][i].notes.length; j++) {
          noteLc = course[section][i].notes[j].toLowerCase();
          if (noteLc.indexOf(phrase.toLowerCase()) >= 0) {
            var resultsObj = {
              note: course[section][i].notes[j],
              section: section,
              topic: course[section][i].topic
            };

            results.push(resultsObj.note);
          }
        }
      }
    }

    return results;
  }

  return findPhrase(searchText);

};
