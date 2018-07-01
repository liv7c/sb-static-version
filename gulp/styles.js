const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass');

// styles task
gulp.task('styles', () => {
  return gulp
    .src('./src/assets/scss/styles.scss')
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
    )
    .on('error', function(error) {
      console.log(error.toString());
      this.emit('end');
    })
    .pipe(autoprefixer(['last 30 versions', 'ie >= 9']))
    .pipe(gulp.dest('./src/temp/styles'));
});
