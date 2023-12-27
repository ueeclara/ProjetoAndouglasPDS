import pg from "pg";

async function conectar() {
  const pool = new pg.Pool({
    connectionString:
      "postgres://aluno_20201214010022:706384@177.136.201.182:5439/temp?schema=aluno_20201214010022",
  });

  const conexao = await pool.connect();
  console.log("Banco de Dados conectado");

  return conexao;
}

export default { conectar };
