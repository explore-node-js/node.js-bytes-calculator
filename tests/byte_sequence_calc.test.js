const { hasSequence, addSequence, removeSequence } = require(`../src/byte_sequence_calc`);

describe(`byte sequence calculator`, () => {
    describe(`::hasSequence`, () => {
        [
            { seq: 0x01, v: 0x01 },
            { seq: 0x03, v: 0x01 },
            { seq: 0x05, v: 0x04 },
            { seq: 0x07, v: 0x02 },
        ].forEach((el) => {
            it(`expected ${true}, as 0x${el.v.toString(16)} is presented in 0x${el.seq.toString(16)}`, () => {
                expect(hasSequence(el.seq, el.v)).toBe(true);
            });
        });

        [
            { seq: 0x00, v: 0x01 },
            { seq: 0x00, v: 0x02 },
            { seq: 0x01, v: 0x02 },
            { seq: 0x03, v: 0x04 },
            { seq: 0x06, v: 0x01 },
        ].forEach((el) => {
            it(`expected ${false}, as 0x${el.v.toString(16)} isn't presented in 0x${el.seq.toString(16)}`, () => {
                expect(hasSequence(el.seq, el.v)).toBe(false);
            });
        });
    });

    describe(`::addSequence`, () => {
        [
            { seq: 0x00, v: 0x01, expected: 0x01 },
            { seq: 0x01, v: 0x01, expected: 0x01 },
            { seq: 0x01, v: 0x02, expected: 0x03 },
            { seq: 0x03, v: 0x04, expected: 0x07 },
            { seq: 0x06, v: 0x01, expected: 0x07 },
        ].forEach((el) => {
            it(`expected 0x${el.expected.toString(16)}, merging 0x${el.v.toString(16)}, ${el.seq.toString(16)}`, () => {
                expect(addSequence(el.seq, el.v)).toBe(el.expected);
            });
        });
    });

    describe(`::removeSequence`, () => {
        [
            { seq: 0x00, v: 0x01, expected: 0x00 },
            { seq: 0x02, v: 0x01, expected: 0x02 },
            { seq: 0x12, v: 0x02, expected: 0x10 },
            { seq: 0x04, v: 0x04, expected: 0x00 },
            { seq: 0x02, v: 0x04, expected: 0x02 },
            { seq: 0xFF, v: 0xFF, expected: 0x00 },
            { seq: 0xFF, v: 0x0F, expected: 0xF0 },
            { seq: 0xFF, v: 0xF0, expected: 0x0F },
        ].forEach(el => {
            it(`expected 0x${el.expected.toString(16)}, dropping 0x${el.v.toString(16)} from 0x${el.seq.toString(16)}`, () => {
                expect(removeSequence(el.seq, el.v)).toBe(el.expected);
            });
        });
    });

    /**
     * as JS convert any sequence to {Number},
     * there is no point to test it, as it is only JS behaviour,
     * tests below are left for demonstration purposes
     */
    describe(` >>> demonstration test suites <<<`, () => {
        describe(`::hasSequence`, () => {
            [
                { seq: 0o1,   v: 0x01 }, /** avoid use numbers with leading zeros, use 0o */
                { seq: 0b101, v: 0b1  },
                { seq: 5,     v: 0o4  },
                { seq: 0o7,   v: 1    },
            ].forEach((el) => {
                it(`expected ${true}, as ${el.v} is presented in ${el.seq}`, () => {
                    expect(hasSequence(el.seq, el.v)).toBe(true);
                });
            });

            [
                { seq: 0o00, v: 1 },
                { seq: 0x00, v: 0b10 },
                { seq: 0b01, v: 0o2 },
                { seq: 0b11, v: 0x4 },
                { seq: 0x06, v: 0b1 },
            ].forEach((el) => {
                it(`expected ${false}, as ${el.v} isn't presented in ${el.seq}`, () => {
                    expect(hasSequence(el.seq, el.v)).toBe(false);
                });
            });
        });

        describe(`::addSequence`, () => {
            [
                { seq: 0x0, v: 0o1, expected: 0b1 },
                { seq: 0x1, v: 0o1, expected: 0b1 },
                { seq: 0x1, v: 0o2, expected: 0b11 },
                { seq: 0x3, v: 0o4, expected: 0b111 },
                { seq: 0x6, v: 0o1, expected: 0b111 },
            ].forEach((el) => {
                it(`expected ${el.expected}, merging ${el.v}, ${el.seq}`, () => {
                    expect(addSequence(el.seq, el.v)).toBe(el.expected);
                });
            });
        });

        describe(`::removeSequence`, () => {
            [
                { seq: 0,   v: 0x01, expected: 0o0 },
                { seq: 2,   v: 0x01, expected: 0o2 },
                { seq: 18,  v: 0x02, expected: 0o20 },
                { seq: 4,   v: 0x04, expected: 0o0 },
                { seq: 2,   v: 0x04, expected: 0o2 },
                { seq: 255, v: 0xFF, expected: 0o0 },
                { seq: 255, v: 0x0F, expected: 0o360 },
                { seq: 255, v: 0xF0, expected: 0o17 },
            ].forEach((el) => {
                it(`expected ${el.expected}, dropping ${el.v} from ${el.seq}`, () => {
                    expect(removeSequence(el.seq, el.v)).toBe(el.expected);
                });
            });
        });
    });
});
