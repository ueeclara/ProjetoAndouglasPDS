import { Router } from 'express';
import UserController from '../controller/userController';

const routes = Router();

routes
  .post('/cadastrarUser', UserController.cadastrarUser)
  .get('/listar', UserController.listarUsers)
  .put('/atualizar/:id', UserController.atualizarUser)
  .delete('/deletar/:id', UserController.deletarUser);

export default routes;
