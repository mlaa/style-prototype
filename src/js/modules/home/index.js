/* Home */

module.exports = function (Module, App, Backbone) {

  'use strict';

  require('./views/layout-view.js')(Module, App, Backbone);
  require('./views/blog-view.js')(Module, App, Backbone);
  require('./views/sample-papers-view.js')(Module, App, Backbone);

  var Router = require('./routers')(Module, App, Backbone);
  var Controller = require('./controllers')(Module, App, Backbone);

  App.addInitializer(function () {
    Module.router = new Router({
      controller: new Controller()
    });
  });

};
