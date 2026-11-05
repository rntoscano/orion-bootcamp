const { criarCadastro } = require("./alunos/cadastro");

const cadastro = criarCadastro();
cadastro.adicionar({ nome: "Ana Souza", email: "ana@orion.dev", trilha: "frontend" });
cadastro.adicionar({ nome: "Bruno Lima", email: "bruno@orion.dev" });

console.log("Orion Bootcamp - alunos cadastrados:");
console.table(cadastro.listar());
