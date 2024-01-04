import conexaoBancoDeDados from "../database/dbconnect.js";

class UserModel {

  async salvar(categoria, nome, preco, descricao) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL =
      "INSERT INTO users(categoria, nome, preco, descricao) VALUES ($1,$2,$3,$4)";
    const values = [categoria, nome, preco, descricao];
    return await conexao.query(comandoSQL, values)
  }
  async listasUsers() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL = "SELECT * FROM users";
    const usuarios = await conexao.query(comandoSQL);
    return usuarios.rows;
  }
  async atualizar(id, categoria, nome, preco, descricao) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL =
      "UPDATE users SET categoria=$2, nome=$3, preco=$4, descricao=$5 WHERE id=$1";
    const values = [id, categoria, nome, preco, descricao];
    return await conexao.query(comandoSQL, values);
  }

  async deletar(id) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL = "DELETE FROM users WHERE id=$1";
    const values = [id];
    return await conexao.query(comandoSQL, values);
  }
}


export default new UserModel();
