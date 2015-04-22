var express = require("express"),
	app = module.exports = express(),
	config = require(__dirname + "/../config.js"),
	server;
app.get("/", function(req, res) {
	res.sendFile(config.paths.client + "/index.html");
});
app.io = require("socket.io");

require("./defaults")(app, config);
require("./static")(app, config);
require("./session")(app, config);
require("./local-auth")(app, config);

// if running in single debug mode
if (!module.parent) {
	server = require("http").Server(app).listen(config.server.port);
	app.io = app.io(server);
	console.info("\nListening " + config.server.baseUrl + "\n");
}
