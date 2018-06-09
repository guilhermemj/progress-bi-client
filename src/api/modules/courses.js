// import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/courses';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = async (params = {}) => {
	const allowedKeys = [
		'status',
		'name',
	];

	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	// const courses = await baseRequest.get('cursos', {
	// 	params: filteredParams,
	// });

	await sleep(1000);
	const courses = mockData;

	return courses;
};

export default {
	get,
};
