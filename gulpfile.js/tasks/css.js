var gulp = require("gulp");

gulp.task("css:main", function () {
	var stylus = require("gulp-stylus"),
		sourcemaps = require("gulp-sourcemaps"),
		debug = require("gulp-debug"),
		postcss = require("gulp-postcss");
	return gulp.src(__dirname + "/../../client/stylesheets/*.styl")
		.pipe(debug())
		.pipe(stylus())
		.pipe(sourcemaps.init())
		.pipe(postcss([require("autoprefixer")("last 2 version")]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(__dirname + "/../../client/dist/css"));
});

gulp.task("css:vendor", function () {
	var
		concat = require("gulp-concat"),
		sourcemaps = require("gulp-sourcemaps"),
		debug = require("gulp-debug"),
		postcss = require("gulp-postcss");
	return gulp.src([
			__dirname + "/../../client/bower_components/angular/angular-csp.css",
			__dirname + "/../../client/bower_components/fontawesome/css/font-awesome.min.css",
			__dirname + "/../../client/bower_components/animate.css/animate.css",
		])
		.pipe(debug())
		.pipe(concat("vendor.css"))
		.pipe(sourcemaps.init())
		.pipe(postcss([require("autoprefixer")("last 2 version")]))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(__dirname + "/../../client/dist/css"));
});
