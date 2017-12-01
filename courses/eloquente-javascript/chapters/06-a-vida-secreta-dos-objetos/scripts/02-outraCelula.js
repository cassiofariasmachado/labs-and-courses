function TextCell(text) {
    this.text = text.split("\n");
}

TextCell.prototype.minWidth = function () {
    return this.text.reduce(function (width, line) {
        return Math.max(width, line.length);
    }, 0);
};

TextCell.prototype.minHeight = function () {
    return this.text.length;
};

TextCell.prototype.draw = function (width, height) {
    var result = [];
    for (var i = 0; i < height; i++) {
        var line = this.text[i] || "";
        result.push(line + repeat(" ", width - line.length));
    }
    return result;
};

//----------------------------------------------------------------

function UnderlinedCell(inner) {
    this.inner = inner;
};

UnderlinedCell.prototype.minWidth = function () {
    return this.inner.minWidth();
};

UnderlinedCell.prototype.minHeight = function () {
    return this.inner.minHeight() + 1;
};

UnderlinedCell.prototype.draw = function (width, height) {
    return this.inner.draw(width, height - 1)
        .concat([repeat("-", width)]);
};

//----------------------------------------------------------------

function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}

StretchCell.prototype.minWidth = function () {
    return Math.max(this.inner.minWidth(), this.width);
};

StretchCell.prototype.minHeight = function () {
    return Math.max(this.inner.minHeight(), this.height);
};

StretchCell.prototype.draw = function () {
    return this.inner.draw(this.minWidth(), this.minHeight());
}

//----------------------------------------------------------------

function repeat(string, times) {
    var result = "";
    for (var i = 0; i < times; i++)
        result += string;
    return result;
}

//----------------------------------------------------------------

module.exports = {
    TextCell: TextCell,
    UnderlinedCell: UnderlinedCell,
    StretchCell: StretchCell
};