import {Request, Response} from "express"
import { Produtos, produtos } from "../models/ProdutosModels"

//let id: number = 0

export const criarProduto = (req: Request, res: Response) => {
    const {id, nome, preco, quant} = req.body

    if(!id || !nome || !preco || !quant) {
        res.status(400).json({ "mensagem": "Preencha os campos!😡" })
    }

    //id += 1
    const novoProduto = new Produtos(id, nome, preco, quant)
    produtos.push(novoProduto);
    res.status(201).json({ mensagem: "Produto criado com sucesso!😁", produto: novoProduto });
    return 
}

export const listarProdutos = (req: Request, res: Response) => {
    res.status(200).json(produtos);
    return
};

export const buscarProdutoPorId = (req: Request, res: Response) => {

    const id = Number(req.params.id);
    const produto = produtos.find(u => u.id === id);
  
    if (!produto) {
      res.status(404).json({ mensagem: "Usuário não encontrado❌" });
      return;
    } 
    res.status(200).json(produto);
    return;
  };