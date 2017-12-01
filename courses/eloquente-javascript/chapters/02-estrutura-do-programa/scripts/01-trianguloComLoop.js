module.exports = function triangle() {
    var triangle = '';

    for (let t = '#'; t.length < 8; t += '#') {
        triangle += t + '\n';
    }

    return triangle;
};