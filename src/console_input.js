const readline = require('readline');
const Parser = require('./Parser');

const userInput = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

userInput.on('line', (dateStr) => {
    console.log(new Parser(dateStr).printDiff());
});