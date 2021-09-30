const {expect, assert} = require('chai');
const cinema = require('./cinema');

describe('cinema tests', () => {
    describe('showMovies tests', () => {

        it('check if resturns array', () => {
            expect(cinema.showMovies(['first', 'second'])).to.equal(['first', 'second'].join(', '));
        });

        it('check if returns "No movie to show" by empty arr', () => {
            expect(cinema.showMovies([])).to.equal('There are currently no movies to show.');
        })
    });
    
    describe('ticketPrice tests', () => {
        it('check for Premiere type', () => {
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
        }); 

        it('check for Normal type', () => {
        }); 

        it('check for Discount type', () => {
            expect(cinema.ticketPrice('Discount')).to.equal(5.5);
        });

        it('check for Error by invalid type', () => {
            assert.throws(() => cinema.ticketPrice('Some Type'), 'Invalid projection type.');
            expect(() => cinema.ticketPrice('Some Type')).to.throw('Invalid projection type.');
        });
    });

    describe('swapSeatsInHall tests', () => {
        it('check for return by too big num input', () => {
            expect(cinema.swapSeatsInHall(1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by too big num input', () => {
            expect(cinema.swapSeatsInHall(21, 2)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by too small num input', () => {
            expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by too small num input', () => {
            expect(cinema.swapSeatsInHall(10, 0)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by too small num input', () => {
            expect(cinema.swapSeatsInHall(0, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by not integer num input', () => {
            expect(cinema.swapSeatsInHall(1.1, 21)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by not integer num input', () => {
            expect(cinema.swapSeatsInHall(2, '2')).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by not integer num input', () => {
            expect(cinema.swapSeatsInHall(1, 2.1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by equal nums input', () => {
            expect(cinema.swapSeatsInHall(1, 1)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it('check for return by successfull input', () => {
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });

    })
});