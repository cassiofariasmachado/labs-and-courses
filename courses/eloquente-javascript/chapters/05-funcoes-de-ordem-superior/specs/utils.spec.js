const utils = require('../scripts/utils');

describe('Group by', function () {

    const people = [
        {
            year: 1996,
            name: 'Cássio'
        },
        {
            year: 1996,
            name: 'Julia'
        },
        {
            year: 2001,
            name: 'João'
        }
    ];


    it('deve agrupar os elementos pelo critério informado', function () {
        let groupByYear = utils.groupBy(people, (person) => { return person.year; });

        expect(groupByYear).toEqual({
            1996: [{ year: 1996, name: 'Cássio' }, { year: 1996, name: 'Julia' }],
            2001: [{ year: 2001, name: 'João' }]
        });
    });

    it('deve agrupar e tranformar os elementos pelo critério informado', function () {
        let groupFunction = (person) => { return person.year; };
        let tranformFunction = (person) => { return person.name; };

        let groupByYear = utils.groupBy(people, groupFunction, tranformFunction);

        expect(groupByYear).toEqual({
            1996: ['Cássio', 'Julia'],
            2001: ['João']
        });
    });

});