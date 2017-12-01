module.exports.reverseArray = (array) => {
    var invertedArray = [];

    array.forEach((elem) => {
        invertedArray.unshift(elem);
    });

    return invertedArray;
};

module.exports.reverseArrayInPlace = (array) => {
    for (let i = 0, halfLength = Math.floor(array.length / 2); i < halfLength; i++) {
        let oppositeIndex = array.length - i - 1;
        let currentElem = array[i];
        array[i] = array[oppositeIndex];
        array[oppositeIndex] = currentElem;
    }
}