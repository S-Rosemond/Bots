const Bot = require('./bot');
const PromiseBot = require('./bot-promise');
const SearchBot = require('./bot-search');
const { Builder } = require('selenium-webdriver');
const inquire = require('inquirer');

const webDriver = async function buildDriver() {
	let driver = await new Builder().forBrowser(process.env.SELENIUM_BROWSER || 'chrome').build();

	return driver;
};

//const Bob = new Bot();
//Bob.search('google', 'Bots');

// const Betsy = new PromiseBot(webDriver);
// Betsy.youtube();

const Jeff = new SearchBot();

if (process.argv[2] === '-c' || process.argv[2] === '-cache') {
	let input;
	Promise.resolve(
		inquire
			.prompt([
				{
					type: 'input',
					message: 'Search Term?',
					name: 'Q'
				}
			])
			.then((answer) => {
				input = answer.Q;

				if (input) {
					Jeff.cacheSites(input);
				}
			})
	);
} else if (process.argv[2] === '-logs' || process.argv[2] === '-l') {
	let input;
	Promise.resolve(
		inquire
			.prompt([
				{
					type: 'input',
					message: 'Search Term?',
					name: 'Q'
				}
			])
			.then((answer) => {
				input = answer.Q;

				if (input) {
					Jeff.logs(input);
				}
			})
	);
}
