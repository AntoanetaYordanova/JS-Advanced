const {expect, assert} = require('chai');
const cinema = require('./cinema');

describe('cinema', () => {
    describe('showMovies', () => {
        it('returns there are no movies with empty arr input', () => {
            assert.strictEqual(cinema.showMovies([]), 'There are currently no movies to show.');
        });
        it('returns a string with the movies', () => {
            assert.deepEqual(cinema.showMovies(['Superman', 'Batman']), 'Superman, Batman');
        });
    });

    describe('ticketPrice', () => {
        it('returns the price of Premiere', () => {
            assert.strictEqual(cinema.ticketPrice('Premiere'), 12);
        });
        it('returns the price of Premiere', () => {
            assert.strictEqual(cinema.ticketPrice('Normal'), 7.5);
        });
        it('returns the price of Premiere', () => {
            assert.strictEqual(cinema.ticketPrice('Discount'), 5.5);
        });
        it('throws error with non-existing projection type', () => {
            assert.throw(() => cinema.ticketPrice('a'), 'Invalid projection type.');
        });
    });

    describe('swapSeatsInHall', () => {
        it('swapts the seat with correct input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(1, 20), 'Successful change of seats in the hall.');
        });
        it('throws an error with wrong first input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(0, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('throws an error with wrong first input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(21, 1), 'Unsuccessful change of seats in the hall.');
        });
        it('throws an error with wrong first input', () => {
            assert.deepEqual(cinema.swapSeatsInHall('a', 1), 'Unsuccessful change of seats in the hall.');
        });
        it('throws an error with wrong second input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(1, 0), 'Unsuccessful change of seats in the hall.');
        });
        it('throws an error with wrong second input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(1, 21), 'Unsuccessful change of seats in the hall.');
        });
        it('throws an error with wrong second input', () => {
            assert.deepEqual(cinema.swapSeatsInHall(1, 'a'), 'Unsuccessful change of seats in the hall.');
        });  
    });
});