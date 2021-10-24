const {expect} = require('chai');
const library = require('./library');

describe('library', () => {
    describe('calcPriceOfBook', () => {
        it('throws error with non-valid first input', () => {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        });

        it('throws error with non-valid first input', () => {
            expect(() => library.calcPriceOfBook(undefined, 1)).to.throw('Invalid input');
        });

        it('throws error with non-valid second input', () => {
            expect(() => library.calcPriceOfBook('a', 'a')).to.throw('Invalid input');
        });

        it('throws error with non-valid second input', () => {
            expect(() => library.calcPriceOfBook('a', 1.1)).to.throw('Invalid input');
        });

        it('throws error with non-valid second input', () => {
            expect(() => library.calcPriceOfBook('a', undefined)).to.throw('Invalid input');
        });

        it('retruns the price without discount', () => {
            expect(library.calcPriceOfBook('a', 1981)).to.equal('Price of a is 20.00');
        });

        it('retruns the price without discount', () => {
            expect(library.calcPriceOfBook('a', 2021)).to.equal('Price of a is 20.00');
        });

        it('retruns the price with discount', () => {
            expect(library.calcPriceOfBook('a', 1980)).to.equal('Price of a is 10.00');
        });

        it('retruns the price with discount', () => {
            expect(library.calcPriceOfBook('a', 0)).to.equal('Price of a is 10.00');
        });
    });

    describe('findBook', () => {
        it('throws an error with empy string input', () => {
            expect(() => library.findBook([], 'a')).to.throw('No books currently available');
        });

        it('returns Book found', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'Troy')).to.equal('We found the book you want.');
        });

        it('returns Not found', () => {
            expect(library.findBook(["Troy", "Life Style", "Torronto"], 'a')).to.equal('The book you are looking for is not here!');
        });
    });

    describe('arrangeTheBooks', () => {
        it('throws and error with unvalid input', () => {
            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
        });

        it('throws and error with unvalid input', () => {
            expect(() => library.arrangeTheBooks('a')).to.throw('Invalid input');
        });

        it('throws and error with unvalid input', () => {
            expect(() => library.arrangeTheBooks(1.1)).to.throw('Invalid input');
        });

        it('throws and error with unvalid input', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        });

        it('returns Great job', () => {
            expect(library.arrangeTheBooks(1)).to.equal('Great job, the books are arranged.');
        });

        it('returns Great job', () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });

        it('returns Insufficient space', () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});