import Router from "express";
import userController from "../controller/userController.js";

const routes = new Router();

routes
  .post("/cadastrarUser", userController.cadastrarUser)
  .get("/listar", userController.listarUsers)
  .put("/atualizar/:id", userController.atualizarUser) 
  .delete("/deletar/:id", userController.deletarUser);  

export default routes;
