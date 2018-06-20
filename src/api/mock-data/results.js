import createMock from './createMock';

export default createMock({
	id: 'UniqueNumber',
	acertos: 'Number',
	erros: 'Number',

	prova: {
		id: 'UniqueNumber',
		name: 'String',
		code: 'String',
		curso_id: 'UniqueNumber',
		turma_id: 'UniqueNumber',
	},

	categoria: {
		id: 'UniqueNumber',
		name: 'String',
	},

	aluno: {
		id: 'UniqueNumber',
		usuario_id: 'UniqueNumber',
		ra: 'Number',
	},
}, 20);
