const setSearch = require('./setSearch');
const Bot = require('./bot-search');

const roboto = new Bot();

// Working
if (process.argv[2] === '-c') {
	setSearch(roboto, 'cacheSites');
} else if (process.argv[2] === '-l') {
	setSearch(roboto, 'logs');
} else if (process.argv[2] === '-s') {
	setSearch(roboto, 'search');
}
