const min = require('../scripts/01-minimo');

describe('Mínimo', function () {

    it('deve retornar o valor 1 entre 2 e 1', function () {
        expect(min(2, 1)).toBe(1); // (10 x 10) + 10 quebras de linha
    });

    it('deve retornar o valor 1 entre 1 e 2', function () {
        expect(min(1, 2)).toBe(1); // (10 x 10) + 10 quebras de linha
    });

    it('deve retornar o valor 2 entre 2 e 2', function () {
        expect(min(1, 2)).toBe(1); // (10 x 10) + 10 quebras de linha
    });

});