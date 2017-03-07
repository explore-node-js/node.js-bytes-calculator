function ByteFlagCalculator() {
}

/**
 * @param {Number} flags
 * @param {Number} flag
 *
 * @returns {boolean}
 */
ByteFlagCalculator.hasBytes = function (flags, flag) {
    return (flags & flag) === flag;
}
/**
 * @param {Number} flags
 * @param {Number} flag
 *
 * @returns {Number}
 */
ByteFlagCalculator.addBytes = function (flags, flag) {
    return flags | flag;
}
/**
 * @param {Number} flags
 * @param {Number} flag
 *
 * @returns {Number}
 */
ByteFlagCalculator.removeBytes = function (flags, flag) {
    return flags & ~flag;
}

module.exports = ByteFlagCalculator;
