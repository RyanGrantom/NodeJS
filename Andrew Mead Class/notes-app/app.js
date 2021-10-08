const chalk = require('chalk');
const notes = require('./notes');

const msg = notes.getNotes();
console.log(msg);

console.log(chalk.green.bold(`success`));


