import express, { Application } from "express"
import usuarioRoutes from "./routes/UsuarioRoutes"
import produtosRoutes from "./routes/ProdutosRoutes"

const app: Application = express()

app.use(express.json())

// Rotas de aplicação

app.use('/api', usuarioRoutes)
app.use('/api', produtosRoutes)

app.listen(3000, () => {
    console.log(`🚀 Servidor rodando em http://localhost:3000`)
})