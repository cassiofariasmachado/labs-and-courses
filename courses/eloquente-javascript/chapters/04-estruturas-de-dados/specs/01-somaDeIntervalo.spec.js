const somaDeIntervalosModule = require('../scripts/01-somaDeIntervalo.js');

describe('Soma', function () {

    it('deve retornar a soma de todos os elementos da lista recebida', function () {
        let sumOfElements = somaDeIntervalosModule.sum([1, 2, 3]);
        expect(sumOfElements).toBe(6);
    });

    it('deve retornar a soma de todos os elementos da lista (com negativos) recebida', function () {
        let sumOfElements = somaDeIntervalosModule.sum([-1, 2, -3]);
        expect(sumOfElements).toBe(-2);
    });

});

describe('Intervalo', function () {

    it('deve retornar o intervalo entre 1 e 10', function () {
        let array = somaDeIntervalosModule.range(1, 10);
        expect(array).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it('deve retornar o intervalo entre 1 e 10 incrementado 2', function () {
        let array = somaDeIntervalosModule.range(1, 10, 2);
        expect(array).toEqual([1, 3, 5, 7, 9]);
    });

    it('deve retornar o intervaloe entre 5 e 2 decrementando 1', function () {
        let array = somaDeIntervalosModule.range(5, 2, -1);
        expect(array).toEqual([5, 4, 3, 2]);
    });

    it('deve retornar o intervaloe entre 5 e 2 sem informar decremento', function () {
        let array = somaDeIntervalosModule.range(5, 2);
        expect(array).toEqual([5, 4, 3, 2]);
    });
});
