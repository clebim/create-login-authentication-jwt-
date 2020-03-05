const express = require('express');
const routesToken = express.Router();

const projectController = require('./controllers/ProjectController');
const authMiddleware = require('./middlewares/auth');

routesToken.use(authMiddleware);

routesToken.get('/', projectController.Store);

module.exports = routesToken;