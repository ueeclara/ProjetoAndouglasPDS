import { Router } from 'express';
import UserController from '../controller/userController';

const routes = Router();

routes.post('/cadastrarUser', UserController.cadastrarUser);
routes.get('/', UserController.listarUsers);
routes.put('/atualizarUser/:id', UserController.atualizarUser);
routes.delete('/deletarUser/:id', UserController.deletarUser);

export default routes;
