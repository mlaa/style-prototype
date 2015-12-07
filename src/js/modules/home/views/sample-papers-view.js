/* Sample papers view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var Page = Backbone.Marionette.LayoutView.extend({
    template: require('../templates/sample-papers.tpl'),
    className: 'page-sample-papers'
  });

  Module.Views = Module.Views || {};
  Module.Views.SamplePapers = new Page();

};
