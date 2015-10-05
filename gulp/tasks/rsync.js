/* Deploy via rsync. */

'use strict';

var config = require('../config/rsync.json');
var gulp = require('gulp');
var rsync = require('gulp-rsync');

// Task to deploy your site
module.exports = function () {
  return gulp.src(config.source)
    .pipe(rsync(config.target));
};
