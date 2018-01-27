let gulp = require('gulp'),
$ = require('gulp-load-plugins')(),
browserify = require('browserify'),
watchify = require('watchify'),
bebelify = require('babelify');

gulp.task('scripts:server', () => {
  return gulp.src('./src-server/**/*.js')
  .pipe($.babel())
  .pipe(gulp.dest('./build'));
});

gulp.task('watch:scripts:server', () => {
  return gulp.watch('./src-server/**/*.js', ['scripts:server']);
});

function createBundler(file) {
  const bundler = browserify(file);
  bundler.transform(bebelify)
  return bundler;
}

