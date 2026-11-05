const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function criarAluno({ nome, email, trilha }) {
  if (!nome || !nome.trim()) {
    throw new Error("Nome é obrigatório");
  }
  if (!EMAIL_REGEX.test(email || "")) {
    throw new Error("Email inválido");
  }

  return {
    nome: nome.trim(),
    email: email.toLowerCase(),
    trilha: trilha || "fullstack",
  };
}

module.exports = { criarAluno };
