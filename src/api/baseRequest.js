import axios from 'axios';

const baseRequest = axios.create({
	baseURL: 'http://localhost/pbi-uam-api/',
});

baseRequest.interceptors.response.use(
	response => response,
	(error) => {
		// If não otimizado para facilitar tratamentos de status adicionais
		if (error.response) {
			const { status } = error.response;

			if (status === 403) {
				window.location = '/login';
			}
		}

		return Promise.reject(error);
	},
);

export default baseRequest;
