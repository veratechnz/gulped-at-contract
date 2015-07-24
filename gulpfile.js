// Initial Gulp File

//Setting Required Gulp Variables
var gulp = require('gulp');
	sass = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');
    watch = require('gulp-watch');

//Styles Function
gulp.task('styles', function() {
  return gulp.src('sass/*.scss', { style: 'expanded' })
  	.pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

//Watch Tasks
gulp.task('watch', function(){
	
	//Watching Css Changes on Sass
	gulp.watch('sass/*.scss', ['styles']);

	// Create LiveReload server
  	livereload.listen();

  	// Watch any files in dist/, reload on change
  	gulp.watch(['sass/**']).on('change', function(){

  		gulp.pipe(notify({ message: 'Styles task complete' }));
  		console.log('reload change');
  		livereload.changed;
  	});
});


gulp.task('default', ['styles', 'watch']);




