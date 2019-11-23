const Bot = require('./bot');
const PromiseBot = require('./bot-promise');
const { Builder } = require('selenium-webdriver');

const webDriver = async function buildDriver() {
	let driver = await new Builder().forBrowser(process.env.SELENIUM_BROWSER || 'chrome').build();

	return driver;
};

//const Bob = new Bot();
//Bob.search('google', 'Bots');

const Betsy = new PromiseBot(webDriver);
Betsy.youtube();
