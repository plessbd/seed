var chai = require("chai"),
	expect = chai.expect,
	WebdriverIO = require("webdriverio");

describe("First Test Suite", function () {
	this.timeout(99999999);
	var client = {};
	before(function (done) {
		client = WebdriverIO.multiremote({
				browserA: {
					desiredCapabilities: {
						browserName: "firefox",
						chromeOptions: {
							args: [
								"use-fake-device-for-media-stream",
								"use-fake-ui-for-media-stream",
							]
						}
					}
				},
				browserB: {
					desiredCapabilities: {
						browserName: "chrome",
						chromeOptions: {
							args: [
								"use-fake-device-for-media-stream",
								"use-fake-ui-for-media-stream",
							]
						}
					}
				}
			})
			.init(done);
	});

	after(function () {
		client.end();
	});

	it("Just get both and make sure they have what we expect", function (done) {
		client
			.url("https://github.com/")
			.getElementSize(".header-logo-wordmark", function (err, result) {
				expect(err).to.not.exist;
				expect(result).to.include.all.keys("browserA", "browserB");
				expect(result.browserA).to.have.property("width").equal(89);
				expect(result.browserB).to.have.property("width").equal(89);
				expect(result.browserA).to.have.property("height").equal(26);
				expect(result.browserB).to.have.property("height").equal(26);
			})
			.getTitle(function (err, title) {
				expect(err).to.not.exist;
				expect(title).to.include.all.keys("browserA", "browserB");
				expect(title.browserA).to.equal("GitHub · Build software better, together.");
				expect(title.browserB).to.equal("GitHub · Build software better, together.");
			})
			.getCssProperty("a[href=\"/plans\"]", "color", function (err, result) {
				expect(err).to.not.exist;
				expect(result).to.include.all.keys("browserA", "browserB");
				expect(result.browserA).to.have.property("value").equal("rgba(65,131,196,1)");
				expect(result.browserB).to.have.property("value").equal("rgba(65,131,196,1)");
			})
			.end(done);
	});
});
