/* Static router */

'use strict';

module.exports = function (Module, App, Backbone) {
  return Backbone.Marionette.AppRouter.extend({
    appRoutes: {
      '': 'showHome',
      'about': 'showAbout',
      'sample-chapter': 'showSampleChapter',
      'sample-papers': 'showSamplePapers',
      'teaching-resources': 'showTeachingResources'
    }
  });
};
