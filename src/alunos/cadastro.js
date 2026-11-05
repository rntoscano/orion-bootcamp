const { criarAluno } = require("./aluno");

function criarCadastro() {
  const alunos = [];

  return {
    adicionar(dados) {
      const aluno = criarAluno(dados);
      if (alunos.some((a) => a.email === aluno.email)) {
        throw new Error("Aluno já cadastrado");
      }
      alunos.push(aluno);
      return aluno;
    },
    listar() {
      return [...alunos];
    },
    buscarPorTrilha(trilha) {
      return alunos.filter((a) => a.trilha === trilha);
    },
  };
}

module.exports = { criarCadastro };
