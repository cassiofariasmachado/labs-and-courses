module.exports.average = (array) => {

    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
};

module.exports.groupBy = (array, func, tranform) => {
    let groupBy = {};

    array.forEach(function (elem) {
        let group = func(elem);

        if (!groupBy[group]) {
            groupBy[group] = [];
        }

        if (typeof tranform === 'function') {
            groupBy[group].push(tranform(elem));
        } else {
            groupBy[group].push(elem);
        }

    });

    return groupBy;
};

module.exports.calcAge = (startYear, endYear) => {
    return endYear - startYear;
};