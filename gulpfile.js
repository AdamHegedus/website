var gulp = require('gulp');
var sass = require('gulp-sass');
var ts = require('gulp-typescript');
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
var typedoc = require('gulp-typedoc');
var sassLint = require('gulp-sass-lint');
var gulpTslint = require('gulp-tslint');
var tslint = require('tslint');


var project = ts.createProject('tsconfig.json');

gulp.task('lint:sass', function () {
  return gulp.src('app/scss/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});

gulp.task('build:sass', ['lint:sass'], function () {
    return gulp.src('app/scss/index.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('lint:typescript', function () {
    return gulp.src('app/**/*.ts')
        .pipe(gulpTslint({
            formatter: 'verbose'
        }))
        .pipe(gulpTslint.report());
});

gulp.task('build:typescript', ['lint:typescript'], function () {
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

gulp.task('generate:typedoc', function () {
    return gulp.src('app/**/*.ts')
        .pipe(typedoc({
            out: 'dist/typedoc'
        }));
});
