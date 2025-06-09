import { Router } from "express"
import { DishController } from "../controller/dishController"

const router: Router = Router()
const controller = new DishController()

router.post('/dish', controller.createDish)
router.get('/dish', controller.listDishes)
router.get('/dish/:id', controller.listDishById)

export default router;