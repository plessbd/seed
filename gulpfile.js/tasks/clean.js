var gulp = require("gulp");

gulp.task("clean", function () {
	var del = require("del"),
		config = require(__dirname + "/../../config.js");

	return del([config.paths.dist.root]);
});
