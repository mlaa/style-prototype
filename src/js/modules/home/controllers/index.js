/* Home controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showHome = function () {

    // Add home page class.
    App.Root.$el.addClass('homepage');

    App.Content.show(Module.Views.Layout, {
      forceShow: true,
      preventDestroy: true
    });
  };

  return Backbone.Marionette.Controller.extend({
    showHome: showHome
  });

};
