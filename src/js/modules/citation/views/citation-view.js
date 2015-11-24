/* Session views */

'use strict';

var citationTemplate = require('../templates/citation.tpl');

module.exports = function (Module, App, Backbone) {

  var $ = Backbone.$;

  var ItemView = Backbone.Marionette.ItemView.extend({

    tagName: 'li',
    template: citationTemplate,

    className: function () {
      return this.model.attributes.type || null;
    },

    serializeData: function () {
      return this.model.toJSON();
    }

  });

  var CollectionView = Backbone.Marionette.CollectionView.extend({

    childView: ItemView,
    tagName: 'ul',
    className: 'list',

    events: {
      'click .head': 'loadParentMenu',
      'click .filter-head': 'editFilters',
      'click .subhead': 'toggleSessions',
      'click a': 'saveMenuState'
    }

  });

  Module.Views = Module.Views || {};

  Module.Views.Citation = {
    ItemView: ItemView,
    CollectionView: CollectionView
  };

};
