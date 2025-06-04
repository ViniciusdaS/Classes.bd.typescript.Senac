import { Router } from "express"
import { DishController } from "../controller/dishController"

const router: Router = Router()
const dishControll = new DishController();

router.get('/dish', dishControll.list)
router.get('/dish/:name', dishControll.findById)
router.post('/dish', dishControll.createDish)
router.delete('/dish/:id', dishControll.delete)

export default router;