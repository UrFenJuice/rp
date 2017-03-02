'use strict';

module.exports = function() {
  $.gulp.task('gulp-uncss', function() {
    return $.gulp.src('./source/style/other/basket.scss')
        .pipe($.gp.uncss({
            html: [$.config.root + '/*.html']
        }))
        .pipe($.gulp.dest($.config.root + '/'));
  })
};
