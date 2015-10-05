/* Main */

'use strict';

var ScrollSpy = require('scrollspy-js');
var navigationPage = require('./modules/navigation-page.js');

var pageMenuSelector = '.page-nav';
var exampleSelector = '.example-render';

// Construct in-page menu.
var pageMenu = navigationPage(pageMenuSelector, 2, 'Page menu');

if (pageMenu) {
  // Start scroll spy.
  exports.scrollspy = new ScrollSpy(pageMenuSelector, {
    nav: pageMenuSelector + ' a',
    className: 'current'
  });
}

// Add syntax-highlighted markup examples.
syntaxHighlighter(exampleSelector);
