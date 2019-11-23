const { By, Key, until } = require('selenium-webdriver');

class PromiseBot {
	constructor(webDriver) {
		this.driver = webDriver();
	}

	search(path, search) {
		this.resolve().then((driver) => {
			driver.manage().window().maximize();
			driver.get(`https://${path}.com`);
			driver.findElement(By.name('q')).sendKeys(`${search}`, Key.ENTER);
		});
	}
	youtube() {
		this.resolve().then((driver) => {
			driver.get('https://youtube.com');

			driver.sleep(2);

			driver.findElement(By.xpath('//paper-button[@aria-label="Sign in"]')).click();
		});
	}
	resolve() {
		return Promise.resolve(this.driver);
	}
}

module.exports = PromiseBot;
