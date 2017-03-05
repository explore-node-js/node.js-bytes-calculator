const calc = require("../src/byte_flag_calculator");

describe(`byte flag calculator`, () => {
    describe(`dataProvider with HEX values`, () => {
        describe(`::hasBytes`, () => {
            [
                { flags: 0x01, flag: 0x01 },
                { flags: 0x03, flag: 0x01 },
                { flags: 0x05, flag: 0x01 },
                { flags: 0x07, flag: 0x02 },
                { flags: 0x05, flag: 0x04 },
            ].forEach(el => {
                it(` - expected true as ${el.flag} bytes are presented in ${el.flags}`, () => {
                    expect(calc.hasBytes(el.flags, el.flag)).toBe(true);
                });
            });

            [
                { flags: 0x00, flag: 0x01 },
                { flags: 0x00, flag: 0x02 },
                { flags: 0x01, flag: 0x02 },
                { flags: 0x03, flag: 0x04 },
                { flags: 0x06, flag: 0x01 },
            ].forEach(el => {
                it(` - expected false as ${el.flag} bytes aren't presented in ${el.flags}`, () => {
                    expect(calc.hasBytes(el.flags, el.flag)).toBe(false);
                });
            });
        });

        describe(`::addBytes`, () => {
            [
                { flags: 0x00, flag: 0x01, expected: 0x01 },
                { flags: 0x01, flag: 0x01, expected: 0x01 },
                { flags: 0x01, flag: 0x02, expected: 0x03 },
                { flags: 0x03, flag: 0x04, expected: 0x07 },
                { flags: 0x06, flag: 0x01, expected: 0x07 },
            ].forEach(el => {
                it(` - expected ${el.expected} by adding bytes ${el.flag} to ${el.flags}`, () => {
                    expect(calc.addBytes(el.flags, el.flag)).toBe(el.expected);
                });
            });
        });

        describe(`::removeBytes`, () => {
            [
                { flags: 0x00, flag: 0x01, expected: 0x00 },
                { flags: 0x02, flag: 0x01, expected: 0x02 },
                { flags: 0x12, flag: 0x02, expected: 0x10 },
                { flags: 0x04, flag: 0x04, expected: 0x00 },
                { flags: 0x02, flag: 0x04, expected: 0x02 },
                { flags: 0xFF, flag: 0xFF, expected: 0x00 },
                { flags: 0xFF, flag: 0x0F, expected: 0xF0 },
                { flags: 0xFF, flag: 0xF0, expected: 0x0F },
            ].forEach(el => {
                it(` - expected ${el.expected} by removing bytes ${el.flag} from ${el.flags}`, () => {
                    expect(calc.removeBytes(el.flags, el.flag)).toBe(el.expected);
                });
            });
        });
    });
});
