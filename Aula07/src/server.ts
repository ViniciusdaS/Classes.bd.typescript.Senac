import { AppDataSource } from "./database/data-source";
import userRoutes from "./routes/UserRoutes"; 
import express, { Application, Request, Response } from "express";
import cors from "cors"
import path from "path";


const app: Application = express(); 

app.use(express.json()) //API REST
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3000',
    'http://127.0.0.1:3000'
    ]
})) //DNS error

app.use(express.static('public'))

app.get('/', (req:Request, res:Response) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
    return; 
});

app.use('/api', userRoutes)

AppDataSource.initialize()
.then(() => {
    app.listen(3000, () => {
        console.log('Server rodando em http://loalhost:3000')
    })
}) .catch((error) => {
    console.error('Erro ao inicializar o banco de dados', error)
})


