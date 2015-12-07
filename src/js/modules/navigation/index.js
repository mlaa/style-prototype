/* Navigation */

module.exports = function (Module, App, Backbone) {

  'use strict';

  require('./views/layout-view.js')(Module, App, Backbone);

  App.Sidebar.show(Module.Views.Layout, {
    forceShow: true,
    preventDestroy: true
  });

};
