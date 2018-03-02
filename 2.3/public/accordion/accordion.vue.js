(function() {
    Vue.component('accordion', {
        template: '#accordion-template',
        props: ['title'],
        data() {
            return {
                active: false
            }
        },
        methods: {
            toggle() {
                this.active = !this.active;
                console.log('we are toggling the element');
            }
        }
    });
}());