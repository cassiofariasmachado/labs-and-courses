const invertendoUmArrayModule = require('../scripts/02-invertendoUmArray');

describe('Inverter array', function () {

    it('deve retornar uma nova lista invertida', function () {
        var list = [1, 2, 3];
        var invertedList = invertendoUmArrayModule.reverseArray(list);

        expect(list).not.toBe(invertedList);
        expect(invertedList).toEqual([3, 2, 1]);
    });

});

describe('Inverter posições do array', function () {

    it('deve inverter lista sem retornar uma nova', function () {
        var list = [1, 2, 3, 4, 5];
        invertendoUmArrayModule.reverseArrayInPlace(list);
        expect(list).toEqual([5, 4, 3, 2, 1]);
    });

});