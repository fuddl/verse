const gulp = require('gulp');
const pug = require('gulp-pug');
const yaml = require('js-yaml');
const fs = require('fs');
const rename = require("gulp-rename");

gulp.task('pug', function () {
	return gulp.src('templates/*.pug')
    .pipe(pug())
    .pipe(rename(function (path) {
	  path.extname = ".svg";
	}))
    .pipe(gulp.dest('./'));
});
gulp.task('default', ['pug'], function () {
  return gulp.watch(['templates/*.pug', 'data/*.yml'], ['pug']);
});