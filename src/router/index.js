import { Router } from "express";
import userController from "../controller/userController.js";

const routes = Router();

routes.post("/cadastrarUser", userController.cadastrarUser);
routes.get("/", userController.listarUsers);
routes.put("/atualizarUser/:id", userController.atualizarUser);
routes.delete("/deletarUser/:id", userController.deletarUser);

export default routes;
