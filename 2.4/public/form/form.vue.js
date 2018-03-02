(function() {
    new Vue({
        el: '#form',
        data: {
            email: '',
            message: '',
            color: ''
        },
        methods: {
            sendRequest() {
                alert(`Email: ${this.email}\nMessage: ${this.message}\nColor: ${this.color}`);
            }
        }
    })
})();