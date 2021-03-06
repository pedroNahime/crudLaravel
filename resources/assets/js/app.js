require('./bootstrap');

window.Vue = require('vue');

Vue.component('top', require('./components/Top.vue'));
Vue.component('wrapper', require('./components/Wrapper.vue'));
Vue.component('logado', require('./components/Logado.vue'));
Vue.component('formulario', require('./components/formulario/Form.vue'));
Vue.component('cadastro', require('./components/formulario/FormCadastro.vue'));

Vue.component('campo', require('./components/formulario/Campo'));
Vue.component('desbloqueio', require('./components/formulario/desbloqueio'));

const app = new Vue({
    el: '#app'
});
