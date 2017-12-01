// Execute on sandbox

function SmartPlantEater() {
    this.energy = 20;
    var directionNames = 'n ne e se s sw w nw'.split(' ');
    this.direction = randomElement(directionNames);
}

SmartPlantEater.prototype.act = function (context) {
    var space = context.find(' ');

    if (this.energy > 60 && space)
        return { type: 'reproduce', direction: space };

    var neabyPlants = context.findAll('*');
    if (neabyPlants.length > 2 && this.energy < 70)
        return { type: 'eat', direction: neabyPlants[0] };

    // Bouncing critter movement
    if (context.look(this.direction) != ' ')
        this.direction = space || 's';

    return { type: 'move', direction: this.direction };
};