var gulp = require('gulp');
var minihtml = require("gulp-minify-html");
var minicss = require('gulp-clean-css');
gulp.task('htmltask', function () {  //htmltask为自定义的任务名称
    	gulp.src('*.html') // 要压缩的html文件
   		.pipe(minihtml())  //压缩，和上面定义的依赖名相同
   		.pipe(gulp.dest('dist'))//压缩到哪
	});
gulp.task('csstask',function(){
  gulp.src('./css/*.css')
  .pipe(minicss ())
  .pipe(gulp.dest('./dist/css'));//dist下新建css文件夹
});
