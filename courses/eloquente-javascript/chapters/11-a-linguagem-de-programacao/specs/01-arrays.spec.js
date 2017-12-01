const eggLanguage = require('../scripts/eggLanguage');

describe('Egg: array: ', function () {

    it('deve criar um array', function () {
        let program = 'array(1, 2, 3)';
        let result = eggLanguage.run(program);
        expect(result).toEqual([1, 2, 3]);
    });

    it('deve retornar o tamanho do array', function () {
        let program = 'length(array(1, 2, 3, 4))';
        let result = eggLanguage.run(program);
        expect(result).toBe(4);
    });

    it('deve retornar o elemento no índice informado do array', function () {
        let program = 'element(array(1, 2, 3, 4), 1)';
        let result = eggLanguage.run(program);
        expect(result).toBe(2);
    });

    it('array, deve funcionar junto as demais funções da linguagem', function () {
        let program =
            'do(define(sum, fun(array,' +
            '   do(define(i, 0),' +
            '       define(sum, 0),' +
            '       while(<(i, length(array)),' +
            '             do(define(sum, +(sum, element(array, i))),' +
            '               define(i, +(i, 1)))),' +
            '               sum))),' +
            'print(sum(array(1, 2, 3))))';

        let result = eggLanguage.run(program);
        expect(result).toBe(6);
    });

    it('deve retonar o tamanho do array como zero quando elemento não for um array', function () {
        let program = 'length(123)';
        let result = eggLanguage.run(program);
        expect(result).toBe(0);
    });

});