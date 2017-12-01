const regexpGolfModule = require('../scripts/01-regexpGolf'),
    utilsModule = require('./utils'),
    verifyIfMatchPattern = utilsModule.verifyIfMatchPattern,
    verifyIfNotMatchPattern = utilsModule.verifyIfNotMatchPattern,
    carOrCat = regexpGolfModule.carOrCat,
    popOrProp = regexpGolfModule.popOrProp,
    ferretOrFerryOrFerrari = regexpGolfModule.ferretOrFerryOrFerrari,
    isIous = regexpGolfModule.isIous,
    badPontuation = regexpGolfModule.badPontuation,
    isMoreThanSixLetters = regexpGolfModule.isMoreThanSixLetters,
    noLetterE = regexpGolfModule.noLetterE;


describe('Regexp golf', function () {

    it('deve reconhecer os padrões "car" ou "cat"', function () {
        ['my car', 'bad cats'].forEach(verifyIfMatchPattern.bind(undefined, carOrCat));
        ['camper', 'high art'].forEach(verifyIfNotMatchPattern.bind(undefined, carOrCat));
    });


    it('deve reconhecer os padrôes "pop" ou "prop"', function () {
        ['pop culture', 'mad props'].forEach(verifyIfMatchPattern.bind(undefined, popOrProp));
        ['plop'].forEach(verifyIfNotMatchPattern.bind(undefined, popOrProp));
    });

    it('deve reconhecer os padrões "ferret", "ferry" ou "ferrari"', function () {
        ['ferret', 'ferry', 'ferrari'].forEach(verifyIfMatchPattern.bind(undefined, ferretOrFerryOrFerrari));
        ['ferrum', 'transfer A'].forEach(verifyIfNotMatchPattern.bind(undefined, ferretOrFerryOrFerrari));
    });

    it('deve reconhecer o padrão de palavras terminadas com "ious"', function () {
        ['how delicious', 'spacious room'].forEach(verifyIfMatchPattern.bind(undefined, isIous));
        ['ruinous', 'consciousness'].forEach(verifyIfNotMatchPattern.bind(undefined, isIous));
    });

    it('deve reconhecer o padrão uma pontuação errada, espaço e sinal (ponto, ponto e vírgula, vírgula e dois pontos)', function () {
        ['bad punctuation .', ' ;, bad thing', 'is an , error', 'this too :'].forEach(verifyIfMatchPattern.bind(undefined, badPontuation));
        ['escape the dot'].forEach(verifyIfNotMatchPattern.bind(undefined, badPontuation));
    });

    it('deve reconhecer o padrão de uma palavra maior que seis letras', function () {
        ['hottentottententen', 'moreThanSixLetters', 'sixlet'].forEach(verifyIfMatchPattern.bind(undefined, isMoreThanSixLetters));
        ['no', 'hotten totten tenten'].forEach(verifyIfNotMatchPattern.bind(undefined, isMoreThanSixLetters));
    });

    it('deve reconhecer o padrão do texto possuir pelo menos uma palavra sem a letra "e"', function () {
        ['red platypus', 'wobbling nest'].forEach(verifyIfMatchPattern.bind(undefined, noLetterE));
        ['earth bed', 'learning ape'].forEach(verifyIfNotMatchPattern.bind(undefined, noLetterE));
    });
});


