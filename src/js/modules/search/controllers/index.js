/* Search controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var searchResultsTemplate = require('../templates/search-results.tpl');

  // Generate search results view.
  var showSearchResults = function () {

    // Append the views to the content region.
    App.Content.$el.html(searchResultsTemplate());

  };

  return Backbone.Marionette.Controller.extend({
    showSearchResults: showSearchResults
  });

};
