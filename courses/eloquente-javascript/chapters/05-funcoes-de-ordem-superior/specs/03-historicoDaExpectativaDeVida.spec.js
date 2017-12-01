const calcAverageAgePerCentury = require('../scripts/03-historicoDaExpectativaDeVida');

describe('Histórico de expectativa de vida', function () {

    it('test', function () {
        let averageAgePerCentury = calcAverageAgePerCentury();

        expect(averageAgePerCentury['16']).toBeCloseTo(43.5, 1);
        expect(averageAgePerCentury['17']).toBeCloseTo(51.2, 1);
        expect(averageAgePerCentury['18']).toBeCloseTo(52.8, 1);
        expect(averageAgePerCentury['19']).toBeCloseTo(54.8, 1);
        expect(averageAgePerCentury['20']).toBeCloseTo(84.7, 1);
        expect(averageAgePerCentury['21']).toBeCloseTo(94, 1);
    })

});