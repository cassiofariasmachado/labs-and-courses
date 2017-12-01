module.exports = function deepEqual(valueOne, valueTwo) {

    function deepEqualRecursive(valueOne, valueTwo) {
        if (valueOne.length !== valueTwo.length) {
            return false;
        }

        let isObject = (value) => {
            return typeof value === 'object' && value != null;
        }

        if (isObject(valueOne) && isObject(valueTwo)) {
            for (let prop in valueOne) {
                if (prop in valueTwo) {
                    return deepEqualRecursive(valueOne[prop], valueTwo[prop]);
                } else {
                    return false;
                }
            }
        }

        return valueOne === valueTwo;
    }

    return deepEqualRecursive(valueOne, valueTwo);
};