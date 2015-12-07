/* Layout view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var layoutTemplate = require('../templates/home.tpl');

  var Layout = Backbone.Marionette.LayoutView.extend({
    template: layoutTemplate
  });

  Module.Views = Module.Views || {};
  Module.Views.Layout = new Layout();

};
