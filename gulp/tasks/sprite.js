'use strict';

module.exports = function() {
	$.gulp.task('sprite', function () {
	  var spriteData = $.gulp.src('./source/sprite/**/*.png').pipe($.gp.spritesmith({
	    //retinaSrcFilter: ['./source/sprite/**/*2x.png'],
	    imgName: 'sprite.png',
	    //retinaImgName: 'sprite2x.png',
	    cssName: 'sprite.scss',
	    cssFormat: 'css',
	    imgPath: '/assets/img/sprite.png',
	    //cssTemplate: './source/sprite_template/scss.template.handlebars',
	    padding : 0,
	    algorithm: 'top-down'
	    
	  }));
	  return spriteData.img.pipe($.gulp.dest($.config.root + '/assets/img')),
	  		 spriteData.css.pipe($.gulp.dest('./source/style/common'));
	});
};