'use strict';

console.log('docker生产环境=====>');

const { request_config_extend } = require('@cyber-library/request');
request_config_extend({
  base_url: '',
});

exports.io = {
  // redis: {
  //   host: '',
  //   port: 6379,
  //   auth_pass: false,
  //   db: 2,
  // },
};

exports.redis = {
  // client: {
  //   port: 6379,
  //   host: '',
  //   password: false,
  //   db: 0,
  // },
};
