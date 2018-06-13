import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/students';

const useMock = false;

const simulateServerDelay = response => new Promise(
	resolve => setTimeout(() => resolve(response), 1000),
);

const filterParams = (params = {}, allowedKeys = []) => {
	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	return filteredParams;
};

const getList = async (params = {}) => {
	const allowedKeys = [
		'ra',
		'curso_id',
		'turma_id',
	];

	const parseReponse = (response) => {
		const dataList = response.data;

		return dataList.map(
			rawItem => ({
				id: rawItem.id,
				ra: rawItem.ra,

				user: {
					id: rawItem.usuario.id,
					name: rawItem.usuario.nome,
					email: rawItem.usuario.email,
				},

				courses: rawItem.cursos.map(
					rawCourse => ({
						id: rawCourse.id,
						name: rawCourse.nome,
						status: rawCourse.status,
					}),
				),

				classes: rawItem.turmas.map(
					rawClass => ({
						id: rawClass.id,
					}),
				),
			}),
		);
	};

	const serverResponse = (useMock ?
		await simulateServerDelay({ data: mockData }) :
		await baseRequest.get('alunos', {
			params: filterParams(params, allowedKeys),
		})
	);

	return parseReponse(serverResponse);
};

export default {
	getList,
};
