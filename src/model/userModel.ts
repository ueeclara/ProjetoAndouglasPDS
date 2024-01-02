import conexaoBancoDeDados from '../database/dbconnect';

class UserModel {
  async salvar(categoria: string, nome: string, preço: number, descrição: string) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL =
      'INSERT INTO users(categoria, nome, preço, descrição) VALUES ($1,$2,$3,$4)';
    const values = [categoria, nome, preço, descrição];
    return await conexao.query(comandoSQL, values);
  }

  async listasUsers() {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL = 'SELECT * FROM users';
    const usuarios = await conexao.query(comandoSQL);
    return usuarios.rows;
  }

  async atualizar(id: string, categoria: string, nome: string, preço: number, descrição: string) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL =
      'UPDATE users SET categoria=$2, nome=$3, preco=$4, descricao=$5 WHERE id=$1';
    const values = [id, categoria, nome, preço, descrição];
    return await conexao.query(comandoSQL, values);
  }  
  
  async deletar(id: string) {
    const conexao = await conexaoBancoDeDados.conectar();
    const comandoSQL = 'DELETE FROM users WHERE id=$1';
    const values = [id];
    return await conexao.query(comandoSQL, values);
  }
}

export default new UserModel();
