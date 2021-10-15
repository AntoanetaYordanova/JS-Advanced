const {expect, assert} = require('chai');
const dealership = require('./dealershipt');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('makes discount for Audi A4 B8', () => {
            expect(dealership.newCarCost('Audi A4 B8', 15001)).to.equal(1);
        });
        it('makes discount for Audi A6 4K', () => {
            expect(dealership.newCarCost('Audi A6 4K', 20001)).to.equal(1);
        });
        it('makes discount for Audi A8 D5', () => {
            expect(dealership.newCarCost('Audi A8 D5', 25001)).to.equal(1);
        });
        it('makes discount for Audi TT 8J', () => {
            expect(dealership.newCarCost('Audi TT 8J', 14001)).to.equal(1);
        });
        it('returns the new car price without dixcount', () => {
            expect(dealership.newCarCost('A', 1)).to.equal(1);
        });
    });

    describe('carEquipment', () => {
        it('returns array with wanted extras', () => {
            assert.deepEqual(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 1]), ['heated seats', 'sliding roof']);
        });
    });

    describe('euroCategory', () => {
        it('makes a discount with input of 4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it('makes a discount with bigger input than 4', () => {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.');
        });
        it('returns no discount recieved a maessage with lower than 4 input', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    })  
});

