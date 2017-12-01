const some = require('../scripts/04-todosEAlguns').some,
    every = require('../scripts/04-todosEAlguns').every;

describe('Alguns', function () {

    it('deve retornar verdadeiro se algum elemento retornar verdadeiro para o predicado', function () {
        expect(some([NaN, 3, 4], isNaN)).toBeTruthy();
    });

    it('deve retornar falso se todos elementos retornarem falso para o predicado', function () {
        expect(some([2, 3, 4], isNaN)).toBeFalsy();
    });

});

describe('Todos', function () {

    it('deve retornar falso se algum elemento retornar falso para o predicado', function () {
        expect(every([NaN, NaN, NaN], isNaN)).toBeTruthy();
    });

    it('deve retornar verdadeiro se todos os elementos retornarem verdadeiro para o predicado', function () {
        expect(every([NaN, NaN, 4], isNaN)).toBeFalsy();
    });

});