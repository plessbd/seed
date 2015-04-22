var gulp = require("gulp");

gulp.task("default", ["clean", "checkDependencies", "css:vendor", "css:main"]);
