import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Element from 'element-ui';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './assets/scss/helper/_element-variables.scss';

Vue.config.productionTip = false;

Vue.use(Element);

new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
