module.exports.some = (array, predicate) => {

    for (let i = 0, len = array.length; i < len; i++) {
        if (predicate(array[i])) {
            return true;
        }
    }

    return false;
};

module.exports.every = (array, predicate) => {

    for (let i = 0, len = array.length; i < len; i++) {
        if (!predicate(array[i])) {
            return false;
        }
    }

    return true;
};