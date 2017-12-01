const all = require('./02-esperandoPorMultiplasPromises');

describe('Esperando por multiplas promises', function () {

    function soon(val) {
        return new Promise(function (success) {
            setTimeout(function () {
                    success(val);
                },
                Math.random() * 500);
        });
    }

    function fail() {
        return new Promise(function (success, fail) {
            fail(new Error("boom"));
        });
    }

    it('deve retornar um array vazio se array de promises for vazio', function () {
        all([]).then(function (array) {
            expect([]).toBe(array);
        });
    })

    it('deve retornar a resposta de cada promise em ordem', function () {
        all([soon(1), soon(2), soon(3)]).then(function (array) {
            expect([1, 2, 3]).toBe(array);
        });
    });

    it('deve capturar erro em uma das promises', function () {
        all([soon(1), fail(), soon(3)]).then(function (array) {
            console.log("We should not get here");
        }, function (error) {
            expect('boom').toBe(error.message);
        });
    })

});