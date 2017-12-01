const TextCell = require('../scripts/02-outraCelula').TextCell,
    StretchCell = require('../scripts/02-outraCelula').StretchCell;

describe('Stretch cell', function () {

    const stretchCell = new StretchCell(new TextCell("abc"), 1, 2);

    it('deve retornar a largura mínima como a maior largura entre a célula interna e a sua extensão (célula esticada)', function () {
        expect(stretchCell.minWidth()).toBe(3);
    });

    it('deve retornar a altura mínima como a maior altura entre a célula interna e a sua extensão (célula esticada)', function () {
        expect(stretchCell.minHeight()).toBe(2);
    });

    it('deve desenhar a célula esticada com as dimensões 3x2', function () {
        expect(stretchCell.draw(3, 2)).toEqual(["abc", "   "]);
    });

});

