/* About view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var layoutTemplate = require('../templates/about.tpl');

  var Layout = Backbone.Marionette.LayoutView.extend({
    template: layoutTemplate,
    className: 'page-generic'
  });

  Module.Views = Module.Views || {};
  Module.Views.About = new Layout();

};
