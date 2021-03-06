import createMock from './createMock';

export default createMock({
	id: 'UniqueNumber',
	ra: 'Number',
	usuario_id: 'Number',

	usuario: {
		id: 'UniqueNumber',
		email: 'String',
		senha: 'String',
		nome: 'String',
	},

	cursos: [
		{
			id: 'UniqueNumber',
			nome: 'String',
			status: 'Number',
		},
	],

	turmas: [
		{
			id: 'UniqueNumber',
		},
	],
}, 20);
