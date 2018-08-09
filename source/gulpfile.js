const gulp = require('gulp');
const debug = require('gulp-debug');
const shell = require('gulp-shell');
const runSequence = require('run-sequence');
const del = require('del');

gulp.task('clean', function() {
  return del([
    '../css',
    '../js',
    '../fonts',
    '../favicon.ico',
    '../404.html',
    '../index.html',
  ], {
    force: true // danger zone, delete outside folders
  })
})

gulp.task('build', shell.task('vue-cli-service build'));

gulp.task('copy', function() {
  return gulp.src('dist/**/*')
    .pipe(gulp.dest('../'))
});

gulp.task('deploy', function(cb) {
  runSequence('build', 'clean', 'copy', cb);
})