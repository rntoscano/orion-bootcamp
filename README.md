# Orion Bootcamp

Projeto **fictício** de gerenciamento de alunos, criado para demonstrar o fluxo **Gitflow**.

## Branches

| Branch | Ambiente | Regra |
|---|---|---|
| `main` | Produção | Só recebe merge de `develop` (release) ou `hotfix/*`. |
| `develop` | Desenvolvimento | Integra as features prontas. |
| `feature/*` | — | Uma por funcionalidade, criada a partir de `develop`, volta via Pull Request. |

## Fluxo

```bash
git checkout develop && git pull
git checkout -b feature/nome-da-feature
# ...commits seguindo Conventional Commits...
git push -u origin feature/nome-da-feature
# abrir Pull Request: feature/nome-da-feature -> develop
```

Quando `develop` estiver estável, abre-se um Pull Request `develop -> main` para a release.

## Como rodar

```bash
npm start
npm test
```
