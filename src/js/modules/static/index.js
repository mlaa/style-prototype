/* Static */

module.exports = function (Module, App, Backbone) {

  'use strict';

  require('./views/about-view.js')(Module, App, Backbone);
  require('./views/home-view.js')(Module, App, Backbone);
  require('./views/sample-chapter-view.js')(Module, App, Backbone);
  require('./views/sample-papers-view.js')(Module, App, Backbone);
  require('./views/teaching-resources.js')(Module, App, Backbone);

  var Router = require('./routers')(Module, App, Backbone);
  var Controller = require('./controllers')(Module, App, Backbone);

  App.addInitializer(function () {
    Module.router = new Router({
      controller: new Controller()
    });
  });

};
