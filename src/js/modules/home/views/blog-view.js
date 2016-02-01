/* Blog view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var blogTemplate = require('../templates/blog.tpl');
  var sidebarTemplate = require('../templates/blog-sidebar.tpl');

  var Blog = Backbone.Marionette.LayoutView.extend({
    template: blogTemplate,
    className: 'page-blog'
  });

  var Sidebar = Backbone.Marionette.LayoutView.extend({
    template: sidebarTemplate,
    className: 'blog-sidebar'
  });

  Module.Views = Module.Views || {};
  Module.Views.Blog = new Blog();
  Module.Views.BlogSidebar = new Sidebar();

};
