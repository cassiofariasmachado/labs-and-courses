const utilsModule = require('./utils'),
    verifyIfMatchPattern = utilsModule.verifyIfMatchPattern,
    verifyIfNotMatchPattern = utilsModule.verifyIfNotMatchPattern,
    isNumber = require('../scripts/03-novamenteNumeros');


describe('Novamente números', function () {

    const numbersInExponentNotation = ['1.3e2', '1E-4', '1e+12'];
    const numbersWithSignal = ['-1', '+15'];
    const decimals = ['1.55', '.5', '5.'];
    const integers = ['10', '5'];
    const notNumbers = ['1a', '+-1', '1.2.3', '1+1', '1e4.5', '.5.', '1f5', '.'];

    let verifyIfIsANumber = verifyIfMatchPattern.bind(undefined, isNumber);
    let verifyIfIsNotANumber = verifyIfNotMatchPattern.bind(undefined, isNumber);

    it('deve reconhecer números em notação científica', function () {
        numbersInExponentNotation.forEach(verifyIfIsANumber);
    });

    it('deve reconhecer números positivos e negativos', function () {
        numbersWithSignal.forEach(verifyIfIsANumber);
    });

    it('deve reconhecer números decimais', function () {
        decimals.forEach(verifyIfIsANumber);
    });

    it('deve reconhecer números inteiros', function () {
        integers.forEach(verifyIfIsANumber);
    });

    it('não deve reconhecer expressões que não são números', function () {
        notNumbers.forEach(verifyIfIsNotANumber);
    });

});