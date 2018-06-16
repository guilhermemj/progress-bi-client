// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue   from 'vue';
import axios from 'axios';

import router from '@/router';
import store  from '@/store';
import api    from '@/api';

import App from '@/App';

// TODO: Implement Vue.use($api) interface
Vue.prototype.$http = axios;
Vue.prototype.$api = api;

Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {

// });

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },

	router,
	store,
});
