/* Session controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var showCitationForm = function () {
    App.Content.show(new Module.Views.Citation.CollectionView({
      collection: new Module.Models.Citation.Collection([{title: 'test123'}])
    }));
  };

  return Backbone.Marionette.Controller.extend({
    showCitationForm: showCitationForm
  });

};
