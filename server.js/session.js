module.exports = function(app, config) {
	console.log("Loading: ", __filename);
	var session = require("cookie-session");
	app.use(session({
		keys: config.session.keys,
		maxAge: config.session.maxAge,
		signed: true
	}));
};
