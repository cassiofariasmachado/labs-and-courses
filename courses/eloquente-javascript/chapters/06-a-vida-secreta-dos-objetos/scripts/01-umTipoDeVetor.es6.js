class Vector {

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        if (!this._isVector(vector)) {
            throw new NonVectorException();
        }

        this.x += vector.x;
        this.y += vector.y;
    }

    minus(vector) {
        if (!this._isVector(vector)) {
            throw new NonVectorException();
        }

        this.x -= vector.x;
        this.y -= vector.y;
    }

    get length() {

        function square(number) {
            return Math.pow(number, 2);
        }

        function squareRoot(number) {
            return Math.sqrt(number);
        }

        return squareRoot(square(this.x) + square(this.y));
    }

    _isVector(vector) {
        return vector instanceof Vector;
    }

}

class Exception {

    constructor(message) {
        this.message = message;
    }

}

class NonVectorException extends Exception {

    constructor() {
        super('Parêmetro não é um Vetor!');
    }

}

module.exports = Vector;