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
		const examsList = await api.exams.get(params);

		commit('updateList', examsList.map(
			rawExam => ({
				id: rawExam.id,
				name: rawExam.name,
				code: rawExam.code,
				courseId: rawExam.curso_id,
				classId: rawExam.turma_id,
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
