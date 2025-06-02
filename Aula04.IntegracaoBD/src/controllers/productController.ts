import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { Produto } from '../models/produto';

const produtoRepository = AppDataSource.getRepository(Produto);

export class ProdutoController {
    // Listar todos os produtos
    async list(req: Request, res: Response) {
        const produto = await produtoRepository.find();
        res.json(produto);
        return;
    }

    // Criar novo produto
    async create(req: Request, res: Response) {
        const { name, price, description } = req.body;

        const produto = produtoRepository.create({ name, price, description });
        await produtoRepository.save(produto);

        res.status(201).json(produto);
        return;
    }

    async findById(req: Request, res: Response) {
        const { id }  = req.params;

        const produto = await produtoRepository.findOneBy({ id: Number(id) });

        if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado 🔎' });
            return;
        }

        res.json(produto);
        return; 
    }

    // Buscar produto por nome
    async findByName(req: Request, res: Response) {
        const { name }  = req.params;

        const produto = await produtoRepository.findOneBy({ name:name });

        if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado 🔎' });
            return;
        }

        res.json(produto);
        return; 
    }

    // Atualizar usuário
    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, description } = req.body;

        const produto = await produtoRepository.findOneBy({ id: Number(id) });

        if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado' });
            return; 
        }

        produto.name = name;
        produto.price = price;
        produto.description = description;

        await produtoRepository.save(produto);

        res.json(produto);
        return;
    }

    // Deletar usuário
    async delete(req: Request, res: Response) {
        const { id } = req.params;

        const produto = await produtoRepository.findOneBy({ id: Number(id) });

        if (!produto) {
            res.status(404).json({ message: 'Produto não encontrado 🔎' });
            return;
        }

        await produtoRepository.remove(produto);

        res.status(204).send();
        return;
    }
}