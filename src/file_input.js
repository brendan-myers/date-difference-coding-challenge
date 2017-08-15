const fs = require('fs');
const Parser = require('./Parser');

fs.readFile(process.argv[2], 'utf8', (e, data) => {
    if (e) {
        return console.log(e);
    }

    const lines = data.split('\n');

    for (let l = 0; l < lines.length; l++) {
        // check for hanging newline
        if (lines[l].length > 0) {
            console.log(new Parser(lines[l]).printDiff());
        }
    }
});