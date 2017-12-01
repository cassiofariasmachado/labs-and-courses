module.exports = function fizzBuzz() {
    function isDivisible(number, divider) {
        return number % divider === 0;
    }

    for (let number = 0; number <= 100; number++) {
        let word = '';

        if (isDivisible(number, 3)) {
            word += 'Fizz';
        }
        if (isDivisible(number, 5)) {
            word += 'Buzz';
        }

        console.log(word || number);
    }
};