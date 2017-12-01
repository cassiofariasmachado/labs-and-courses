function MultiplicatorUnitFailure() {
}

module.exports.primitiveMultiply = (a, b) => {
    if (Math.random() < 0.5)
        return a * b;
    else
        throw new MultiplicatorUnitFailure();
}

module.exports.MultiplicatorUnitFailure = MultiplicatorUnitFailure;