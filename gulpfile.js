var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('default', function() {
    console.log("Everything is cool.");
});
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir:"./"
        }
    });
});

gulp.task('watch', ['browser-sync'], function() {
    gulp.watch("*.html").on('change', reload);
    gulp.watch("app/*.html").on('change', reload);
    gulp.watch("app/js/*.js").on("change", reload);
});
