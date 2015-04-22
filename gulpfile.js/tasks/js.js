var gulp = require("gulp");
gulp.task("js:vendor", function jsVendor() {
	var concat = require("gulp-concat"),
		debug = require("gulp-debug");
	return gulp.src([
			__dirname + "/../../client/bower_components/angular/angular.js",
			__dirname + "/../../client/bower_components/angular-animate/angular-animate.js",
			__dirname + "/../../client/bower_components/angular-ui-router/release/angular-ui-router.js",
			__dirname + "/../../client/bower_components/angular-sanitize/angular-sanitize.js",
			__dirname + "/../../client/bower_components/angular-socket-io/socket.js",
			__dirname + "/../../client/bower_components/angular-bootstrap/ui-bootstrap.min.js",
			__dirname + "/../../client/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
			__dirname + "/../../client/bower_components/angular-loading-bar/build/loading-bar.js",
			__dirname + "/../../client/bower_components/moment/moment.js",
			__dirname + "/../../client/bower_components/pretty-bytes/pretty-bytes.js"
		])
		.pipe(debug())
		.pipe(concat("vendor.js"))
		.pipe(gulp.dest(__dirname + "/../../client/dist/js"));
});
