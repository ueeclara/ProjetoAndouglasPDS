import pg from "pg";

async function conectar() {
  const pool = new pg.Pool({
    //criando o nosso mando de dados
    connectionString:
      "postgres://aluno_20201214010022:7063@177.136.200.206:5439/temp?schema=aluno_20201214010022",
  });
  const conexaoBancoDeDados = await pool.connect();
  console.log("Banco de dados conectado!");

  return conexaoBancoDeDados;
}

export default { conectar };
