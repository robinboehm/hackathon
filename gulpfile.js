var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./app/css/scss/*.scss')
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./app/css'));
});

gulp.task('default', ['sass'], function () {
  gulp.watch(['./app/css/scss/*.scss'], ['sass']);
});
