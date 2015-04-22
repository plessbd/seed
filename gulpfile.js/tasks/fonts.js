var gulp = require("gulp");

gulp.task("fonts", function () {
	var config = require(__dirname + "/../../config.js");
	console.log(config);
	return gulp.src(config.paths.bower + "/fontawesome/fonts/**.*")
		.pipe(gulp.dest(config.paths.dist.fonts));
});
