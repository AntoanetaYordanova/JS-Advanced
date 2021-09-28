const {expect} = require('chai');
const lookupChar = require('./charLookup');

describe('lookupChar tests', () => {
    it('returns character with correct input', () => {
        expect(lookupChar('toni', 0)).to.equal('t');
    });

    it('returns character with correct input', () => {
        expect(lookupChar('toni', 3)).to.equal('i');
    });

    it('returns undefined with incorrect first input', () => {
        expect(lookupChar(1, 3)).to.be.undefined;
    });

    it('returns undefined with incorrect first input', () => {
        expect(lookupChar([1, 2], 3)).to.be.undefined;
    });

    it('returns undefined with incorrect index input', () => {
        expect(lookupChar('toni', 5.5)).to.equal(undefined);
    });

    it('returns undefined with incorrect second input', () => {
        expect(lookupChar('toni', 'toni')).to.be.undefined;
    });

    it('returns undefined with incorrect second input', () => {
        expect(lookupChar('toni', [1, 2])).to.be.undefined;
    });

    it('returns undefined with incorrect index input', () => {
        expect(lookupChar('toni', -1)).to.equal("Incorrect index");
    });

    it('returns undefined with incorrect index input', () => {
        expect(lookupChar('toni', 5)).to.equal("Incorrect index");
    });

   
});