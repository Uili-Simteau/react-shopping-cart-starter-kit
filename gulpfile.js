var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('default', function() {
    browserify('./modules/CartStarterKit.jsx.js')
    .transform(babelify)
    .bundle()
    .pipe(source('CartStarterKit.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('examples', function() {
    browserify('./examples/BootstrapCart.jsx.js').transform(babelify).bundle().pipe(source('BootstrapCart.js')).pipe(gulp.dest('./examples/build'));
});
