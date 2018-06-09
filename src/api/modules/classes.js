// import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/classes';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = async (params = {}) => {
	const allowedKeys = [
		'name',
		'code',
		'curso_id',
		'periodo',
	];

	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	// const classes = await baseRequest.get('turmas', {
	// 	params: filteredParams,
	// });

	await sleep(1000);
	const classes = mockData;

	return classes;
};

export default {
	get,
};
