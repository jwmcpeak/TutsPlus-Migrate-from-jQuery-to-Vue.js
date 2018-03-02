(function() {
    Vue.component('accordion', {
        template: '#accordion-template',
        props: ['id', 'options'],
        mounted() {
            $(`#${this.id}`).accordion(this.options);
        }
    });
}());