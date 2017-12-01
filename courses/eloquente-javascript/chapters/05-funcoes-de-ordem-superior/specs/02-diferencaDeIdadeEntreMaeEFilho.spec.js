const calcAgeDifferenceBetweenMotherAndChild = require('../scripts/02-diferencaDeIdadeEntreMaeEFilho');

describe('Diferença de idade entre mãe e filho', function () {

    it('deve calcular a idade média das mães quando a criança nasceu', function () {
        var ageDifference = calcAgeDifferenceBetweenMotherAndChild();
        expect(ageDifference).toBeCloseTo(31.2, 1);
    });
});