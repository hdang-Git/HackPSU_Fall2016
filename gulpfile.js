var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('serve',  function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/css/*.css");
    gulp.watch("app/*.html").on('change', browserSync.reload);
});
