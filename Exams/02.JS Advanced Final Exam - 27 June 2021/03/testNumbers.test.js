const {expect, assert} = require('chai');
const testNumbers = require('./testNumbers');


describe('testNumber tests', () => {

    describe('sumNumber', () => {

        it('1 + 2 equals 3.00', () => {
            expect(testNumbers.sumNumbers(1, 2)).to.equal('3.00')
        });

        it('checks if sums negative numbers', () => {
            expect(testNumbers.sumNumbers(-1, -1)).to.equal('-2.00')
        });

        it('checks if first param returns undefined with non-number input', () => {
            expect(testNumbers.sumNumbers('1', 2)).to.equal(undefined)
        });

        it('checks if second param returns undefined with non-number input', () => {
            expect(testNumbers.sumNumbers(1, '2')).to.equal(undefined)
        });


    });

    describe('numberChecker tests', () => {

        it('checks if 1 is odd', () => {
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
        });

        it('checks if 2 is even', () => {
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
        });

        it('checks if 1 as string is odd', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
        });

        it('checks if 2 as string is even', () => {
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
        });

        it('checks if trows error with unvalid input', () => {
           assert.throw(() => testNumbers.numberChecker('a'), 'The input is not a number!');
           expect(() => testNumbers.numberChecker('a')).to.throw('The input is not a number!');
        });
    });

    describe('checks average', () => {
        it('checks average sum of array', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
    })
});
