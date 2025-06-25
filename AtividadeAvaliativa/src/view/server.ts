import express, { Application } from "express"; 
import { AppDataSource } from "../database/data-source";
import routes from '../routes/usuarioRoutes'
import { Request, Response } from 'express'
import cors from 'cors';
import path from 'path'; 

const app: Application = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(cors({
    origin: [
    'http://localhost:5000',
    'http://127.0.0.1:5000'
    ]
}));

app.use(express.static('public'))

app.get('/', (req: Request, res: Response) => {
    res.status(200).sendFile(path.join(__dirname, '../view/public/telaCadastro/index.html'))
    return; 
})

app.use('/api', routes); 

AppDataSource.initialize().then(() => {
    app.listen(5000), () => {
        console.log('Servidor está rodando')
    }
}).catch((error) => {
    console.log(error); 
})

