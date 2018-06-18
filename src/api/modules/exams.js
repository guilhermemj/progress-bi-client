import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/exams';

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
		'curso_id',
		'turma_id',
	];

	const parseReponse = (response) => {
		const dataList = response.data;

		return dataList.map(
			rawItem => ({
				id: rawItem.id,
				name: rawItem.name,
				code: rawItem.code,
				courseId: rawItem.curso_id,
				classes: rawItem.turmas.map(
					rawClass => ({
						id: rawClass.id,
						code: rawClass.code,
						name: rawClass.name,
						period: rawClass.periodo,
					}),
				),
			}),
		);
	};

	const serverResponse = (useMock ?
		await simulateServerDelay({ data: mockData }) :
		await baseRequest.get('provas', {
			params: filterParams(params, allowedKeys),
		})
	);

	return parseReponse(serverResponse);
};

export default {
	getList,
};
