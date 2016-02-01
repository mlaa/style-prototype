/* Blog controller */

'use strict';

module.exports = function (Module, App, Backbone) {

  var _ = Backbone._;

  var showTag = function (tag) {

    var tagAttributes = _.clone(Module.Data.defaults.attributes);
    var tagEntries = Module.Data.entries;
    var tagTemplate = Module.Data.defaults.description;

    tagAttributes.tags = _.sortBy(_.groupBy(_.flatten(_.pluck(tagEntries, 'tags'))), function (item) {
      return 0 - item.length;
    });

    if (tag) {

      tagEntries = tagEntries.filter(function (entry) {
        return entry.tags.indexOf(tag) !== -1;
      });

      if (tag !== 'article') {
        tagAttributes.description = tagTemplate.replace(/\%count/, tagEntries.length).replace(/\%tag/g, tag);
      }

    }

    var blogView = new Module.Views.Blog({
      model: new Backbone.Model(tagAttributes),
      collection: new Module.Collection(tagEntries)
    });

    App.Content.show(blogView, {
      forceShow: true,
      preventDestroy: true
    });

  };

  return Backbone.Marionette.Controller.extend({
    showTag: showTag
  });

};
