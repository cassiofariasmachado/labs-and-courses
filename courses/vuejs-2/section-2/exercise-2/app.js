new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alertMe: function () {
            alert('An alert!')
        },
        updateValue: function (event) {
            this.value = event.target.value;
        }
    }
});