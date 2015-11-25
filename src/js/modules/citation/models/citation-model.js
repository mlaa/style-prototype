/* Citation model */

'use strict';

module.exports = function (Module, App, Backbone) {

  Module.Models = Module.Models || {};

  var _ = Backbone._;

  var Model = Backbone.Model.extend({

    defaults: function () {
      return {
        title: null,
        author: null,
        version: null,
        number: null,
        publisher: null,
        pubdate: null,
        location: null,
        order: this.collection.nextOrder()
      };
    },

    getCitationString: function () {
      var str = '';
      console.log(this);
      _.each(this.attributes, function (val) {
        if (val && typeof val === 'string') {
          str += val + ', ';
        }
      });
      return str;
    }

  });

  var Collection = Backbone.Collection.extend({

    model: Model,
    comparator: 'order',

    nextOrder: function() {
      return (!this.length) ? 1 : this.last().get('order') + 1;
    }

  });

  Module.Models.Citation = {
    Model: Model,
    Collection: Collection
  };

};
