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
        container: true,
        containerNumber: 1,
        order: this.collection.nextOrder()
      };
    },

    getCitationString: function () {

      var modelAttrs = this.attributes;

      if (this.attributes.container) {

        var containrAttrs = [
          'title',
          'author',
          'version',
          'number',
          'publisher',
          'pubdate',
          'location'
        ];

        // Filter attributes for valid string values, then reduce to a
        // citation string.
        var citation = _.filter(containrAttrs, function (attr) {
          var val = modelAttrs[attr];
          return (typeof val === 'string' && val.replace(/\s/g, '') !== '');
        }).reduce(function (str, attr) {
          return str + modelAttrs[attr] + ', ';
        }, '');

        // Replace last combinator with period.
        return '<span>' + citation.replace(/, $/, '.') + '</span> ';

      } else {

        var sourceAttrs = [
          'author',
          'title'
        ];

        // Filter attributes for valid string values, then reduce to a
        // citation string.
        return _.filter(sourceAttrs, function (attr) {
          var val = modelAttrs[attr];
          return (typeof val === 'string' && val.replace(/\s/g, '') !== '');
        }).reduce(function (str, attr) {
          return str + modelAttrs[attr] + '. ';
        }, '');

      }

    }

  });

  var Collection = Backbone.Collection.extend({

    model: Model,
    comparator: 'order',

    initialize: function () {
      this.bind('add remove', this.updateNumbers);
    },

    updateNumbers: function () {
      this.each(function (model, i) {
        model.set('containerNumber', i);
      });
    },

    nextOrder: function () {
      return (!this.length) ? 1 : this.last().get('order') + 1;
    }

  });

  Module.Models.Citation = {
    Model: Model,
    Collection: Collection
  };

};
