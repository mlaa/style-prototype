/* Home controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var homeTemplate = require('../templates/home.tpl');

  // Generate search results view.
  var showHome = function () {
    // Append the views to the content region.
    App.Content.$el.html(homeTemplate());

  };

  return Backbone.Marionette.Controller.extend({
    showHome: showHome
  });

};
