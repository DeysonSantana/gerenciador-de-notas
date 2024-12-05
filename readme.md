# API de Notas - README

## Descrição

Este projeto é uma API simples criada em Node.js para gerenciar notas de estudantes. Ele implementa um servidor HTTP que oferece funcionalidades básicas de CRUD (Criar, Ler, Atualizar e Deletar) para manipulação de notas de alunos. A aplicação usa o módulo `http` do Node.js para criar o servidor e o pacote `uuid` para gerar identificadores únicos para cada nota.

## Funcionalidades

- **GET /grades**: Retorna a lista de todas as notas.
- **POST /grades**: Cria uma nova nota.
- **PUT /grades/{id}**: Atualiza os detalhes de uma nota existente, identificada por seu `id`.
- **DELETE /grades/{id}**: Deleta uma nota existente, identificada por seu `id`.

## Estrutura do Projeto

O código consiste em um servidor HTTP que lida com diferentes métodos HTTP (GET, POST, PUT, DELETE) e realiza as operações sobre as notas dos estudantes. O servidor armazena as notas na memória (sem persistência de dados em banco).

### Estrutura de Diretórios

```bash
├── server.js        # Arquivo principal que contém a lógica do servidor
├── package.json     # Gerenciador de dependências e scripts
├── package-lock.json # Arquivo de dependências do projeto
