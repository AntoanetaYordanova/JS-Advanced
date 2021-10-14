const {expect, assert} = require('chai');
const numberOperations = require('./NumberOperationsResources');

describe('numberOperations', () => {
    describe('powNum', () => {
        it('returns power of 2', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
        it('returns the power of -2', () => {
            expect(numberOperations.powNumber(-2)).to.equal(4);
        });
        it('returns the power of 1.5', () => {
            expect(numberOperations.powNumber(1.5)).to.equal(2.25);
        });
        it('returns the power of string 2', () => {
            expect(numberOperations.powNumber('2')).to.equal(4);
        });
    });

    describe('numberChecker', () => {
        it('checks if trows error with unvalid input', () => {
            assert.throw(() => numberOperations.numberChecker('a'), 'The input is not a number!');
         });
         it('checks if trows error with unvalid input', () => {
            assert.throw(() => numberOperations.numberChecker(undefined), 'The input is not a number!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker('99')).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker(99)).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker(-1)).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker('-1')).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker('1.5')).to.equal('The number is lower than 100!');
         });
         it('returs its a lower number with lower input', () => {
            expect(numberOperations.numberChecker(1.5)).to.equal('The number is lower than 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker('100')).to.equal('The number is greater or equal to 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker(200)).to.equal('The number is greater or equal to 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker('200')).to.equal('The number is greater or equal to 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker(200.5)).to.equal('The number is greater or equal to 100!');
         });
         it('returs its a higher number with higher input', () => {
            expect(numberOperations.numberChecker('200.5')).to.equal('The number is greater or equal to 100!');
         });
    }); 
    describe('sumArrays', () => {
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays([1, 2], [1, 2]))).to.equal(JSON.stringify([2, 4]));
        });
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays([-1, -2], [-1, -2]))).to.equal(JSON.stringify([-2, -4]));
        });
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays([1.5, 2.5], [1.5, 2.5]))).to.equal(JSON.stringify([3, 5]));
        });
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays(['1', '2'], ['1', '2']))).to.equal(JSON.stringify(['11', '22']));
        });
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays([1, 2, 3], [1, 2]))).to.equal(JSON.stringify([2, 4, 3]));
        });
        it('returns the sum by indexes of two arrays', () => {
            expect(JSON.stringify(numberOperations.sumArrays([1, 2], [1, 2, 3]))).to.equal(JSON.stringify([2, 4, 3]));
        });
    });
});

