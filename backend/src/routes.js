const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);

module.exports = routes;