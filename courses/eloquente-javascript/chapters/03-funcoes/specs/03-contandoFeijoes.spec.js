const contandoFeijoesModule = require('../scripts/03-contandoFeijoes');

describe('Contando feijões', function () {

    it('deve retornar o número de letras encontradas', function () {
        var quantidadeLetras = contandoFeijoesModule.countChar('abacate', 'a');
        expect(quantidadeLetras).toBe(3);
    });

    it('deve retornar zero quando não encontrada nenhuma letra', function () {
        var quantidadeLetras = contandoFeijoesModule.countChar('abacate', 'z');
        expect(quantidadeLetras).toBe(0);
    });

});