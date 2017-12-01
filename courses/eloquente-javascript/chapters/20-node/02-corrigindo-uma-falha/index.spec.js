const urlToPaht = require('./index');

describe('Corrigindo uma falha', function () {

    it('deve remover o padrão ../ em qualquer lugar das urls', function () {
        var listOfUrls = ['../.config/config/google-chrome/Default/Web%20Data', '../.ssh/id_dsa', '../../../etc/passwd', '/etc'];

        var results = listOfUrls.map((elem) => urlToPaht(elem));

        expect(['./.config/config/google-chrome/Default/Web Data', './.ssh/id_dsa', './etc/passwd', './/etc']).toEqual(results);
    })

});