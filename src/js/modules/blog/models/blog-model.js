/* Blog model */

'use strict';

module.exports = function (Module, App, Backbone) {

  var Model = Backbone.Model.extend({});
  var Collection = Backbone.Collection.extend({
    model: Model
  });

  Module.Collection = Collection;

};
