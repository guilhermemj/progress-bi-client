// import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/exams';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = async (params = {}) => {
	const allowedKeys = [
		'cursoId',
		'turmaId',
	];

	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	// const results = await baseRequest.get('resultados', {
	// 	params: filteredParams,
	// });

	await sleep(1000);
	const results = mockData;

	return results;
};

export default {
	get,
};
