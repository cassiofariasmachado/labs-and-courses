// Execute on sandbox

var month = function () {
    var exports = {};
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    exports.name = function (number) {
        return months[number];
    };

    exports.number = function (month) {
        return months.indexOf(month);
    };

    return exports;
}();