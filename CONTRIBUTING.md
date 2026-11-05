# Como contribuir

## Padrão de commits (Conventional Commits)

```
<tipo>(escopo opcional): descrição no imperativo
```

| Tipo | Uso |
|---|---|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `test` | Testes |
| `refactor` | Refatoração sem mudar comportamento |
| `chore` | Configuração, build, dependências |

Exemplos: `feat(alunos): adiciona cadastro de aluno`, `fix(alunos): valida email vazio`.

## Nome de branches

- `feature/<descricao>` — novas funcionalidades (base: `develop`)
- `bugfix/<descricao>` — correções em desenvolvimento (base: `develop`)
- `hotfix/<descricao>` — correções urgentes em produção (base: `main`)
- `release/<versao>` — preparação de versão (base: `develop`)
