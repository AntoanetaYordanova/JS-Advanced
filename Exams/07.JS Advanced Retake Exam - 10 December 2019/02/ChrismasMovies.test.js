const {expect} = require('chai');
const ChristmasMovies = require('./02. Christmas Movies_Resources');

describe('ChristmasMovies', () => {
    const instance = new ChristmasMovies;

    describe('checks for existing properties and methods', () => {
        it('has movieCollection', () => {
            expect(instance.movieCollection).to.not.be.undefined;
        });
        it('has watched', () => {
            expect(instance.watched).to.not.be.undefined;
        });
        it('has actors', () => {
            expect(instance.actors).to.not.be.undefined;
        });
        it('has buyMovie', () => {
            expect(instance.buyMovie).to.not.be.undefined;
        });
        it('has discardMovie', () => {
            expect(instance.discardMovie).to.not.be.undefined;
        });
        it('has watchMovie', () => {
            expect(instance.watchMovie).to.not.be.undefined;
        });
        it('has favouriteMovie', () => {
            expect(instance.favouriteMovie).to.not.be.undefined;
        });
        it('has mostStarredActor', () => {
            expect(instance.mostStarredActor).to.not.be.undefined;
        });
    });

    describe('buyMovie', () => {

    });
});