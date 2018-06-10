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
		const classesList = await api.classes.get(params);

		commit('updateList', classesList.map(
			rawClass => ({
				id: rawClass.id,
				name: rawClass.name,
				code: rawClass.code,
				courseId: rawClass.curso_id,
				period: rawClass.periodo,
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
