/*
 * Miscellaneous UI glue
 */

'use strict';

var $ = require('jquery');

// Bind to special UI elements.
$('.user-profile-link').on('click', function () {
  $('.user-profile-link').toggle();
});

$('#refine-search-link').on('click', function () {
  $('.search-field').focus();
  return true;
});

$('.search-field').on('keypress', function (e) {
  if (e.which === 10 || e.which === 13) {
    window.location = 'search.html';
    return false;
  }
});
