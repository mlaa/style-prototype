/*
 * Page-menu generator
 * ---
 * Generates an in-page menu from headers present in the page, down to
 * specified header level (h1 = 1, h2 = 2, etc.).
 */

'use strict';

module.exports = function (selector, headerLevel, title) {

  var target = document.querySelector(selector);

  if (!target) {
    return;
  }

  var headerTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  var headers = document.querySelectorAll(headerTags.slice(0, headerLevel).join(', '));
  var length = headers.length;
  var i;

  // Create unordered list element.
  var list = document.createElement('ul');

  // Append a title for this menu
  var menuHeader = document.createElement('h3');
  var headerText = document.createTextNode(title);
  menuHeader.appendChild(headerText);
  list.appendChild(menuHeader);

  // Append a list-item for every header.
  for (i = 0; i < length; i = i + 1) {

    var header = headers[i];

    if (header.id) {
      var entry = document.createElement('li');
      var link = document.createElement('a');
      var linkText = document.createTextNode(header.innerHTML);
      var linkClass = document.createAttribute('class');
      var linkHref = document.createAttribute('href');
      linkClass.value = 'tab';
      link.setAttributeNode(linkClass);
      linkHref.value = '#' + header.id;
      link.setAttributeNode(linkHref);
      link.appendChild(linkText);
      entry.appendChild(link);
      list.appendChild(entry);
    }

    // Append menu to target element.
    target.appendChild(list);

  }

  return target;

};
