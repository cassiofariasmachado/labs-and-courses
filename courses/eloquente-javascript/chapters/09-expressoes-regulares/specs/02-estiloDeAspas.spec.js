const replaceQuotationMarks = require('../scripts/02-estiloDeAspas');

describe('Estilo de aspas', function () {

    it('deve substituir as aspas simples por duplas', function () {
        let text = "'I'm the cook,' he said, 'it's my job.'";
        expect(replaceQuotationMarks(text)).toBe('"I\'m the cook," he said, "it\'s my job."');
    });

});