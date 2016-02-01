/* Blog router */

'use strict';

module.exports = function (Module, App, Backbone) {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'blog': 'showTag',
      'blog/tag/:tag': 'showTag'
    }
  });
};
