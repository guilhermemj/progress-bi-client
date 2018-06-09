// import baseRequest from '@/api/baseRequest';
import mockData from '@/assets/mock-data/students';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get = async (params = {}) => {
	const allowedKeys = [
		'ra',
		'curso_id',
		'turma_id',
	];

	const filteredParams = {};

	Object.entries(params).forEach(([key, param]) => {
		if (allowedKeys.includes(key)) {
			filteredParams[key] = param;
		}
	});

	// const students = await baseRequest.get('alunos', {
	// 	params: filteredParams,
	// });

	await sleep(1000);
	const students = mockData;

	return students;
};

export default {
	get,
};
