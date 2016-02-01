/* Static controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showHome = function () {

    App.Content.show(Module.Views.Home, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showAbout = function () {

    App.Content.show(Module.Views.About, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showSampleChapter = function () {

    App.Content.show(Module.Views.SampleChapter, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showSamplePapers = function () {

    App.Content.show(Module.Views.SamplePapers, {
      forceShow: true,
      preventDestroy: true
    });

  };

  var showTeachingResources = function () {

    App.Content.show(Module.Views.TeachingResources, {
      forceShow: true,
      preventDestroy: true
    });

  };

  return Backbone.Marionette.Controller.extend({
    showAbout: showAbout,
    showHome: showHome,
    showSampleChapter: showSampleChapter,
    showSamplePapers: showSamplePapers,
    showTeachingResources: showTeachingResources
  });

};
