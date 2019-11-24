const { Builder, By, Key, until } = require('selenium-webdriver');

// Not dry on purpose
class SearchBot {
	constructor() {
		this.driver = this.buildDriver();
	}

	async buildDriver() {
		let driver = await new Builder().forBrowser(process.env.SELENIUM_BROWSER || 'chrome').build();

		return driver;
	}

	search(path, search) {
		this.resolve().then((driver) => {
			driver.manage().window().maximize();
			driver.get(`https://${path}.com`);
			driver.findElement(By.name('q')).sendKeys(`${search}`, Key.ENTER);
		});
	}
	cacheSites(search) {
		this.resolve().then((driver) => {
			driver.get('https://google.com');

			driver.sleep(2000);

			driver.findElement(By.name('q')).sendKeys(`cache: ${search}.com`, Key.ENTER);
		});
	}
	logs(parameter = '*') {
		this.resolve().then((driver) => {
			driver.get('https://google.com');
			driver.sleep(2000);

			driver.findElement(By.name('q')).sendKeys(`allintext${parameter} filetype:log`, Key.ENTER);

			// Not working, xpath correct
			// driver.findElement(By.xpath("//a[@id='hdtb-tls']")).click();
		});
	}
	resolve() {
		return Promise.resolve(this.driver);
	}
}

module.exports = SearchBot;
