/* Home controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showHome = function () {

    // Hide sidebar.
    App.Sidebar.$el.hide();

    App.Content.show(Module.Views.Layout, {
      forceShow: true,
      preventDestroy: true
    });
  };

  return Backbone.Marionette.Controller.extend({
    showHome: showHome
  });

};
