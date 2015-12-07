/* Blog view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var blogTemplate = require('../templates/blog.tpl');

  var Blog = Backbone.Marionette.LayoutView.extend({
    template: blogTemplate,
    className: 'page-blog'
  });

  Module.Views = Module.Views || {};
  Module.Views.Blog = new Blog();

};
