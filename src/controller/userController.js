import UserModel from "../model/UserModel.js";

class UserController {
  async cadastrarUser(req, res) {
    const usuario = req.body;
    try {
      await UserModel.salvar(usuario.categoria, usuario.nome, usuario.preco, usuario.descricao);
      return res
        .status(200)
        .send({ message: "Usuário foi cadastrado com sucesso!" });
    } catch (erro) {
      return res
        .status(500)
        .send({ message: `Erro ao cadastrar usuário - ${erro}` });
    }
  }
  async listarUsers(req, res) {
    try {
      console.log("enrou");
      const usuarios = await UserModel.listasUsers();
      return res.status(200).json(usuarios);
    } catch (err) {
      return res
        .status(500)
        .send({ message: `Erro ao listar usuários - ${err}` });
    }
  }
  async atualizarUser(req, res) {
    const { id } = req.params; 
    const novoUsuario = req.body;

    try {
      await UserModel.atualizar(id, novoUsuario);
      return res.status(200).send({ message: "Usuário atualizado com sucesso!" });
    } catch (erro) {
      return res.status(500).send({ message: `Erro ao atualizar usuário - ${erro}` });
    }
  }

  async deletarUser(req, res) {
    const { id } = req.params; 

    try {
      await UserModel.deletar(id);
      return res.status(200).send({ message: "Usuário deletado com sucesso!" });
    } catch (erro) {
      return res.status(500).send({ message: `Erro ao deletar usuário - ${erro}` });
    }
  }
}

export default new UserController();
