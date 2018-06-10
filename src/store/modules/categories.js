/* eslint-disable no-param-reassign */
import api from '@/api';

const state = () => ({
	list: [],
});

const getters = {
	sortedList({ list }) {
		return Array.from(list).sort((a, b) => (a.name > b.name ? 1 : -1));
	},
};

/* eslint-disable no-param-reassign */
const mutations = {
	updateList(localState, newList) {
		localState.list = newList;
	},

	cleanList(localState) {
		localState.list = [];
	},
};
/* eslint-enable no-param-reassign */

const actions = {
	async fetchList({ commit }, params) {
		const categoriesList = await api.categories.get(params);

		commit('updateList', categoriesList.map(
			// Looks stupid because data is mocked
			rawCategory => ({
				id: rawCategory.id,
				name: rawCategory.name,
			}),
		));
	},
};

export default {
	namespaced: true,

	state,
	getters,
	mutations,
	actions,
};
