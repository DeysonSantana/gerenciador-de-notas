import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const porta = 3000;

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

const grades = [];


// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Iniciando o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});