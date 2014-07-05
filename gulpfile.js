var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;

var paths = {
  html: ['./app/*.html', './app/views/**/*.html'],
  scripts: ['./app/scripts/**/*.js'],
  sass: ['./app/css/scss/*.scss']
};

gulp.task('html', function() {
  gulp.src(paths.html)
    .pipe(reload({stream: true}));
});

gulp.task('scripts', function() {
  gulp.src(paths.scripts)
    .pipe(reload({stream: true}));
});

gulp.task('sass', function () {
  gulp.src(paths.sass)
    .pipe(sass({ errLogToConsole: true }))
    .pipe(gulp.dest('./app/css'))
    .pipe(reload({stream:true}));
});

// Static server
gulp.task('server', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./app"
        }
    });
});

gulp.task('default', ['sass', 'server'], function () {
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.sass, ['sass']);
});
