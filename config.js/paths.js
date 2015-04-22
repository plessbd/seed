var path = require("path"),
	root = path.join(__dirname, ".."),
	client = path.join(root, "client"),
	dist = path.join(client, "dist");
module.exports = {
	bower: path.join(client, "bower_components"),
	client: client,
	dist: {
		css: path.join(dist, "css"),
		fonts: path.join(dist, "fonts"),
		js: path.join(dist, "css"),
		root: dist
	},
	src:{
		scripts:path.join(client,"scripts"),
		stylesheets:path.join(client, "stylesheets")
	}
};
