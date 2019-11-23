const { Builder, By, Key, until } = require('selenium-webdriver');

class Bot {
	constructor() {
		this.driver = this.buildDriver();
	}

	async buildDriver() {
		let driver = await new Builder().forBrowser(process.env.SELENIUM_BROWSER || 'chrome').build();

		return driver;
	}

	async search(path, search) {
		try {
			const site = await this.driver;

			await site.get(`http://${path}.com`);

			await site.findElement(By.name('q')).sendKeys(`${search}`, Key.ENTER);
		} catch (error) {
			console.error(error);
		}
	}
}

module.exports = Bot;
