import { Router, application } from "express";
import { Users } from "../model/userModel";
import { UserController } from "../controller/userController";
import { Application } from "express";

const controller = new UserController; 
const router = Router(); 

router.post('/usuarios', controller.createUser); 
router.get('/usuarios', controller.Login); 

export default router;  