const Box = require('../scripts/02-caixaTrancada');

describe('Caixa trancada', function () {

    it('deve iniciar a caixa bloqueada', function () {
        let box = new Box();

        expect(box.locked).toBeTruthy();
    });

    it('deve conseguir acessar o conteúdo da caixa se ela não estiver bloqueada', function () {
        let box = new Box();
        box.unlock();
        box._content.push('item');

        expect(box._content).toEqual(['item']);
    });

    it('não deve acessar o conteúdo da caixa se ela estiver bloqueada', function () {
        let box = new Box();

        expect(() => { return box._content; }).toThrow();
    });

    it('não executar função se caixa não estiver desbloqueada', function () {
        let box = new Box();
        let functionToCall = jasmine.createSpy('functionToCall');
        spyOn(box, 'withBoxUnlocked').and.callThrough();

        expect(box.withBoxUnlocked.bind(box, functionToCall)).toThrow();
        expect(box.withBoxUnlocked).toHaveBeenCalled();
        expect(functionToCall).not.toHaveBeenCalled();
        expect(box.locked).toBeTruthy();
    });

    it('deve executar função quando caixa esta desbloqueada', function () {
        let box = new Box();
        let functionToCall = jasmine.createSpy('functionToCall');
        spyOn(box, 'withBoxUnlocked').and.callThrough();
        box.unlock();

        expect(box.withBoxUnlocked.bind(box, functionToCall)).not.toThrow();
        expect(box.withBoxUnlocked).toHaveBeenCalled();
        expect(functionToCall).toHaveBeenCalled();
        expect(box.locked).toBeTruthy();
    });

});