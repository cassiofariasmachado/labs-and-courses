const reliableMultiply = require('../scripts/01-tenteOutraVez');

describe('Tente outra vez', function () {

    it('deve tentar até conseguir multiplicar os dois números', function () {
        expect(reliableMultiply(10, 20)).toBe(200);
    });

    it('deve tentar até não conseguir multiplicar dois números indefinidos', function () {
        expect(reliableMultiply(undefined, undefined)).toBeNaN();
    });

    it('deve tentar até não conseguir multiplicar um número por um número indefinido', function () {
        expect(reliableMultiply(100, undefined)).toBeNaN();
    });

});