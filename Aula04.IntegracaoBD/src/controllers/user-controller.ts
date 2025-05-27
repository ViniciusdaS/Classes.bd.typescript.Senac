import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { User } from '../models/user';

const userRepository = AppDataSource.getRepository(User);

export class UserController {
    // Listar todos os usuários
    async list(req: Request, res: Response) {
        const users = await userRepository.find({ select: {
            name: true,
            email: true,
            password: false
        } });

        res.json(users)
        return;
    }

    // Criar novo usuário
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body;

        const user = userRepository.create({ name, email, password });
        await userRepository.save(user);

        res.status(201).json(user);
        return;
    }

    // Buscar usuário por ID
    async show(req: Request, res: Response) {
        const { id } = req.params;

        const user = await userRepository.findOneBy({ id: Number(id) });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado 🔎' });
            return;
        }

        res.json({ "name": user.name, "email": user.email });
        return; 
    }

    // Atualizar usuário
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        const user = await userRepository.findOneBy({ id: Number(id) });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
            return; 
        }

        user.name = name;
        user.email = email;
        user.password = password;

        await userRepository.save(user);

        res.json(user);
        return;
    }

    // Deletar usuário
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const user = await userRepository.findOneBy({ id: Number(id) });

        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado 🔎' });
            return;
        }

        await userRepository.remove(user);

        res.status(204).send();
        return;
    }
}