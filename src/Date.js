const MIN_YEAR = 1900;
const MAX_YEAR = 2010;
const DAYS_IN_YEAR = 365;

class Date {
    constructor(day, month, year) {
        if (year < MIN_YEAR || year > MAX_YEAR) {
            // string literals in errors
            const e = `Year (${year}) outside range (Valid: ${MIN_YEAR} - ${MAX_YEAR})`;
            throw Error(e);
        }

        if (month < 1 || month > 12) {
            throw Error('Month outside range (Valid: 1 - 12)');
        }

        if (day < 1 || day > this.daysInMonth(month, year)) {
            // string literals in errors
            const e = `Day outside range for month ${month} (Valid: 1 - ${this.daysInMonth(month, year)})`;
            throw Error(e);
        }

        // Store the y/m/d as deltas
        this.years = year - MIN_YEAR;
        this.months = month - 1;
        this.days = day - 1;
    }

    isLeapYear(year) {
        // a year is a leap year if the year;
        //   is divisible by 4 and not divisible by 100 
        //   is divisible by 4 and 400
        return ( !(year % 4) && !!(year % 100) ) || ( !(year % 4) && !(year % 400) );
    }

    daysInMonth(month, year) {
        if (month === 2) {
            return this.isLeapYear(year) ? 29 : 28;
        } else if (month < 8 && !!(month % 2)) {
            return 31;
        } else if (month < 8 && !(month % 2)) {
            return 30;
        } else if (!(month % 2)) {
            return 31;
        } else if (!!(month % 2)) {
            return 30;
        }

        const e = `Invalid month/year (${month}/${year}).`;
        throw Error(e);
    }

    getDays() {
        // add days from year
        let totalDays = this.years * DAYS_IN_YEAR;

        // plus days from leap years
        const leapYears = (this.years - 1) / 4; // 1900 is not a leap year
        totalDays += (leapYears - leapYears % 1); // Math.floor()

        // plus days from months
        for (let month = 1; month <= this.months; month ++) {
            totalDays += this.daysInMonth(month, this.years + MIN_YEAR);
        }

        // plus days from days
        totalDays += this.days;

        return totalDays;
    }

    toString() {
        // pad single digits with 0
        const day = this.days < 9 ? `0${this.days + 1}` : `${this.days + 1}`;
        const month = this.months < 9 ? `0${this.months + 1}` : `${this.months + 1}`;
        
        return `${day} ${month} ${this.years + MIN_YEAR}`;
    }
}

module.exports = Date;