import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();
const PORT: number = 3000;

app.use(express.json());

const dataLog = (req:Request, res:Response, next:NextFunction) =>{
  let data: Date = new Date()
  console.log(`Requisção feita em: ${data}`)
  next()
}

app.use(dataLog); 

const porteiroMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`📢 Requisição recebida em: ${req.url}`);
  next(); // Permite a requisição continuar para a rota
};

//app.use(porteiroMiddleware);

// 🔹 Rota GET (Buscar dados)
app.get('/usuarios', (req: Request, res: Response) => {
  res.status(200).json({ mensagem: 'Lista de usuários' });
});

// 🔹 Rota POST (Criar novo usuário)
app.post('/usuarios', porteiroMiddleware, (req: Request, res: Response) => {
  const { nome } = req.body;
  if (!nome) {
  res.status(400).json({ mensagem: 'Nome é obrigatório!' });
  }
  res.status(201).json({ mensagem: `Usuário ${nome} criado com sucesso!` });
});

app.get('/sobre', (req:Request, res:Response) => {
  res.status(200).json({ nome: "Vinicius", idade: 18, descricao: "Aluno do TDS" })
})

app.post('/comentarios', (req: Request, res: Response) => {
  const { comentario } = req.body;
  if (!comentario) {
  res.status(400).json({ mensagem: 'Comente!' });
  }
  res.status(201).json({ mensagem: "Comentario recebido" });
});

app.delete('/comentarios/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(204).json({ mensagem: "Comentario deletado" })
  return; 
});

app.listen(PORT, () => console.log(`🔥 Servidor rodando em http://localhost:${PORT}`));

