// Include gulp
var gulp = require('gulp');

// Include plugins

var sass = require('gulp-sass');

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('src/sass/styles.scss')
    .pipe(sass())
    .pipe(gulp.dest('.'));
});

// Watch for changed Sass files
gulp.task('watch', function() {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/sass/viewports/*.scss', ['sass']);
});

// Default task
gulp.task('default', ['sass', 'watch']);
