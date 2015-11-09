/* Main */

'use strict';

var $ = require('jquery');
var ScrollSpy = require('scrollspy-js');
var navigationPage = require('./modules/navigation-page.js');

require('typeahead.js');

var pageMenuSelector = '.page-nav';

// Construct in-page menu.
var pageMenu = navigationPage(pageMenuSelector, 2, 'Page menu');

if (pageMenu) {
  // Start scroll spy.
  exports.scrollspy = new ScrollSpy(pageMenuSelector, {
    nav: pageMenuSelector + ' a',
    className: 'current'
  });
}

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

$('.user-profile-link').on('click', function () {
  $('.user-profile-link').toggle();
})
