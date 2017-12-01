module.exports = function isEven(number) {
    positiveNumber = number < 0 ? number * -1 : number;

    function even(number) {
        if (number == 0)
            return true;
        if (number == 1)
            return false;
        return even(number - 2);
    }

    return even(positiveNumber);
};