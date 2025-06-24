import express, { Application } from "express"; 
import { AppDataSource } from "../database/data-source";
import { UserController } from "../controller/userController";

const app: Application = express(); 

app.use(express.json()); 

app.use('/api', UserController); 

AppDataSource.initialize().then(() => {
    app.listen(5000), () => {
        console.log('Servidor está rodando')
    }
}).catch((error) => {
    console.log(error); 
})