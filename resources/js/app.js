require('./bootstrap');

window.Vue = require('vue').default;


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('comp-final', require('./components/ComponenteExamenFinal.vue').default);


const app = new Vue({
    el: '#app',
});
