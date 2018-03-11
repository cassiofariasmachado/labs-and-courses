new Vue({
    el: '#exercise',
    data: {
        value: 0,
        timeout: null,
        time: 5000
    },
    computed: {
        result: function () {
            return this.value === 37 ? 'Done' : 'Not there yet';
        }
    },
    watch: {
        value: function () {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                this.value = 0;
            }, this.time);
        }
    }
});