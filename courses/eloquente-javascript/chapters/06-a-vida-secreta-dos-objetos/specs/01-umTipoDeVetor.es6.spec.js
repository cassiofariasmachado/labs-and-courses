const Vector = require('../scripts/01-umTipoDeVetor.es6');

describe('Vector', function () {

    it(' plus: deve somar o vetor com vetor informado', function () {
        let vector = new Vector(1, 2);
        vector.plus(new Vector(2, 3));
        expect(vector).toEqual(new Vector(3, 5));
    });

    it(' plus: não deve aceitar um parâmetro que não seja um vetor', function () {
        let vector = new Vector(1, 2);
        expect(vector.plus.bind(null, 'algo que não seja um vetor')).toThrow();
    });

    it(' minus: deve subtrair, do vetor, o vetor informado', function () {
        let vector = new Vector(1, 2);
        vector.minus(new Vector(2, 3));
        expect(vector).toEqual(new Vector(-1, -1));
    });

    it(' minus: não deve aceitar um parâmetro que não seja um vetor', function () {
        let vector = new Vector(1, 2);
        expect(vector.minus.bind(null, 'algo que não seja um vetor')).toThrow();
    });

    it(' length: deve retornar o tamanho do vetor', function () {
        let vector = new Vector(3, 4);
        expect(vector.length).toBe(5);
    });

});