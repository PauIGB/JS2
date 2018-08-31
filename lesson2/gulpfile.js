const gulp = require('gulp')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const cleanCss = require('gulp-clean-css')
const minbabel = require('gulp-babel-minify')

gulp.task('build', () => {
    return gulp.src('src/**/*')
    .pipe(useref()) 
    .pipe(gulpif('*.min.js', minbabel())) 
    .pipe(gulpif('*.min.css', cleanCss())) 
    .pipe(gulp.dest('build')) 
})