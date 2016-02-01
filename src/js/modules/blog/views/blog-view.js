/* Blog view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var blogTemplate = require('../templates/blog.tpl');
  var blogEntryTemplate = require('../templates/blog-entry.tpl');
  var blogSidebarTemplate = require('../templates/blog-sidebar.tpl');

  var ChildView = Backbone.Marionette.ItemView.extend({
    className: 'page-blog-entry',
    template: blogEntryTemplate
  });

  var CollectionView = Backbone.Marionette.CollectionView.extend({
    childView: ChildView
  });

  var SidebarView = Backbone.Marionette.ItemView.extend({
    template: blogSidebarTemplate
  });

  var LayoutView = Backbone.Marionette.LayoutView.extend({

    template: blogTemplate,
    className: 'page-blog-container',

    regions: {
      main: '.page-blog-entries',
      sidebar: '.page-blog-sidebar'
    },

    initialize: function (options) {
      this.model = options.model;
      this.collection = options.collection;
    },

    onBeforeShow: function () {
      this.showChildView('main', new CollectionView({
        collection: this.collection
      }));
      this.showChildView('sidebar', new SidebarView({
        model: this.model
      }));
    }

  });

  Module.Views = Module.Views || {};
  Module.Views.Blog = LayoutView;

};
