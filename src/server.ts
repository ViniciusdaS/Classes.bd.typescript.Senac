import express, {Application, Request, Response} from "express" /* import express  */

const app: Application = express(); /* receive express() */

app.get('/', (req: Request, res: Response): void => {
    res.send("<h1>Hello world!</h1>")
})

app.get('/nome', (req: Request, res, Response): void => {
    res.send("<h1>Hello Vinicius</h1>")
})

app.listen(3000, () => {
    console.log("Projeto rodando na porta 3000.")
})
