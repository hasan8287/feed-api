const express = require('express');

const controller = require('./controller');

const routes = express.Router();

routes.get('/feed', controller.getFeed);

module.exports = routes;
