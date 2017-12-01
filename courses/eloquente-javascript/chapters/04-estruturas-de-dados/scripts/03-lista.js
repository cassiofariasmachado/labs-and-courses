module.exports.arrayToList = (array) => {
    let list = {};
    let prevElem = list;

    for (let i = 0; i < array.length; i++) {
        prevElem.value = array[i];

        if (i === array.length - 1) {
            prevElem.next = null;
        } else {
            prevElem.next = {};
        }

        prevElem = prevElem.next;
    }

    return list;
};

module.exports.listToArray = (list) => {
    let array = [];
    let next = list;

    while (next) {
        array.push(next.value);
        next = next.next;
    }

    return array;
};

module.exports.prepend = (elem, list) => {
    return {
        value: elem,
        next: list
    };
};

module.exports.nth = (index, list) => {
    let next = list;
    let count = 0;

    while (next) {
        if (count === index) {
            return next.value;
        }

        count++;
        next = next.next;
    }

    return undefined;
};

module.exports.recursiveNth = (index, list) => {

    function nth(count, index, list) {
        debugger

        if (count === index) {
            return list.value;
        }

        if (!list.next) {
            return undefined;
        }

        return nth(++count, index, list.next);
    }

    return nth(0, index, list);
};