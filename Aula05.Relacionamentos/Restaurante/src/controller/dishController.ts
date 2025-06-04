import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Dish } from "../models/Dish";

const dishRepository = AppDataSource.getRepository(Dish);

export class DishController {
    async list(req: Request, res: Response) {
        const dish = await dishRepository.find();
        res.json(dish);
        return;
    }

    async createDish(req: Request, res: Response) {
        const { name, price, description, available } = req.body

        const dish = dishRepository.create({ name, price, description, available })
        await dishRepository.save(dish);

        res.status(201).json(dish);
        return;
    }

    async findById(req:Request, res: Response) {
        const { id } = req.params;

        const dish = dishRepository.findOneBy({ id: Number(id)});

        if(!dish) {
            res.status(404).json({ "mensagem": "Dish don't find 👨‍🚀" });
            return;
        }

        res.json(dish);
        return;
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const dish = await dishRepository.findOneBy({ id: Number(id) });

        if (!dish) {
            res.status(404).json({ message: 'Dish dont find 👨‍🚀' });
            return;
        }

        await dishRepository.remove(dish);

        res.status(204).send();
        return;
    }
}