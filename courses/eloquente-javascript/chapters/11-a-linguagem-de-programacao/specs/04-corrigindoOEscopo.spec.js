const eggLanguage = require('../scripts/eggLanguage');

describe('Egg: set: ', function () {

    it('deve ser possivel setar um novo valor para uma variável', function () {
        let program = 'do(define(x, 4),define(setx, fun(val, set(x, val))),setx(50),print(x))';
        let result = eggLanguage.run(program);
        expect(result).toBe(50);
    });

    it('deve retornar um erro ao setar uma variável indefinida', function () {
        let program = 'set(quux, true)';
        expect(eggLanguage.run.bind(program)).toThrow();
    });

});