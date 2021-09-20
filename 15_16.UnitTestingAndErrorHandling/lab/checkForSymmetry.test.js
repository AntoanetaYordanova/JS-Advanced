const {expect} = require('chai');
const isSymmetric = require('./checkForSymmetry');

describe('checkForSymmetry', () => {

    it('check if input is array', () => {
        expect(Array.isArray(isSymmetric('string'))).to.equal(false);
    });
    it('check if string input returns false', () => {
        expect(isSymmetric('string')).to.equal(false);
    });
    it('check if number input returns false', () => {
        expect(isSymmetric(3)).to.equal(false);
    });
    it('check if boolean input returns false', () => {
        expect(isSymmetric(false)).to.equal(false);
    });
    it('check if returns true for symmetric array', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });
    it('check if returns false for nonsymmetric array', () => {
        expect(isSymmetric([1, 1, 2, 2])).to.equal(false);
    })
    it(`checks if equal number and strings return false`, () => {
        expect(isSymmetric(['1', 1])).to.equal(false);
    });
    it('checks if empty argument returns false', () => {
        expect(isSymmetric()).to.equal(false);
    })
})