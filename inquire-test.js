const inquirer = require('inquirer');

let input = Promise.resolve(
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'Search Term?',
				name: 'Q'
			}
		])
		.then((answer) => {
			console.log('ANSWER', answer);
			input = answer.Q;

			console.log('NAME', answer.Q);
			console.log('INPUT:', input);
		})
);
