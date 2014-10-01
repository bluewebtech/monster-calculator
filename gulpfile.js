// Gulp packages
var concat = require('gulp-concat'),
	es = require('event-stream'),
	gulp = require('gulp'),
	uglify = require('gulp-uglify');

// monster-calculator task
gulp.task('monster-calculator', function() {
	return es.merge(
		gulp.src(['monster-calculator.js'])
		.pipe(uglify({mangle: false}))
		.pipe(concat('monster-calculator.min.js'))
		.pipe(gulp.dest(''))
	);
});

// monster-calculator-dependants task
gulp.task('monster-calculator-dependants', function() {
	return es.merge(
		gulp.src([
			'jquery-1.11.1.js',
			'es5-shim.js',
			'math.js',
			'monster-calculator.js'
		])
		.pipe(uglify({mangle: false}))
		.pipe(concat('monster-calculator-dependants.min.js'))
		.pipe(gulp.dest(''))
	);
});

// Watch task
gulp.task('watch', function() {
	gulp.watch('monster-calculator.js', ['monster-calculator', 'monster-calculator-dependants']);
});

// Default task
gulp.task('default', ['watch']);