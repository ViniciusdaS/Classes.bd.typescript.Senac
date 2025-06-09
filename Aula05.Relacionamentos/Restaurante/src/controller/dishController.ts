import { Request, Response } from "express";
import { Dish } from "../models/Dish";
import { AppDataSource } from "../config/data-source";

const dishRepository = AppDataSource.getRepository(Dish)

interface DishDto {
  name?: string
  description?: string
  price?: number
  available?: boolean
}

export class DishController {

  async createDish(req: Request, res: Response) {
    const body: DishDto = req.body;

    const name = body.name
    const description = body.description
    const price = body.price
    const available = body.available

    if(!name || !description || !price || !available) {
      res.status(400).json({ message: "Todos os campos são obrigatórios! 😡" })
      return
    }

    const objDish = new Dish(name, description, price, available)
    const dish = await dishRepository.create(objDish)
    const newDish = await dishRepository.save(dish);

    res.status(201).json({ message: "Created dish", dish: newDish });
    return;

  }

  async listDishes(req: Request, res: Response) {  
    const dishes = await dishRepository.find()
    res.status(200).json(dishes)
    return
  }

  async listDishById(req: Request, res: Response) {
    const id = parseInt(req.params.id)

    if(!id) {
      res.status(400).json({ message: "Id é necessário! 😡" });
      return
    }

    const dish = await dishRepository.findOneBy({ id })

    if(!dish) {
      res.status(404).json({ message: "Prato não encontrado!" })
      return
    }

    res.status(200).json(dish)
    return

  }
}