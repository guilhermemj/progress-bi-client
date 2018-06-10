/* eslint-disable no-param-reassign */
import api from '@/api';

const state = {
	list: [],
};

const getters = {

};

/* eslint-disable no-param-reassign */
const mutations = {
	updateList(localState, newList) {
		newList.forEach((newItem) => {
			const index = localState.list.find(
				({ id }) => id === newItem.id,
			);

			if (index > -1) {
				localState.list.splice(index, 1, newItem);
			} else {
				localState.list.push(newItem);
			}
		});
	},

	cleanList(localState) {
		localState.list = [];
	},
};
/* eslint-enable no-param-reassign */

const actions = {
	async fetchList({ commit }, params = {}) {
		commit('updateList', await api.results.getList(params));
	},
};

export default {
	namespaced: true,

	state,
	getters,
	mutations,
	actions,
};
