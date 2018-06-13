import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/categories';

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
		'name',
	];

	// Looks stupid because data is mocked
	const parseReponse = (response) => {
		const dataList = response.data;

		return dataList.map(
			rawItem => ({
				id: rawItem.id,
				name: rawItem.name,
			}),
		);
	};

	const serverResponse = (useMock ?
		await simulateServerDelay({ data: mockData }) :
		await baseRequest.get('categorias', {
			params: filterParams(params, allowedKeys),
		})
	);

	return parseReponse(serverResponse);
};

export default {
	getList,
};
