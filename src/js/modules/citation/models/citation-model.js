/* Citation model */

'use strict';

module.exports = function (Module, App, Backbone) {

  Module.Models = Module.Models || {};

  var Model = Backbone.Model.extend({
    defaults: {
      title: '',
      author: ''
    }
  });

  var Collection = Backbone.Collection.extend({
    model: Model
  });

  Module.Models.Citation = {
    Model: Model,
    Collection: Collection
  };

};
