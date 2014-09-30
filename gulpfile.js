// Gulp packages
var concat = require('gulp-concat'),
	es = require('event-stream'),
	gulp = require('gulp'),
	uglify = require('gulp-uglify');

// Uglify task
gulp.task('uglify', function() {
	return es.merge(
		gulp.src([
			'jquery-1.11.1.js',
			'es5-shim.js',
			'math.js',
			'monster-calculator.js'
		])
		.pipe(uglify({mangle: false}))
		.pipe(concat('monster-calculator.min.js'))
		.pipe(gulp.dest(''))
	);
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('*.js', ['uglify']);
});

// Default task
gulp.task('default', ['uglify', 'watch']);