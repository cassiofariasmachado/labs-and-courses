module.exports.countChar = (word, letter) => {
    var count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
            count++;
        }
    }

    return count;
};

module.exports.countB = (word) => {
    return countChar(word, 'B');
};