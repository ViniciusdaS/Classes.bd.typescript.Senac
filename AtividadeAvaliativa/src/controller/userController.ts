import { Users } from "../model/userModel"; 
import { Request, Response } from "express"; 
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcryptjs"

const userRepository = AppDataSource.getRepository(Users); 

export class UserController {
    async createUser(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha) {
            res.status(400).json({"message": "Preencha os campos"}); 
        }

        const usuario = new Users(nome, email, senha); 
        const novoUsuario = userRepository.create(usuario); 
        await userRepository.save(novoUsuario);

        res.status(201).json({mensagem: 'Usuário criado com sucesso 👍'})
    }

    async Login(req: Request, res: Response) {
        const { nome, email, senha } = req.body; 

        if(!email || !senha) {
            res.status(400).json({ mensagem: 'Preencha os campos necessários.' })
        }

        const emailExistente = await userRepository.findBy({ email })

        if (!emailExistente) {
            res.status(400).json({ mensagem: "Usuário inexistente" })
        }

        const senhaValida = await bcrypt.compare(senha, emailExistente.senha);
        
        if(!senhaValida) {
            res.status(400).json({ mensagem: "Senha inválida ! Ralá robô 🤖" })
        }

        res.status(201).json({ mensagem: `Bem vindo ${nome}` })
    }

    async verUsuario(req: Request, res: Response) {
        const { nome, email, senha } = req.body; 

        const dados = nome && email && senha; 

        if(!nome || !email || !senha) {
            res.status(201).json(dados)
        }
    }
}

