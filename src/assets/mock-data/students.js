import createMock from './createMock';

export default createMock({
	id: 'UniqueNumber',
	usuario_id: 'Number',
	ra: 'Number',
	usuario: {
		id: 'UniqueNumber',
		email: 'String',
		senha: 'String',
		nome: 'String',
	},
}, 20);
