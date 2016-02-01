/* Teaching resources view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var Page = Backbone.Marionette.LayoutView.extend({
    template: require('../templates/teaching-resources.tpl'),
    className: 'page-generic'
  });

  Module.Views = Module.Views || {};
  Module.Views.TeachingResources = new Page();

};
