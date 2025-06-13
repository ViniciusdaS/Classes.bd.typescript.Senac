import { UserController } from "../controller/UserController";
import { Router } from "express";

const controller = new UserController();
const router = Router(); 

router.post('/users', controller.createUser);
router.post('/users/login', controller.Login);

export default router; 
