// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';

import api from '@/api';
import store from '@/store';
import router from '@/router';

import App from '@/App';

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$api = api;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
