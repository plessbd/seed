module.exports = function(app, config) {
	console.log("Loading: ", __filename);

	var bodyParser = require("body-parser"),
		methodOverride = require("method-override"),
		favicon = require("express-favicon"),
		cors = require("cors"),
		compression = require("compression");

	// parse request bodies (req.body)
	app.use(favicon(config.paths.client + "/favicon.ico"));
	app.use(compression());
	app.use(cors());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true,
	}));

	// support _method (PUT in forms etc)
	app.use(methodOverride());
};
