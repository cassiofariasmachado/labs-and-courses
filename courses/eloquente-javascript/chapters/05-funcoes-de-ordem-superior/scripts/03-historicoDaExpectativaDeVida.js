const ancestry = JSON.parse(require('./ancestry')),
    average = require('./utils').average,
    groupBy = require('./utils').groupBy,
    calcAge = require('./utils').calcAge;

module.exports = function calcAverageAgePerCentury() {

    function getCentury(year) {
        return Math.ceil(year / 100);
    }

    let peopleByCentury = groupBy(ancestry, (person) => {
        return getCentury(person.died);
    }, (person) => {
        return calcAge(person.born, person.died);
    });

    let averageAgeByCentury = {};

    for (var century in peopleByCentury) {
        if (peopleByCentury.hasOwnProperty(century)) {
            averageAgeByCentury[century] = average(peopleByCentury[century]);
        }
    }

    return averageAgeByCentury;
};