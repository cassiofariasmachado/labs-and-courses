class ArraySeq {

    constructor(array) {
        this.array = array;
        this.position = -1;
    }

    next() {
        return this.array[++this.position];
    }

    get hasNext() {
        return this.position + 1 < this.array.length;
    };

}

//---------------------------------------------

class RangeSeq {

    constructor(from, to) {
        this.position = from - 1;
        this.to = to;
    }

    next() {
        return ++this.position;
    };

    get hasNext() {
        return this.position + 1 <= this.to;
    };

}

//---------------------------------------------

function logFive(sequence) {
    let result = '';
    for (var i = 0; i < 5; i++) {
        if (!sequence.hasNext)
            break;
        result += sequence.next() + '\n';
    }
    return result;
}

//----------------------------------------------

module.exports = {
    ArraySeq: ArraySeq,
    RangeSeq: RangeSeq,
    logFive: logFive
};