var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
	gulp.src('coffee/*.coffee')
		.pipe(coffee({ bare: true }))
		.pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
	gulp.watch('coffee/*.coffee', ['coffee']);
});