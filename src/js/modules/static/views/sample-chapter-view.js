/* Sample chapter view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var Page = Backbone.Marionette.LayoutView.extend({
    template: require('../templates/sample-chapter.tpl'),
    className: 'page-generic'
  });

  Module.Views = Module.Views || {};
  Module.Views.SampleChapter = new Page();

};
