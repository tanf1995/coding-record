var gulp = require("gulp");
var scss = require('gulp-sass');

function sassToCss(){
    return gulp.src('scss/*.scss')
        .pipe(scss())
        .pipe(gulp.dest('css'))
}

exports.dev = () => {
    gulp.watch('scss/*.scss', { delay: 500 }, sassToCss);
}