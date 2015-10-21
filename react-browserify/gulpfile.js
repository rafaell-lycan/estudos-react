var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    browserSync = require('browser-sync').create();

gulp.task('browserify', ['copy'], function(){
  gulp.src('src/main.js')
  .pipe(plumber())
  .pipe(browserify({
    transform: ['reactify'],
    debug: true
  }))
  .pipe(concat('app.js'))
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream());
});

gulp.task('copy', function(){
  gulp.src('src/index.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());
});

gulp.task('browsersync', function(){
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
});

gulp.task('watch', ['browsersync'], function(){
  gulp.watch('src/**/*.*', ['default']);
});

gulp.task('default', ['browserify']);
