import request from '@/api/base-request';
import mockData from '@/api/mock-data/courses';

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
  'status',
  'name',
];

const parseReponse = (response) => {
  const dataList = response.data;

  return (dataList || []).map(
    rawItem => ({
      id: rawItem.id,
      name: rawItem.name,
      status: rawItem.status,
    }),
  );
};

const getList = async (params = {}) => {
  const serverResponse = (useMock ?
    await simulateServerDelay({ data: mockData }) :
    await request.get('cursos', {
      params: filterParams(params, ALLOWED_KEYS),
    })
  );

  return parseReponse(serverResponse);
};

export default {
  getList,
};
