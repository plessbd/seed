var host = process.env.NODE_HOST || "localhost",
	port = process.env.NODE_PORT || 8080;
module.exports = {
	cors:{},
	host: host,
	port: port,
	baseUrl: "http://" + host + ":" + port + "/"
};
