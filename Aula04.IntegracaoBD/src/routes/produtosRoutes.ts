import { Router } from "express";
import { ProdutoController } from "../controllers/productController";

const router: Router = Router(); 
const produtoControll = new ProdutoController()

//Rotas produto
router.get('/produtos', produtoControll.list);
router.get('/produtos/:name', produtoControll.findByName);
router.get('/produtos/name/:name', produtoControll.findById);
router.post('/produtos', produtoControll.create);
router.put('/produtos/:id', produtoControll.update);
router.delete('/produtos/:id', produtoControll.delete);

export default router;