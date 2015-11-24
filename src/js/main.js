/* Main */

'use strict';

var $ = require('jquery');
require('typeahead.js');

// Add Typeahead to search field
var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = [
  'plagiarism',
  'works cited',
  'How to cite a Web site',
  'How many spaces after a period',
  'How to cite a YouTube video'
];

$('.search-field').typeahead({
  hint: true,
  highlight: true,
  minLength: 2
},
{
  name: 'states',
  source: substringMatcher(states)
});


// Bind to special UI elements.

$('.user-profile-link').on('click', function () {
  $('.user-profile-link').toggle();
});

$('#refine-search-link').on('click', function () {
  $('.search-field').focus();
  return true;
});

$('.search-field').on('keypress', function (e) {
  if (e.which === 10 || e.which === 13) {
    window.location = 'search.html';
    return false;
  }
});
