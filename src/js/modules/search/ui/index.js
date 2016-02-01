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
    $('.site-search-field').focus();
    return true;
  });

  // Bind to search submission.
  var bindSearch = function () {
    $('.search-unbound').on('keypress', function (e) {
      if (e.which === 10 || e.which === 13) {
        Module.router.navigate('search', true);
        return false;
      }
    }).removeClass('search-unbound');
  };

  App.Content.on('show', bindSearch);

};
