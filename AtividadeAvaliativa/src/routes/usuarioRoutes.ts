import { Router } from "express";
import { UserController } from "../controller/usuarioController";

const controller = new UserController; 
const router = Router(); 

router.post('/usuarios', controller.criarUsuario); 
router.get('/usuarios', controller.listarUsuario);

export default router;  