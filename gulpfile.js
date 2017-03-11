var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 

var project = ts.createProject('tsconfig.json');

gulp.task('build:sass', function () {
    return gulp.src('app/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build:typescript', function () {
    return gulp.src('app/**/*.ts')
        .pipe(project())
        .js.pipe(gulp.dest(''));
});

gulp.task('minify:js',  ['build:typescript'], function () {
    return gulp.src('dist/script/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/script'));
});

gulp.task('build', ['build:sass', 'build:typescript', 'minify:js']);