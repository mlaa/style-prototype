/* Main */

'use strict';

var jQuery = require('jquery');
var underscore = require('underscore');
var Backbone = require('backbone');
var attachFastClick = require('fastclick');

// Side-shim jQuery and Underscore before requiring Marionette.
Backbone.$ = jQuery;
Backbone._ = underscore;
require('backbone.marionette');

// Attach FastClick.
attachFastClick(document.body);

// Create the application.
var App = new Backbone.Marionette.Application();

// Add regions.
App.addRegions({
  Body: 'body',
  Content: '.content'
});

// Load modules.
App.module('Blog', require('./modules/blog'));
App.module('Citation', require('./modules/citation'));
App.module('Links', require('./modules/links'));
App.module('Search', require('./modules/search'));
App.module('Static', require('./modules/static'));
App.module('Typeahead', require('./modules/typeahead'));

// Start the history listener.
App.on('start', function () {
  Backbone.history.start({
    pushState: true,
    root: '/internal/style-prototype/'
  });
});

// Start the application.
App.start();
