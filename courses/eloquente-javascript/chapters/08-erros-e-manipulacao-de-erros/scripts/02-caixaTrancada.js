function Box() {
    this.locked = true;
};

Box.prototype.unlock = function () {
    this.locked = false;
};

Box.prototype.lock = function () {
    this.locked = true;
};

Box.prototype.withBoxUnlocked = function (functionToCall) {
    if (this.locked) {
        throw new Error('Box isn\'t unlocked.');
    }

    try {
        this.unlock();
        functionToCall();
    } catch (e) {
        throw e;
    } finally {
        this.lock();
    }

};

let content = [];
Object.defineProperty(Box.prototype, '_content', {
    get: function () {
        if (this.locked) {
            throw new Error('Locked!');
        }

        return content;
    }
});

module.exports = Box;
