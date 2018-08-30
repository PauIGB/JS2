const gulp = require('gulp')


const browserSync = require('browser-sync')
const useref = require('gulp-useref')
const gulpif = require('gulp-if')
const cleanCss = require('gulp-clean-css')
const minbabel = require('gulp-babel-minify')

gulp.task('build', () => {
    return gulp.src('source/**/*')
    .pipe(useref()) 
    .pipe(gulpif('*.min.js', minbabel())) 
    .pipe(gulpif('*.min.css', cleanCss())) 
    .pipe(gulp.dest('build')) 
})


//plugin
gulp.task('livePreview', ['browser-sync'], () => {
    return gulp.watch('build/**/*', ['browser-sync-reload'] ) 
}) 
gulp.task('browser-sync', () => {
    return browserSync({
        server: {
            baseDir: 'build'
        }
    })
})
gulp.task('browser-sync-reload', () => {return browserSync.reload()})