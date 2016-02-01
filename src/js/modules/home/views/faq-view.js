/* FAQ view */

'use strict';

module.exports = function (Module, App, Backbone) {

  var faqTemplate = require('../templates/faq.tpl');
  var sidebarTemplate = require('../templates/faq-sidebar.tpl');

  var Faq = Backbone.Marionette.LayoutView.extend({
    template: faqTemplate,
    className: 'page-blog'
  });

  var Sidebar = Backbone.Marionette.LayoutView.extend({
    template: sidebarTemplate,
    className: 'blog-sidebar'
  });

  Module.Views = Module.Views || {};
  Module.Views.Faq = new Faq();
  Module.Views.FaqSidebar = new Sidebar();

};
