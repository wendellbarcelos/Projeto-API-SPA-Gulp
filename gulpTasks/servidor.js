const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch = require('gulp-watch');

function servidor(cb) {
    return gulp.src('build')
        .pipe(webserver({
            port:8081,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())    
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
    return cb()
}

gulp.task('monitorarArquivos', monitorarArquivos)
gulp.task('servidor', servidor)

module.exports = {
    monitorarArquivos,
    servidor
}