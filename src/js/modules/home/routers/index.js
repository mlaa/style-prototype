/* Home router */

'use strict';

module.exports = function (Module, App, Backbone) {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      'internal/style-prototype/': 'showHome',
      'internal/style-prototype/blog': 'showBlog',
      'internal/style-prototype/faq': 'showFaq',
      'internal/style-prototype/sample-papers': 'showSamplePapers'
    }
  });
};
