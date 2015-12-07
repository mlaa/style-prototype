/* Citation controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showCitationForm = function () {

    // Show sidebar.
    App.Sidebar.show(App.Navigation.Views.Layout, {
      forceShow: true,
      preventDestroy: true
    });

    App.Content.show(Module.Views.Layout, {
      forceShow: true,
      preventDestroy: true
    });

    Module.Views.Layout.showChildView('form', new Module.Views.Citation.CollectionView({
      collection: new Module.Models.Citation.Collection([{container: false}, {}])
    }));

  };

  return Backbone.Marionette.Controller.extend({
    showCitationForm: showCitationForm
  });

};
