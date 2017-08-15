const assert = require('assert');
const SystemDate = Date;

describe('date', () => {
    const Date = require('../src/Date');

	it('should error when year < 1900', () => {
        assert.throws(() => new Date(1, 1, 1899));
    });
    
    it('should error when year > 2010', () => {
	    assert.throws(() => new Date(1, 1, 2011));
	});
    
    it('should error when month < 1', () => {
	    assert.throws(() => new Date(1, 0, 1900));
	});
    
    it('should error when month > 12', () => {
	    assert.throws(() => new Date(1, 13, 2010));
    });
    
    it('should error when day < 1', () => {
	    assert.throws(() => new Date(0, 1, 1900));
    });
    
    it('should error when month == 1 and day > 31', () =>{
        assert.throws(() => new Date(32,1,1900));
    });

    it('should error when month == 2 and day > 28 and year not a leap year', () =>{
        assert.throws(() => new Date(29,2,1900));
    });

    it('should error when month == 2 and day > 29 and year is a leap year', () =>{
        assert.throws(() => new Date(30,2,2000));
    });

    it('should error when month == 3 and day > 31', () =>{
        assert.throws(() => new Date(32,3,1900));
    });

    it('should error when month == 4 and day > 30', () =>{
        assert.throws(() => new Date(31,4,1900));
    });

    it('should error when month == 5 and day > 31', () =>{
        assert.throws(() => new Date(32,5,1900));
    });

    it('should error when month == 6 and day > 30', () =>{
        assert.throws(() => new Date(31,6,1900));
    });

    it('should error when month == 7 and day > 31', () =>{
        assert.throws(() => new Date(32,8,1900));
    });

    it('should error when month == 8 and day > 31', () =>{
        assert.throws(() => new Date(32,8,1900));
    });

    it('should error when month == 9 and day > 30', () =>{
        assert.throws(() => new Date(31,9,1900));
    });

    it('should error when month == 10 and day > 31', () =>{
        assert.throws(() => new Date(32,10,1900));
    });

    it('should error when month == 11 and day > 30', () =>{
        assert.throws(() => new Date(31,11,1900));
    });

    it('should error when month == 12 and day > 31', () =>{
        assert.throws(() => new Date(32,12,1900));
    });

    it('should allow all valid dates', done => {
        const limits = [
            {month: 1, maxDay: 31, year: 1900},
            {month: 2, maxDay: 28, year: 1900}, // non-leap year
            {month: 2, maxDay: 29, year: 2000}, // leap year
            {month: 3, maxDay: 31, year: 1900},
            {month: 4, maxDay: 30, year: 1900},
            {month: 5, maxDay: 31, year: 1900},
            {month: 6, maxDay: 30, year: 1900},
            {month: 7, maxDay: 31, year: 1900},
            {month: 8, maxDay: 31, year: 1900},
            {month: 9, maxDay: 30, year: 1900},
            {month: 10, maxDay: 31, year: 1900},
            {month: 11, maxDay: 30, year: 1900},
            {month: 12, maxDay: 31, year: 1900}
        ];

        assert.doesNotThrow(() => {
            for (let i=0; i < limits.length; i++) {
                const limit = limits[i];
                for (let d=1; d <= limit.maxDay; d++) {
                    new Date(limit.maxDay, limit.month, limit.year);
                }
            }

            done();
        });
    });

    it('should match the inbuild date diff calculation', () => {
        const baseDate = new Date(1, 1, 1900);
        const baseSysDate = new SystemDate(0, 0, 1);
        const SEC_PER_DAY = 24 * 60 * 60 * 1000;

        for (let y = 1900; y < 2011; y++) {
            for (let m = 1; m < 13; m++) {
                for (let d = 1; d < 32; d++) {
                    let compareDate, compareSysDate;

                    try {
                        compareDate = new Date(d, m, y);
                        compareSysDate = new SystemDate(y<2000 ? y-1900 : y, m-1, d);
                    } catch (e) {} // ignore invalid date errors

                    if (compareDate && compareSysDate) {
                        const compareDiff = compareDate.getDays() - baseDate.getDays();
                        const compareSysDiff = Math.floor((compareSysDate - baseSysDate) / SEC_PER_DAY);

                        const diff = compareDiff - compareSysDiff;
                        
                        if (diff !== 0) {
                            throw Error(`Date difference mismatch. Date: ${compareDate.toString()}, Reported: ${compareDiff}, Actual: ${compareSysDiff}`);
                        }
                    }
                }
            }
        }
    });
});