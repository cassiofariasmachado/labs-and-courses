const deepEqual = require('../scripts/04-comparacaoProfunda');

describe('Comparação profunda', () => {

    it('deve compara objetos pela igualdade de suas propriedades', function () {
        var obj = { here: { is: "an" }, object: 2 };
        expect(deepEqual(obj, obj)).toBeTruthy();
        expect(deepEqual(obj, { here: 1, object: 2 })).toBeFalsy();
        expect(deepEqual(obj, { here: { is: "an" }, object: 2 })).toBeTruthy();
    });

});