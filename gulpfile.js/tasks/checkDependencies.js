var gulp = require("gulp");

gulp.task("checkDependencies", function () {
	var david = require("gulp-david"),
		debug = require("gulp-debug");

	return gulp.src(__dirname + "/../../package.json")
		.pipe(debug())
		.pipe(david())
		.pipe(david.reporter);
});
