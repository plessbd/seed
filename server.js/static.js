module.exports = function(app, config){
	console.log("Loading: ", __filename);
	var express = require("express"),

		//one day duration
		oneDay = 86400000,
		// max age of cache
		maxAge = oneDay;
	app.use("/dist", express.static(config.paths.dist.root, {
		maxAge: maxAge
	}));

};
