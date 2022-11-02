import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); //esse routes só irar valer para rotas que vinherem APÓS

routes.put('/users', UserController.update); //evitar que essa rota seja acessada quando o usuario não tiver logado

export default routes;
