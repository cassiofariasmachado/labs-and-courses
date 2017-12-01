const ArraySeq = require('../scripts/03-interfaceSequencial.es6').ArraySeq,
    RangeSeq = require('../scripts/03-interfaceSequencial.es6').RangeSeq,
    logFive = require('../scripts/03-interfaceSequencial.es6').logFive;

describe('ArraySeq', function () {

    it('deve retornar o próximo elemento da sequência', function () {
        let arraySeq = new ArraySeq([1, 2]);
        expect(arraySeq.next()).toBe(1);
        expect(arraySeq.next()).toBe(2);
    });

    it('deve retornar verdadeiro quando existir um próximo elemento na sequência', function () {
        let arraySeq = new ArraySeq([1, 2]);
        arraySeq.next();
        expect(arraySeq.hasNext).toBeTruthy();
    });

    it('deve retornar falso quando não existir um próximo elemento na sequência', function () {
        let arraySeq = new ArraySeq([1, 2]);
        arraySeq.next();
        arraySeq.next();
        expect(arraySeq.hasNext).toBeFalsy();
    });

});

describe('RangeSeq', function () {

    it('deve retornar o próximo elemento da sequência', function () {
        let rangeSeq = new RangeSeq(100, 1000);
        expect(rangeSeq.next()).toBe(100);
        expect(rangeSeq.next()).toBe(101);
    });

    it('deve retornar verdadeiro quando existir um próximo elemento na sequência', function () {
        let rangeSeq = new RangeSeq(100, 1000);
        rangeSeq.next();
        expect(rangeSeq.hasNext).toBeTruthy();
    });

    it('deve retornar falso quando não existir um próximo elemento na sequência', function () {
        let rangeSeq = new RangeSeq(100, 102);
        rangeSeq.next();
        rangeSeq.next();
        rangeSeq.next();
        expect(rangeSeq.hasNext).toBeFalsy();
    });

});

describe('logFive', function () {

    it('deve logar os 5 primeiros itens da sequência baseada em um array', function () {
        let arraySeq = new ArraySeq([1, 2]);
        expect(logFive(arraySeq)).toBe('1\n2\n');
    });

    it('deve logar os 5 primeiros itens da sequência baseada em um intervalo', function () {
        let rangeSeq = new RangeSeq(100, 1000);
        expect(logFive(rangeSeq)).toBe('100\n101\n102\n103\n104\n');
    });

});