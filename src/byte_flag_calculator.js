module.exports = class ByteFlagCalculator {
    static hasBytes(flags, flag) {
        return (flags & flag) === flag;
    }

    static addBytes(flags, flag) {
        return flags | flag;
    }

    static removeBytes(flags, flag) {
        return flags & ~flag;
    }
};
