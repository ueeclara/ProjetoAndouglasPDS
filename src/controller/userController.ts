import { Request, Response } from 'express';
import UserModel from '../model/UserModel';

class UserController {
  async cadastrarUser(req: Request, res: Response) {
    const usuario = req.body;
    try {
      await UserModel.salvar(usuario.categoria, usuario.nome, usuario.preco, usuario.descricao);
      return res
        .status(200)
        .send({ message: 'Usuário foi cadastrado com sucesso!' });
    } catch (erro) {
      return res
        .status(500)
        .send({ message: `Erro ao cadastrar usuário - ${erro}` });
    }
  }

  async listarUsers(req: Request, res: Response) {
    try {
      console.log('enrou');
      const usuarios = await UserModel.listasUsers();
      return res.status(200).json(usuarios);
    } catch (err) {
      return res
        .status(500)
        .send({ message: `Erro ao listar usuários - ${err}` });
    }
  }

  async atualizarUser(req: Request, res: Response) {
    const { id } = req.params;
    const novoUsuario = req.body;

    await UserModel.atualizar(
      id,
      novoUsuario.categoria,
      novoUsuario.nome,
      novoUsuario.preco,
      novoUsuario.descricao
    );

    try {
      console.log('Antes de chamar UserModel.atualizar:', id, novoUsuario);
      await UserModel.atualizar (id, novoUsuario);
      console.log('Depois de chamar UserModel.atualizar');
      return res.status(200).send({ message: 'Usuário atualizado com sucesso!' });
    } catch (erro) {
      console.error('Erro ao atualizar usuário:', erro);
      return res.status(500).send({ message: `Erro ao atualizar usuário - ${erro}` });
    }
  }
  
  async deletarUser(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await UserModel.deletar(id);
      return res.status(200).send({ message: 'Usuário deletado com sucesso!' });
    } catch (erro) {
      return res.status(500).send({ message: `Erro ao deletar usuário - ${erro}` });
    }
  }
}

export default new UserController();
