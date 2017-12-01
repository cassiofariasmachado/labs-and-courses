const primitiveMultiply = require('./utils').primitiveMultiply,
    MultiplicatorUnitFailure = require('./utils').MultiplicatorUnitFailure;

module.exports = function reliableMultiply(a, b) {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (e instanceof MultiplicatorUnitFailure)
                continue;
            else
                throw e;
        }
    }
};