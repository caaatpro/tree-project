
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    jshint = require('gulp-jshint');

gulp.task('sass', function () {
  var destFolder = 'css';
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers:['> 1%', 'last 2 versions']
    }))
    .pipe(gulp.dest(destFolder))
    .pipe(browserSync.stream());
});

gulp.task('js', function () {
  return gulp.src('scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(browserSync.reload({
      stream: true
    }));
});


gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('styles/*.scss', ['sass']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('scripts/*.js', ['js']);
});

gulp.task('browserSync', function () {
  browserSync({
    server: {
      baseDir: './'
    },
    notify: false
  });
});

gulp.task('serve', function(callback) {
  runSequence(['sass', 'browserSync', 'watch'],
    callback
  );
});
