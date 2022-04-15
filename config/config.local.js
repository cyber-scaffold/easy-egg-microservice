'use strict';

console.log('开发环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: '',
});

// exports.redis = {
//   client: {
//     port: 6379,
//     host: '',
//     password: false,
//     db: 0,
//   },
// };

// exports.mysql = {
//   client: {
//     host: '118.31.55.169',
//     port: '3307',
//     user: 'root',
//     password: 'Yiyou123@',
//     database: 'yiyou',
//   },
//   app: true,
//   agent: false,
// };

exports.io = {

};
