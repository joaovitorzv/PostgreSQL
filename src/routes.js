const express = require('express');

const userController = require('./controllers/userController');
const addressController = require('./controllers/addressController');

const routes = express.Router();

routes.post('/users', userController.store);
routes.get('/users', userController.index);

routes.post('/users/:user_id/addresses', addressController.store);
routes.get('/users/:user_id/addresses', addressController.index);

module.exports = routes;