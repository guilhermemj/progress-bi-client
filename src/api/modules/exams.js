import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/exams';

const useMock = true;

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
		'cursoId',
		'turmaId',
	];

	const parseReponse = (response) => {
		const dataList = response;

		return dataList.map(
			rawItem => ({
				id: rawItem.id,
				name: rawItem.name,
				code: rawItem.code,
				courseId: rawItem.curso_id,
				classId: rawItem.turma_id,
			}),
		);
	};

	const serverResponse = (useMock ?
		await simulateServerDelay(mockData) :
		await baseRequest.get('provas', {
			params: filterParams(params, allowedKeys),
		})
	);

	return parseReponse(serverResponse);
};

export default {
	getList,
};
