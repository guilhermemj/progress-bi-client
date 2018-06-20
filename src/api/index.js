import modules from './modules';
import baseRequest from './base-request';

export default {
  base: baseRequest,
  ...modules,
};
