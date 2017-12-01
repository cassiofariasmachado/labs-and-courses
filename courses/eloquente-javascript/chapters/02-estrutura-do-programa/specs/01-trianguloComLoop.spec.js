const triangle = require('../scripts/01-trianguloComLoop');

describe('Triângulo com loop', function () {

    it('deve desenhar um triângulo', function () {
        expect(triangle()).toEqual('#\n##\n###\n####\n#####\n######\n#######\n');
    });

});