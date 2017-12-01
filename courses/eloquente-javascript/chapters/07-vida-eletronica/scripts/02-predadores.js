// Execute on sandbox

function average(array) {
    if (!array && !array.length) {
        return 0;
    }

    function plus(a, b) {
        return a + b;
    }

    return array.reduce(plus) / array.length;
}

function Tiger() {
    this.energy = 250;
    this.turnsFromLastMeal = 0;
    this.historyOfHerbivoresFound = [];
};

Tiger.prototype.act = function (context) {
    let nearbyHerbivores = context.findAll('O');
    this.historyOfHerbivoresFound.push(nearbyHerbivores.length);
    let averageOfLastHerbivoresFound = average(this.historyOfHerbivoresFound.slice(-3));

    if (nearbyHerbivores.length > 0 && this.turnsFromLastMeal > 4 && averageOfLastHerbivoresFound > 1) {
        this.turnsFromLastMeal = 0;
        return { type: 'eat', direction: nearbyHerbivores[0] };
    }

    this.turnsFromLastMeal++;
    let space = context.find(' ');

    if (this.energy > 50 && space && averageOfLastHerbivoresFound > 1.5) {
        return { type: 'reproduce', direction: space };
    }

    if (space) {
        return { type: 'move', direction: space };
    }
};