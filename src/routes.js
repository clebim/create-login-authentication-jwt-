const express = require('express');
const routes = express.Router();
const routesToken = express.Router();

const UserController = require('./controllers/UserControllers');
const authController = require('./controllers/authController');
const projectController = require('./controllers/ProjectController');
const authMiddleware = require('./middlewares/auth');

routesToken.use(authMiddleware);

routes.post('/register',  UserController.Store);
routes.post('/authenticate',  authController.Store );
//routes.get('/project',  projectController.Store );

routesToken.get('/project', projectController.Store);

module.exports = routes, routesToken;