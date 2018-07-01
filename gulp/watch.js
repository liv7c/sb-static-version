const gulp = require('gulp');
const watch = require('gulp-watch');
const browserSync = require('browser-sync').create();

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./src/temp/styles/styles.css').pipe(browserSync.stream());
});

gulp.task('jsRefresh', ['scripts'], () => {
  browserSync.reload();
});

gulp.task('watch', () => {
  browserSync.init({
    server: {
      baseDir: './src',
    },
    notify: false,
  });

  watch('./src/**/*.html', () => {
    browserSync.reload();
  });

  watch('./src/assets/scss/**/*.scss', () => {
    gulp.start('cssInject');
  });

  watch('./src/assets/scripts/**/*.js', () => {
    gulp.start('jsRefresh');
  });
});
