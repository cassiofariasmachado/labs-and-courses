module.exports = function reduceArrays(arrays) {
    return arrays.reduce((prev, current) => {
        return prev.concat(current);
    });
};