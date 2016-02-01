/* Blog */

module.exports = function (Module, App, Backbone) {

  'use strict';

  Module.Data = require('./data/blog.json');

  require('./models/blog-model.js')(Module, App, Backbone);
  require('./views/blog-view.js')(Module, App, Backbone);

  var Router = require('./routers')(Module, App, Backbone);
  var Controller = require('./controllers')(Module, App, Backbone);

  App.addInitializer(function () {
    Module.router = new Router({
      controller: new Controller()
    });
  });

};
