/* Home controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showHome = function () {

    // Add home page class.
    App.Body.$el.addClass('homepage');

    App.Content.show(Module.Views.Layout, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showBlog = function () {

    // Add home page class.
    App.Body.$el.removeClass('homepage');

    App.Content.show(Module.Views.Blog, {
      forceShow: true,
      preventDestroy: true
    });

    App.Sidebar.show(Module.Views.BlogSidebar, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showFaq = function () {

    // Add home page class.
    App.Body.$el.removeClass('homepage');

    App.Content.show(Module.Views.Faq, {
      forceShow: true,
      preventDestroy: true
    });

    App.Sidebar.show(Module.Views.FaqSidebar, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showSamplePapers = function () {

    // Add home page class.
    App.Body.$el.removeClass('homepage');

    App.Content.show(Module.Views.SamplePapers, {
      forceShow: true,
      preventDestroy: true
    });

  };

  return Backbone.Marionette.Controller.extend({
    showHome: showHome,
    showBlog: showBlog,
    showFaq: showFaq,
    showSamplePapers: showSamplePapers
  });

};
