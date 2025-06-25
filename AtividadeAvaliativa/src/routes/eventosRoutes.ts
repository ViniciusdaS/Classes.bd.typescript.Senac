import { Router } from "express";
import { EventosController } from "../controller/eventosController";

const controller = new EventosController; 
const router = Router(); 

router.post('/eventos', controller.criarEvento); 
router.get('/eventos', controller.listarEvento);

export default router;  