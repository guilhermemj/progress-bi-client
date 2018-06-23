import Vue from 'vue';
import Vuex from 'vuex';
import jwtDecode from 'jwt-decode';

// import apiBaseRequest from '@/api/base-request';

import modules from './modules';

Vue.use(Vuex);

const loggedIn = window.localStorage.getItem('jwt') || false;
const user = loggedIn ? jwtDecode(loggedIn) : null;

// function initAxios(jwt) {
//   apiBaseRequest.defaults.headers.common.Authorization = `Bearer ${jwt}`;
// }

// if (loggedIn) {
//   initAxios(loggedIn);
// }

export default new Vuex.Store({
  state: {
    loggedIn,
    user,
  },

  mutations: {
    logIn(state, jwt) {
      state.loggedIn = jwt;
      state.user = jwtDecode(jwt);
      // initAxios(jwt);
    },

    logOut(state) {
      state.loggedIn = false;
      window.localStorage.removeItem('jwt');
    },
  },

  modules,
});
