/* eslint-disable no-param-reassign */
import request from '@/api/base-request';

const importSheet = async (data = {}) => {
  if (!(data instanceof FormData) && data instanceof File) {
    const formData = new FormData();
    formData.append('file', data);

    data = formData;
  }

  await request.post('/parser/parse', {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data,
  });
};

export default importSheet;
