/* UI glue */

module.exports = function (Module, App, Backbone) {

  'use strict';

  var $ = Backbone.$;

  // Bind to special UI elements.
  $('.user-profile-link').on('click', function () {
    $('.user-profile-link').toggle();
    return false;
  });

  $('#refine-search-link').on('click', function () {
    $('.search-field').focus();
    return true;
  });

  // Bind to search submission.
  var bindSearch = function () {
    $('.search-field').on('keypress', function (e) {
      if (e.which === 10 || e.which === 13) {
        Module.router.navigate('internal/style-prototype/search', true);
        return false;
      }
    });
  };

  App.Content.on('show', bindSearch);
  App.Sidebar.on('show', bindSearch);

};
