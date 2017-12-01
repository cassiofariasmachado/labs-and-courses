const reduceArrays = require('../scripts/01-juntando');

describe('Reduce arrays', function () {

    it('deve concatenar os arrays recebidos em um único array com todos os valores', function () {
        var arrays = [[1, 2, 3], [4, 5], [6]];
        var arraysConcatenados = reduceArrays(arrays);
        expect(arraysConcatenados).toEqual([1, 2, 3, 4, 5, 6]);
    })
});