const assert = require('assert');
const Parser = require('../src/Parser');

describe('parser', () => {
	it('should error when input is blank', () => {
        assert.throws(() => new Parser(''));
    });
	it('should error when input has no comma', () => {
        assert.throws(() => new Parser('01 01 1900 31 12 2010'));
    });
    
    it('should error when first date is short', () => {
	    assert.throws(() => new Parser('01 01, 01 01 1900'));
	});
    
    it('should error when second date is short', () => {
	    assert.throws(() => new Parser('01 01 1900, 01 01'));
	});
    
    it('should error when first date is invalid', () => {
	    assert.throws(() => new Parser('00 01 1900, 01 01 1900'));
	});
    
    it('should error when second date is invalid', () => {
	    assert.throws(() => new Parser('01 01 1900, 00 01 1900'));
    });
    
    it('should return a valid difference string when given correct values', () => {
        assert.equal(new Parser('31 12 2010, 01 01 1900').printDiff(), '01 01 1900, 31 12 2010, 40541');
    });
});