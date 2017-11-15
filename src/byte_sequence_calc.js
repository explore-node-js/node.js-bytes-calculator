/**
 * @param {Number} seq
 * @param {Number} v
 *
 * @returns {boolean} - returns true if {v} sequence bytes are preset in {seq} sequence
 */
const hasSequence = (seq, v) => (seq & v) === v;

/**
 * @param {Number} seq
 * @param {Number} v
 *
 * @returns {Number} - return new sequence using binary AND
 */
const addSequence = (seq, v) => seq | v;

/**
 * @param {Number} seq
 * @param {Number} v
 *
 * @returns {Number} - exclude {v} sequence from {seq}
 */
const removeSequence = (seq, v) => seq & ~v;

module.exports = {
    hasSequence,
    addSequence,
    removeSequence
};
