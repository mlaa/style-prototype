/* Home view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var layoutTemplate = require('../templates/home.tpl');

  var Layout = Backbone.Marionette.LayoutView.extend({
    template: layoutTemplate,
    className: 'homepage-tiles'
  });

  Module.Views = Module.Views || {};
  Module.Views.Home = new Layout();

};
