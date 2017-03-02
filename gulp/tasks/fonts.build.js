'use strict';


module.exports = function() {
  $.gulp.task('fonts:build', function() {
   return $.gulp.src('./source/fonts/**/*.*')
   	.pipe($.gulp.dest($.config.root + '/assets/fonts/'));
  })
};