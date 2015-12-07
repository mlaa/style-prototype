/* Session views */

'use strict';

var sourceTemplate = require('../templates/source-form.tpl');
var containerTemplate = require('../templates/container-form.tpl');

module.exports = function (Module, App, Backbone) {

  var $ = Backbone.$;
  var _ = Backbone._;

  var ItemView = Backbone.Marionette.ItemView.extend({

    tagName: 'fieldset',

    getTemplate: function () {
      return this.model.get('container') ? containerTemplate : sourceTemplate;
    },

    className: function () {
      return this.model.get('container') ? 'container' : 'source';
    },

    events: {
      'click .remove-container': 'removeContainer',
      'keyup input': 'updateField'
    },

    updateField: function (evt) {
      var $field = $(evt.target);
      var newAttr = {};
      newAttr[$field.attr('name')] = $field.val();
      this.model.set(newAttr);
    },

    removeContainer: function () {
      this.model.collection.remove(this.model);
    },

    serializeData: function () {
      return this.model.toJSON();
    }

  });

  var CollectionView = Backbone.Marionette.CollectionView.extend({

    childView: ItemView,
    tagName: 'div',
    className: 'citation',

    events: {
      'click .add-container': 'addContainer',
      'keyup input': 'updateCitation'
    },

    addContainer: function () {
      this.collection.add({});
    },

    onRemoveChild: function () {
      this.updateCitation();
    },

    updateCitation: function () {
      var citation = _.map(this.collection.models, function (model) {
        return model.getCitationString();
      });
      $('#citation-el').html(citation.join(''));
    }

  });

  Module.Views = Module.Views || {};

  Module.Views.Citation = {
    ItemView: ItemView,
    CollectionView: CollectionView
  };

};
