module.exports.sum = (array) => {
    return array.reduce((previous, current) => {
        return previous + current;
    });
};

module.exports.range = (start, end, increment) => {
    var range = [];

    if (start > end) {
        increment = increment || -1;
        comparisonFunction = (index) => {
            return index >= end;
        }
    }
    else {
        increment = increment || 1;
        comparisonFunction = (index) => {
            return index <= end;
        }
    }

    for (let i = start; comparisonFunction(i); i += increment) {
        range.push(i);
    }

    return range;
};

