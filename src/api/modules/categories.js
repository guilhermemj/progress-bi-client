// import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/categories';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = async (params = {}) => {
	const allowedKeys = [
		'name',
	];

	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	// const categories = await baseRequest.get('categorias', {
	// 	params: filteredParams,
	// });

	await sleep(1000);
	const categories = mockData;

	return categories;
};

export default {
	get,
};
