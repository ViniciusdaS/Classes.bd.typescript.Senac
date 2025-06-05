import { AppDataSource } from "./config/data-source";
import express, { Application } from 'express'
import dishControll from './routes/Dish.routes'

const app: Application = express(); 

app.use(express.json()); 

app.use('/api', dishControll)

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        console.log('🚀 Servidor rodando em http://localhost:3000')
    })
}).catch((error) => {
    console.log(error)
})
