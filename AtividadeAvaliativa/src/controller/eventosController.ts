import { Eventos } from "../model/eventosModel"; 
import { Request, Response } from "express"; 
import { AppDataSource } from "../database/data-source";

const eventosRepository = AppDataSource.getRepository(Eventos); 

export class EventosController {
    async criarEvento(req: Request, res: Response) {
        const { nome, local, data } = req.body;

        if(!nome || !local || !data) {
            res.status(400).json({"message": "Preencha os campos!"}); 
        }

        const evento = new Eventos(nome, local, data); 
        const novoEvento = eventosRepository.create(evento); 
        await eventosRepository.save(novoEvento);

        res.status(201).json({mensagem: 'Evento criado com sucesso!'})
    }

    async listarEvento(req: Request, res: Response) {
        const { nome, email, senha } = req.body; 

        const dados = nome && email && senha; 

        if(!nome || !email || !senha) {
            res.status(201).json(dados)
        }
    }
}

