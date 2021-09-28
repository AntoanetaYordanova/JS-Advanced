const {expect} = require('chai');
const isOddOrEven = require('./evenOrOdd');

describe('isOddOrEven tests', () => {
    it('resturns undefined with number input', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });

    it('resturns undefined with array input', () => {
        expect(isOddOrEven([1, 2])).to.be.undefined;
    });

    it('resturns odd with string input', () => {
        expect(isOddOrEven('t')).to.equal('odd');
    });

    it('resturns even with string input', () => {
        expect(isOddOrEven('to')).to.equal('even');
    });
});