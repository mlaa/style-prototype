/* Typeahead suggestions */

module.exports = function (Module, App, Backbone) {

  'use strict';

  var $ = Backbone.$;
  require('typeahead.js');

  // Load terms.
  var terms = require('./terms.json');

  // Add Typeahead to search field.
  function findMatches (q, cb) {

    // an array that will be populated with substring matches
    var matches = [];

    // regex used to determine if a string contains the substring `q`
    var substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(terms, function (i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);

  }

  var options = {
    hint: true,
    highlight: true,
    minLength: 2
  };

  var engine = {
    name: 'terms',
    source: findMatches
  };

  // Bind to search field.
  var bindSearch = function () {
    $('.typeahead-unbound').typeahead(options, engine).removeClass('typeahead-unbound');
  };

  App.Content.on('show', bindSearch);

};
