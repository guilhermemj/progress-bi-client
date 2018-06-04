import axios from 'axios';

const baseRequest = axios.create({
	baseURL: 'http://localhost/pbi-uam-api/',
});

baseRequest.interceptors.response.use(
	response => response,
	(error) => {
		console.log(error);

		// if (error.response.status === 403) {
		// 	window.location = '/login';
		// }

		return Promise.reject(error);
	},
);

const getResults = async (params = {}) => {
	const results = await baseRequest.get('resultados', {
		params,
	});

	return results;
};

export default {
	getResults,
};
