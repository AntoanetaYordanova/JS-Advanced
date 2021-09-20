const expect = require('chai').expect;
const sum = require('./sumNumbers.js');

describe('sumNumber tests', () => {

    it('sums single number', () => {
        expect(sum([1])).to.equal(1);
    });
    it('sums multiple numbers', () => {
        expect(sum([1, 2, 3])).to.equal(6);
    })
});