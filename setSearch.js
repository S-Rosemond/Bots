const inquire = require('inquirer');

// working
function setSearch(Bot, type) {
	console.log(type);
	let input;
	if (type === 'cacheSites' || type === 'logs') {
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
						Bot[type](input);
					}
				})
		);
	} else if (type === 'search') {
		console.log('Here');
		let path, search;
		Promise.resolve(
			inquire
				.prompt([
					{
						type: 'input',
						message: 'Path ?',
						name: 'P'
					},
					{
						type: 'input',
						message: 'Search params ?',
						name: 'S'
					}
				])
				.then((answer) => {
					path = answer.P;
					search = answer.S;

					if (path && search) {
						Bot[type](path, search);
					}
				})
		);
	}
}

module.exports = setSearch;
