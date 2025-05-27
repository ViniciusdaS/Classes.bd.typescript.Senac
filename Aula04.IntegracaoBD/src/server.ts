import express, { Application } from 'express'
import userRoutes from "./routes/user-routes"
import produtoControll from "./routes/produtosRoutes"
import { AppDataSource } from './database/data-source';

const app: Application = express();
app.use(express.json()) //Define uma API REST

AppDataSource.initialize()
    .then(() => {

        app.use('/api', userRoutes);
        app.use('/api', produtoControll)

        app.listen(3000, () => console.log('Server rodando na porta 3000 🚪'));
    })
    .catch((error) => console.log(error));