const eggLanguage = require('../scripts/eggLanguage');

describe('Egg: comentário: ', function () {

    it('deve pular um comentário', function () {
        let parsedProgram = eggLanguage.parse('# hello\nx');
        expect(parsedProgram).toEqual({ type: 'word', name: 'x' });
    });

    it('deve pular comentários seguidos', function () {
        let parsedProgram = eggLanguage.parse('a # one\n   # two\n()');
        expect(parsedProgram).toEqual({ type: 'apply', operator: { type: 'word', name: 'a' }, args: [] });
    });

    it('deve pular espaços e comentários juntos', function () {
        let parsedProgram = eggLanguage.parse('   # one\na()');
        expect(parsedProgram).toEqual({ type: 'apply', operator: { type: 'word', name: 'a' }, args: [] });
    })

});