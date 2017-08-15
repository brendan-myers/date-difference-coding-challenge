const Date = require('./Date');

class Parser {
    constructor(str) {
        if (typeof str !== 'string') {
            throw Error('Invalid type. (Valid: string)');
        }

        const s = str.trim().split(',');

        if (s.length !== 2) {
            throw Error('Invalid format. (Valid: DD MM YYYY, DD MM YYYY)');
        }

        this.date1 = this.parse(s[0]);
        this.date2 = this.parse(s[1]);
    }

    parse(str) {
        const s = str.trim().split(' ');

        if (s.length !== 3) {
            throw Error('Invalid number of parameters. (Valid: 3)');
        }

        const d = parseInt(s[0]);
        const m = parseInt(s[1]);
        const y = parseInt(s[2]);

        if (typeof d !== 'number' || typeof m !== 'number' || typeof y !== 'number') {
            throw Error('');
        }

        return new Date(d, m, y);
    }

    printDiff() {
        const diff = this.date2.getDays() - this.date1.getDays();

        if (diff > 0) {
            return `${this.date1.toString()}, ${this.date2.toString()}, ${diff}`;
        } else {
            return `${this.date2.toString()}, ${this.date1.toString()}, ${diff * -1}`;
        }
    }
}

module.exports = Parser;