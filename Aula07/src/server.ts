import { AppDataSource } from "./database/data-source";
import userRoutes from "./routes/UserRoutes"; 
import express, { Application } from "express";
import cors from "cors"


const app: Application = express(); 

app.use(express.json()) //API REST
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: [
    'http://localhost:5500',
    'http://127.0.0.1:5500',
    'http://localhost:3000'
    ]
})) //DNS error

app.use('/api', userRoutes)

AppDataSource.initialize()
.then(() => {
    app.listen(3000, () => {
        console.log('Server rodando em http://loalhost:3000')
    })
}) .catch((error) => {
    console.error('Erro ao inicializar o banco de dados', error)
})


