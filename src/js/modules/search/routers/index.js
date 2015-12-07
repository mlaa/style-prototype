/* Search router */

'use strict';

module.exports = function (Module, App, Backbone) {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'internal/style-prototype/search': 'showSearchResults'
    }
  });
};
