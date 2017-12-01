const listaModule = require('../scripts/03-lista')

describe('Lista: arrayToList', () => {

    it('deve tranformar um array em lista', () => {
        let array = [1, 2, 3];
        let list = listaModule.arrayToList(array);
        let expectList = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        };

        expect(list).toEqual(expectList);
    });
});

describe('Lista: listToArray', () => {

    it('deve tranformar uma lista em um array', () => {
        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        };
        var array = listaModule.listToArray(list);

        expect(array).toEqual([1, 2, 3]);
    });
});

describe('List: prepend', () => {

    it('deve retornar uma nova lista com elemento adicionado ao começo da atual', () => {
        let list = {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        };
        let expectList = {
            value: 0,
            next: {
                value: 1,
                next: {
                    value: 2,
                    next: {
                        value: 3,
                        next: null
                    }
                }
            }
        };

        expect(listaModule.prepend(0, list)).toEqual(expectList);
    })

});

describe('Lista: nth', () => {

    const list = {
        value: 0,
        next: {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    };

    it('deve retornar o elemento de indice 3 da lista', () => {
        expect(listaModule.nth(3, list)).toEqual(3);
    });

    it('deve retornar não definido se elemento não estiver na lista', function () {
        expect(listaModule.nth(5, list)).not.toBeDefined();
    });
});

describe('Lista: nth recursivo', () => {

    const list = {
        value: 0,
        next: {
            value: 1,
            next: {
                value: 2,
                next: {
                    value: 3,
                    next: null
                }
            }
        }
    };

    it('deve retornar o elemento de índice 2 da lista', () => {
        expect(listaModule.recursiveNth(2, list)).toEqual(2);
    });

    it('deve retornar não definido se elemento não estiver na lista', function () {
        expect(listaModule.recursiveNth(5, list)).not.toBeDefined();
    });
});