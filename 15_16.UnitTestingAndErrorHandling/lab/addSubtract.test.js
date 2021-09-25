const {expect} = require('chai');
const addSubtract = require('./addSubtract');

describe('addScubstract test', () => {

    it('check if returns object', () => {
        expect(typeof addSubtract()).to.equal('object');
    });

    it('check if has add method', () => {
        expect(typeof addSubtract().add).to.equal('function');
    });

    it('check if has subtract method', () => {
        expect(typeof addSubtract().subtract).to.equal('function');
    });

    it('check if has get method', () => {
        expect(typeof addSubtract().get).to.equal('function');
    });

    it('check for initernal value', () => {
        expect(typeof addSubtract().get()).to.equal('number');
    });

    it('check for initernal value', () => {
        expect(typeof addSubtract().get()).to.equal('number');
    });
    
    it('check if adds number to the initernal value', () => {
        expect(addSubtract().add(3), typeof addSubtract().get()).to.equal('number');
    });
})

