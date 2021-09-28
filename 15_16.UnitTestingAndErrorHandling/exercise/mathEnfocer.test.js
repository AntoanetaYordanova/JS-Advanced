const {expect} = require('chai');
const mathEnforcer = require('./mathEnfocer');


describe('mathEnforcer tests', () => {
    describe('addFive tests', () => {
        it('returns udefined with string input', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });

        it('returns udefined with array input', () => {
            expect(mathEnforcer.addFive([1])).to.be.undefined;
        });

        it('returns +5 with integer positive input', () => {
            expect(mathEnforcer.addFive(1)).to.equal(6);
        });

        it('returns +5 with integer negative input', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });

        it('returns +5 with non-integer positive input', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        });

        it('returns +5 with non-integer negative input', () => {
            expect(mathEnforcer.addFive(-5.5)).to.be.closeTo(-0.5, 0.01);
        });
    })

    describe('subtractTen tests', () => {
        it('returns udefined with string input', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });

        it('returns udefined with array input', () => {
            expect(mathEnforcer.subtractTen([1])).to.be.undefined;
        });

        it('returns -10 with integer positive input', () => {
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
        });

        it('returns -10 with integer negative input', () => {
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
        });

        it('returns -10 with non-integer positive input', () => {
            expect(mathEnforcer.subtractTen(10.1)).to.be.closeTo(0.1, 0.01);
        });

        it('returns -10 with non-integer negative input', () => {
            expect(mathEnforcer.subtractTen(-10.1)).to.be.closeTo(-20.1, 0.01);
        });
    });

    describe('sum tests', () => {
        it('returns udefined with string input one', () => {
            expect(mathEnforcer.sum('1', 1)).to.be.undefined;
        });

        it('returns udefined with array input one', () => {
            expect(mathEnforcer.sum([1], 1)).to.be.undefined;
        });

        it('returns udefined with string input two', () => {
            expect(mathEnforcer.sum(1, '1')).to.be.undefined;
        });

        it('returns udefined with array input two', () => {
            expect(mathEnforcer.sum(1, [1])).to.be.undefined;
        });

        it('returns the sum with integer inputs', () => {
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
        });

        it('returns the sum with ineteger negative inputs', () => {
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
        });

        it('returns the sum with non-integer positive inputs', () => {
            expect(mathEnforcer.sum(1.5, 1.5)).to.be.closeTo(3, 0.01);
        });

        it('returns the sum with non-integer negative inputs', () => {
            expect(mathEnforcer.sum(-1.5, -1.5)).to.be.closeTo(-3, 0.01);
        });
    })
})