const test = require("node:test");
const assert = require("node:assert");
const { criarCadastro } = require("../src/alunos/cadastro");

test("cadastra e lista alunos", () => {
  const cadastro = criarCadastro();
  cadastro.adicionar({ nome: "Ana", email: "Ana@Orion.dev" });
  assert.deepStrictEqual(cadastro.listar(), [
    { nome: "Ana", email: "ana@orion.dev", trilha: "fullstack" },
  ]);
});

test("rejeita email inválido", () => {
  const cadastro = criarCadastro();
  assert.throws(() => cadastro.adicionar({ nome: "Ana", email: "ana" }), /Email inválido/);
});

test("rejeita aluno duplicado", () => {
  const cadastro = criarCadastro();
  cadastro.adicionar({ nome: "Ana", email: "ana@orion.dev" });
  assert.throws(() => cadastro.adicionar({ nome: "Ana", email: "ana@orion.dev" }), /já cadastrado/);
});

test("filtra alunos por trilha", () => {
  const cadastro = criarCadastro();
  cadastro.adicionar({ nome: "Ana", email: "ana@orion.dev", trilha: "backend" });
  cadastro.adicionar({ nome: "Bruno", email: "bruno@orion.dev" });
  assert.strictEqual(cadastro.buscarPorTrilha("backend").length, 1);
});
