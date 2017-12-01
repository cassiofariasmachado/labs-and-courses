function ArraySeq(array) {
    this.array = array;
    this.position = -1;
}

ArraySeq.prototype.next = function () {
    return this.array[++this.position];
};

ArraySeq.prototype.hasNext = function () {
    return this.position + 1 < this.array.length;
};

//---------------------------------------------

function RangeSeq(from, to) {
    this.position = from - 1;
    this.to = to;
}

RangeSeq.prototype.next = function () {
    return ++this.position;
};

RangeSeq.prototype.hasNext = function () {
    return this.position + 1 <= this.to;
};

//---------------------------------------------

function logFive(sequence) {
    let result = '';
    for (var i = 0; i < 5; i++) {
        if (!sequence.hasNext())
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