/* Citation controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showCitationForm = function () {

    // Remove home page class.
    App.Root.$el.removeClass('homepage');

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
