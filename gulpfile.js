var gulp = require('gulp');
//复制网页
gulp.task('copyhtml',function(){
	gulp.src('src/index.html').pipe( gulp.dest('dist') );
});
//复制js
gulp.task('copyjs',function(){
	gulp.src('src/js/**/*').pipe( gulp.dest('dist/js') );
});
//复制图片
gulp.task('copyImg',function(){
	gulp.src('src/imgs/*.{jpg,png}').pipe( gulp.dest('dist/imgs') );
});
//复制多个数据
gulp.task('copyData',function(){
	gulp.src(['src/json/**/*','src/xml/**/*'])
		.pipe( gulp.dest( 'dist/data' ) );
});
//图片压缩
var imgMin = require('gulp-imagemin');
gulp.task('imgMin',function(){
	gulp.src('src/imgs/*')
		.pipe( imgMin() )
		.pipe( gulp.dest( 'dist/imgs' ) );
});
//js压缩
var jsMin = require('gulp-uglify');
gulp.task('jsMin',function(){
	gulp.src('src/js/js/*.js')
		.pipe( jsMin() )
		.pipe( gulp.dest('dist/js/js') );
});

var css = require('gulp-sass-china');

//异常处理
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');

gulp.task('cssMin',function(){
	gulp.src('src/scss/*.{scss,sass}')
		.pipe( plumber({
			errorHandler: notify.onError('Error: <%= error.message %>')
		}) )
		.pipe( css({
			outputStyle: 'expanded'
		}) )
		.pipe( gulp.dest('src/css') );
});

gulp.task('scss',function(){
	gulp.watch('src/scss/*.{scss,sass}',['cssMin']);
});
//开服务
var connect = require('gulp-connect');
gulp.task('server',function(){
	connect.server({
		root: 'src',
		livereload: true
	});
});
//监听
gulp.task('watch',function(){
	gulp.watch(['src/*.html','src/css/*.css','src/js/*'],function(){
		gulp.src('src/register.html').pipe( connect.reload() );
	});
});

gulp.task('server-watch',['server','watch','scss']);