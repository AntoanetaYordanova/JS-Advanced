const expect = require('chai').expect;
const rgbToHexColor = require('./RGBToHex');

describe('RGBToHexTest', () => {
    it('returns undefined by non-number input' , () => {
        expect(rgbToHexColor('a', 'b', 'c')).to.equal(undefined);
    });
    it('returns undefined if any input number bigger than 255', () => {
        expect(rgbToHexColor(1, 2, 300)).to.equal(undefined);
    }); 
    it('returns undefined if any input number lower than 0', () => {
        expect(rgbToHexColor(-3, 2, 3)).to.equal(undefined);
    }) ;
    it('return hex color by correct input', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
})