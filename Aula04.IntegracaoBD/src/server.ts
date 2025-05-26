import express, { Application } from 'express'
import userRoutes from "./routes/user-routes"
import { AppDataSource } from './database/data-source';

const app: Application = express();
app.use(express.json()) //Define uma API REST

AppDataSource.initialize()
    .then(() => {

        app.use('/api', userRoutes);

        app.listen(3000, () => console.log('Server rodando na porta 3000 🚪'));
    })
    .catch((error) => console.log(error));