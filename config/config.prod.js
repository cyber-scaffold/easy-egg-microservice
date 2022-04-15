'use strict';

console.log('生产环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: '',
});

// exports.redis = {
//   client: {
//     port: 6379,
//     host: '',
//     password: '',
//     db: 0,
//   },
// };
