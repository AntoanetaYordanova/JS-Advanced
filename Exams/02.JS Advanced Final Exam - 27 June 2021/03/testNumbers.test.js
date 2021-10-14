const {expect, assert} = require('chai');
const testNumbers = require('./testNumbers');

describe('testNumbers', () => {

    describe('sumNumber', () => {
        it('returns undefined with non-number input', () => {
            expect(testNumbers.sumNumbers(0, '0')).to.equal(undefined);
        });
        it('returns undefined with non-number input', () => {
            expect(testNumbers.sumNumbers('0', 0)).to.be.undefined;
        });
        it('returns the sum of two positive nums', () => {
            expect(testNumbers.sumNumbers(1, 1)).to.equal('2.00');
        });
        it('returns the sum of two negative num', () => {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00');
        });
        it('returns the sum of two non-integer positive nums', () => {
            expect(testNumbers.sumNumbers(1.5, 1.5)).to.equal('3.00');
        });
        it('returns the sum of two non-integer negative nums', () => {
            expect(testNumbers.sumNumbers(-1.5, -1.5)).to.equal('-3.00');
        });
    });
    
    describe('numberChecker', () => {
        it('checks if trows error with unvalid input', () => {
            assert.throw(() => testNumbers.numberChecker('a'), 'The input is not a number!');
         });
        it('returns that the number is odd', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });
        it('returns that the number is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });
        it('returns that the number is even', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });
        it('returns that the number is even', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

    });

    describe('averageSumArray', () => {
        it('returns the average sum of and array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
    });
});
