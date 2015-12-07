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
  Sidebar: '.sidebar',
  Content: '.content'
});

// Load modules.
App.module('Home', require('./modules/home'));
App.module('Navigation', require('./modules/navigation'));
App.module('Citation', require('./modules/citation'));
App.module('Links', require('./modules/links'));
App.module('Search', require('./modules/search'));
App.module('Typeahead', require('./modules/typeahead'));

// Start the history listener.
App.on('start', function () {
  Backbone.history.start({pushState: true});
});

// Start the application.
App.start();
