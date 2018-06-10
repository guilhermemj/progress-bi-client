import 'es6-promise/auto';
import Vue  from 'vue';
import Vuex from 'vuex';
import modules from './modules';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		count: 0,
	},

	mutations: {
		increment(state) {
			state.count++;
		},
	},

	modules,
});
