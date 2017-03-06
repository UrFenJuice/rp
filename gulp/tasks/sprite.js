'use strict';

module.exports = function() {
	$.gulp.task('sprite', function () {
	  var spriteData = $.gulp.src('./source/sprite/**/*.png').pipe($.gp.spritesmith({
	    imgName: 'sprite.png',
	    cssName: 'sprite.scss',
	    cssFormat: 'css',
	    imgPath: '/assets/img/sprite.png',
	    cssTemplate: './source/sprite_template/scss.template.handlebars',
	    padding : 1,
	    algorithm: 'diagonal'
	  }));
	  return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
	  		 spriteData.css.pipe($.gulp.dest('./source/style/common'));
	});
};