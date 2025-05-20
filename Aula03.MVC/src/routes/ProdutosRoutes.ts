import { Router } from "express";
import { criarProduto, listarProdutos, buscarProdutoPorId } from "../controllers/ProdutosController"

const router = Router(); 

router.post("/produtos", criarProduto)
router.get("/produtos", listarProdutos)
router.get("/produtos/:id", buscarProdutoPorId)

export default router