/* Search */

module.exports = function (Module, App, Backbone) {

  'use strict';

  var Router = require('./routers')(Module, App, Backbone);
  var Controller = require('./controllers')(Module, App, Backbone);

  App.addInitializer(function () {
    Module.router = new Router({
      controller: new Controller()
    });
  });

  require('./ui')(Module, App, Backbone);

};
