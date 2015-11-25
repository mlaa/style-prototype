/* Session views */

'use strict';

var containerTemplate = require('../templates/container-form.tpl');

module.exports = function (Module, App, Backbone) {

  var $ = Backbone.$;
  var _ = Backbone._;

  var ItemView = Backbone.Marionette.ItemView.extend({

    tagName: 'fieldset',
    template: containerTemplate,

    className: function () {
      return this.model.attributes.type || null;
    },

    events: {
      'keyup input': 'updateField'
    },

    updateField: function (evt) {
      var $field = $(evt.target);
      console.log(this.model);
    },

    serializeData: function () {
      return this.model.toJSON();
    }

  });

  var CollectionView = Backbone.Marionette.CollectionView.extend({

    childView: ItemView,
    tagName: 'div',
    className: 'citation',

    $ui: {
      citation: $('#citation-el')
    },

    events: {
      'keyup input': 'updateCitation'
    },

    updateCitation: function () {

      var citation = _.map(this.collection.models, function (model) {
        return model.getCitationString();
      });


      console.log(citation);
      this.$ui.citation.html(citation.join());
    }

  });

  Module.Views = Module.Views || {};

  Module.Views.Citation = {
    ItemView: ItemView,
    CollectionView: CollectionView
  };

};
