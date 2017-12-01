const isEven = require('../scripts/02-recursao');

describe('Recursão', function () {

    it('deve retornar true para número par', function () {
        var even = isEven(10);
        expect(even).toBeTruthy();
    });

    it('deve retornar true para número par negativo', function () {
        var even = isEven(-10);
        expect(even).toBeTruthy();
    });

    it('deve retornar false para número ímpar', function () {
        var even = isEven(11);
        expect(even).toBeFalsy();
    });

    it('deve retornar false para número ímpar negativo', function () {
        var even = isEven(-11);
        expect(even).toBeFalsy();
    });

    it('deve retornar true para o número zero', function () {
        var even = isEven(0);
        expect(even).toBeTruthy();
    });

    it('deve retornar true para o número um', function () {
        var even = isEven(0);
        expect(even).toBeTruthy();
    });

});