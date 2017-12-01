function Vector(x, y) {
    this.x = x;
    this.y = y;
}

Vector.prototype.plus = function (vector) {
    let isVector = vector instanceof Vector;

    if (!isVector) {
        throw new NonVectorException();
    }

    this.x += vector.x;
    this.y += vector.y;
};

Vector.prototype.minus = function (vector) {
    let isVector = vector instanceof Vector;

    if (!isVector) {
        throw new NonVectorException();
    }

    this.x -= vector.x;
    this.y -= vector.y;
};

Object.defineProperty(Vector.prototype, 'length', {
    get: function () {

        function square(number) {
            return Math.pow(number, 2);
        }

        function squareRoot(number) {
            return Math.sqrt(number);
        }

        return squareRoot(square(this.x) + square(this.y));
    }
});

function Exception(message) {
    this.message = message;
}

function NonVectorException() {
    Exception.call(this, 'Parêmetro não é um Vetor!');
}

module.exports = Vector;