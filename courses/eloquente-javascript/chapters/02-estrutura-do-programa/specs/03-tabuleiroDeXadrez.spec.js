const chessBoard = require('../scripts/03-tabuleiroDeXadrez');

describe('Tabuleiro de xadrez', function () {

    it('deve retornar tabuleiro de tamanho 10x10', function () {
        let tabuleiro = chessBoard(10);
        expect(tabuleiro.length).toBe(100 + 10); // (10 x 10) + 10 quebras de linha
    });

});