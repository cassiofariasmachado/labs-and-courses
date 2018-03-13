new Vue({
    el: '#app',
    data: {
        player: {
            type: 'player',
            health: 100
        },
        monster: {
            type: 'monster',
            health: 100
        },
        logs: [],
        startedGame: false
    },
    methods: {
        attack(event, specialAttack = false) {
            this.turn(this.player, specialAttack) && this.turn(this.monster, specialAttack);
        },
        heal(specialAttack = false) {
            this.turn(this.player, specialAttack, 'heal') && this.turn(this.monster);
        },
        turn(character, specialAttack = false, actionType = 'attack') {
            const target = this.getTarget(character, actionType);
            let damage = this.random();

            if (specialAttack) {
                damage *= 2;
            }

            if (actionType === 'attack') {
                this[target].health -= damage;
            } else {
                this[target].health += damage;
            }

            this.addLog(character, damage, target, actionType);

            if (this.win || this.loose) {
                this.finish();
                return false;
            }

            return true;
        },
        giveUp() {
            if (confirm('Are you sure?')) {
                this.startNewGame();
            }
        },
        getTarget(character, actionType) {
            if (actionType === 'heal') {
                return character.type;
            }

            const isPlayer = character.type === 'player';
            return isPlayer ? 'monster' : 'player';
        },
        addLog(character, damage, target, actionType) {
            const isPlayer = character.type === 'player';
            const formatedTarget = isPlayer && target === 'player' ?
                'himself' : target;
            const action = actionType === 'heal' ? 'heals' : 'hits';
            const className = isPlayer ? 'player-turn' : 'monster-turn';
            const message = `${this.captalize(character.type)} ${action} ${formatedTarget} for ${damage}`;

            this.logs.push({
                message,
                className
            });
        },
        captalize(value) {
            const firstLetter = value[0].toUpperCase();
            return firstLetter + value.slice(1);
        },
        random() {
            return parseInt(Math.random() * 11);
        },
        startNewGame() {
            this.player = {
                type: 'player',
                health: 100
            };
            this.monster = {
                type: 'monster',
                health: 100
            }
            this.startedGame = true;
            this.logs = [];
        },
        percent(value) {
            return value + '%'
        },
        healthColor(health) {
            if (health < 30) {
                return 'red';
            }

            if (health < 50) {
                return 'yellow';
            }

            return 'green';
        },
        getCharacterStyle(character) {
            return {
                width: character.health + '%',
                backgroundColor: this.healthColor(character.health)
            }
        },
        finish() {
            let message = ''

            if (this.loose) {
                message += 'You loose. ';
            }

            if (this.win) {
                message += 'You win. ';
            }

            if (confirm(message + 'Start a new game?')) {
                this.startNewGame();
            } else {
                this.startedGame = false;
            }
        }
    },
    computed: {
        monsterStyle() {
            return this.getCharacterStyle(this.monster)
        },
        playerStyle() {
            return this.getCharacterStyle(this.player)
        },
        win() {
            return this.monster.health <= 0
        },
        loose() {
            return this.player.health <= 0
        }
    }
})