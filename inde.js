import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const porta = 3000;

app.use(express.json()); // Middleware para interpretar JSON no corpo das requisições

const grades = [];

// Rota GET para listar todas as grades
app.get('/grades', (req, res) => {
  res.status(200).json(grades);
});

// Rota POST para adicionar uma nova grade
app.post('/grades', (req, res) => {
  const { studantName, subject, grade } = req.body;

  if (!studantName || !subject || grade === undefined) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newGrade = { id: uuidv4(), studantName, subject, grade };
  grades.push(newGrade);

  res.status(201).json(newGrade);
});

// Rota PUT para atualizar uma grade existente
app.put('/grades/:id', (req, res) => {
  const { id } = req.params;
  const { studantName, subject, grade } = req.body;

  const gradeToUpdate = grades.find((g) => g.id === id);

  if (!gradeToUpdate) {
    return res.status(404).json({ message: 'Grade not found' });
  }

  gradeToUpdate.studantName = studantName || gradeToUpdate.studantName;
  gradeToUpdate.subject = subject || gradeToUpdate.subject;
  gradeToUpdate.grade = grade !== undefined ? grade : gradeToUpdate.grade;

  res.status(200).json(gradeToUpdate);
});

// Rota DELETE para remover uma grade
app.delete('/grades/:id', (req, res) => {
  const { id } = req.params;

  const index = grades.findIndex((g) => g.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Grade not found' });
  }

  grades.splice(index, 1);

  res.status(204).send();
});

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Iniciando o servidor
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});