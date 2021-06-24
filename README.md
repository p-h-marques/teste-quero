# Quero Bolsa - Processo Seletivo

Olá! Aqui é o Pedro, e esse repositório contém o desenvolvimento da tela de visualização, busca & seleção de cursos proposta pelo processo. Além do próprio React, utilizei algumas paradas bem legais:

- **styled components** para deixar os estilos mais organizados;
- **react hooks** como o useState, useEffect e useCallback;
- **context API** para tratar as informações de cursos, filtros e exibições
- **eslint & prettier** para manter o padrão de código consistente;
- **testes funcionais com cypress** para certificar que todos os casos de uso estão perfeitos.

Se quiser visualizar o projeto em produção, ele está acessível [nesse link!](https://querobolsa-fc7b9.web.app/)

## Rodando o projeto

Pra poder clonar e rodar o projeto direitinho, é só mandar aqueles comandos padrão de sempre:

```bash
npm i && npm start
```

Caso você tenha problemas com as quebras de linha do Windows, o comando abaixo corrige automaticamente os arquivos usando o Eslint:

```bash
npm run lint
```

E claro, pra executar os testes no Cypress, você pode usar esse comando:

```bash
npm run test
```

## Features

Entre features propostas de forma obrigatória & opcional pela especificação, o seguinte foi viabilizado:

- estilização CSS com Flexbox & Grid, sem o uso de nenhum framework;
- projeto responsivo e 99% próximo ao layout disponibilizado (algumas medidas precisaram ser implementadas "no olho", mas sempre preservando o conceito das telas);
- hospedagem do app utilizando o Google Firebase;
- filtros de semestres na página principal estão funcionais
- filtros de cursos & range de valores são preenchidos pelas possibilidades enviadas pela API Fake;
- as ordenações por Nome da Faculdade foram respeitadas;
- os cursos selecionados persistem no Local Storage do usuário, persistindo durante os recarregamentos;
- o Cypress foi utilizado para viabilizar os testes funcionais da aplicação, verificando os principais casos de uso.