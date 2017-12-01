const ancestry = JSON.parse(require('./ancestry')),
    average = require('./utils').average,
    calcAge = require('./utils').calcAge;

module.exports = function calcAgeDifferenceBetweenMotherAndChild() {

    var byName = {};

    ancestry.forEach(function (person) {
        byName[person.name] = person;
    });

    function hasKnowMother(son) {
        let mother = byName[son.mother];
        return mother ? calcAge(mother.born, son.born) : null;
    }

    let ancestryWithKnowMother = ancestry.map(hasKnowMother).filter((elem) => {
        if (elem) {
            return elem;
        }
    })

    return average(ancestryWithKnowMother);

};