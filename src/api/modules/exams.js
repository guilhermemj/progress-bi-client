import request from '@/api/base-request';
import mockData from '@/api/mock-data/exams';

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

const ALLOWED_KEYS = [
  'curso_id',
  'turma_id',
];

const parseReponse = (response) => {
  const dataList = response.data;

  return (dataList || []).map(
    rawItem => ({
      id: rawItem.id,
      name: rawItem.name,
      code: rawItem.code,
      courseId: rawItem.curso_id,
      classes: rawItem.turmas.map(
        rawClass => ({
          id: rawClass.id,
          code: rawClass.code,
          name: rawClass.name,
          period: rawClass.periodo,
        }),
      ),
    }),
  );
};

const getList = async (params = {}) => {
  const serverResponse = (useMock ?
    await simulateServerDelay({ data: mockData }) :
    await request.get('provas', {
      params: filterParams(params, ALLOWED_KEYS),
    })
  );

  return parseReponse(serverResponse);
};

export default {
  getList,
};
