'use strict';

const app = require('./index');
const serverless = require('serverless-http');

module.exports.carousel = serverless(app);
