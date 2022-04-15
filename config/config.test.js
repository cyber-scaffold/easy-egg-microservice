'use strict';

console.log('测试环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: '',
});

exports.io = {

};

// exports.redis = {
//   client: {
//     port: 6379,
//     host: '',
//     password: false,
//     db: 0,
//   },
// };
