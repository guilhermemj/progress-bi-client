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

const parseResponse = rawItem => ({
	id: rawItem.id,
	hits: rawItem.acertos,
	errors: rawItem.erros,
	total: rawItem.acertos + rawItem.erros,

	exam: {
		id: rawItem.prova.id,
		name: rawItem.prova.name,
		code: rawItem.prova.code,
		courseId: rawItem.prova.curso_id,
		classId: rawItem.prova.turma_id,
	},

	category: {
		id: rawItem.categoria.id,
		name: rawItem.categoria.name,
	},

	student: {
		id: rawItem.aluno.id,
		ra: rawItem.aluno.ra,
		userId: rawItem.aluno.usuario_id,
	},
});

const actions = {
	async fetchList({ commit }, params) {
		const examsList = await api.results.get(params);

		commit('updateList', examsList.map(parseResponse));
	},
};

export default {
	namespaced: true,

	state,
	getters,
	mutations,
	actions,
};
