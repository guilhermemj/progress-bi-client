import request from '@/api/base-request';
import mockData from '@/api/mock-data/results';

const useMock = false;

const simulateServerDelay = response => new Promise(
  resolve => setTimeout(() => resolve(response), 1000),
);

const filterParams = (params = {}, allowedKeys = []) => {
  const filteredParams = {};

  Object.entries(params).forEach(([key, param]) => {
    if (allowedKeys.includes(key)) {
      filteredParams[key] = param;
    }
  });

  return filteredParams;
};

const getList = async (params = {}) => {
  const ALLOWED_KEYS = [
    'prova_id',
    'categoria_id',
    'aluno_id',
  ];

  const parseReponse = (response) => {
    // O backend não seguiu um padrão --'
    const dataList = Object.values(response.data);

    return dataList.map(
      rawItem => ({
        id: rawItem.id,
        hits: rawItem.acertos,
        errors: rawItem.erros,
        total: rawItem.acertos + rawItem.erros,

        exam: {
          id: rawItem.prova.id,
          name: rawItem.prova.name,
          code: rawItem.prova.code,
          courseId: rawItem.prova.curso_id,
          classId: rawItem.prova.turma_id,
        },

        category: {
          id: rawItem.categoria.id,
          name: rawItem.categoria.name,
        },

        student: {
          id: rawItem.aluno.id,
          ra: rawItem.aluno.ra,
          userId: rawItem.aluno.usuario_id,
        },
      }),
    );
  };

  const serverResponse = (useMock ?
    await simulateServerDelay({ data: mockData }) :
    await request.get('resultados', {
      params: filterParams(params, ALLOWED_KEYS),
    })
  );

  return parseReponse(serverResponse);
};

const getListByClass = async (classId = null) => {
  const parseReponse = (response) => {
    const dataList = response.data;

    return (dataList || []).map(
      rawItem => ({
        id: rawItem.id,

        hits: rawItem.acertos,
        errors: rawItem.erros,
        total: rawItem.acertos + rawItem.erros,

        category: rawItem.categoria_id,
        exam: rawItem.prova_id,
        student: rawItem.aluno_id,
      }),
    );
  };

  const serverResponse = (useMock ?
    await simulateServerDelay({ data: mockData }) :
    await request.get(`/resultados/getResultadosFromTurma/${classId}`)
  );

  return parseReponse(serverResponse);
};

export default {
  getList,
  getListByClass,
};
