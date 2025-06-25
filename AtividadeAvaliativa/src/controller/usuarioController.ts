import { Usuarios } from "../model/usuarioModel"; 
import { Request, Response } from "express"; 
import { AppDataSource } from "../database/data-source";
import bcrypt from "bcryptjs"
import { Repository } from "typeorm";

const userRepository = AppDataSource.getRepository(Usuarios); 

export class UserController {
    async criarUsuario(req: Request, res: Response) {
        const { nome, email, senha } = req.body;

        if(!nome || !email || !senha) {
            res.status(400).json({"message": "Preencha os campos"}); 
        }

        const usuario = new Usuarios(nome, email, senha); 
        const novoUsuario = userRepository.create(usuario); 
        await userRepository.save(novoUsuario);

        res.status(201).json({mensagem: 'Usuário criado com sucesso!'})
    }

    async listarUsuario(req: Request, res: Response) {
        const { nome, email, senha } = req.body; 

        const dados = nome && email && senha; 

        if(!nome || !email || !senha) {
            res.status(201).json(dados)
        }
    }

    // Atualizar um usuário
    async atualizarUsuario(req: Request, res: Response) {

    const id = Number(req.params.id);
    const { nome, email } = req.body;

    if(!id){
        res.status(400).json({ mensagem: "O id é necessário!"})
        return
    }

    if(!nome && !email) {
        res.status(400).json({mensagem: "Preencha os campos!"})
        return
    }

     const usuario = await userRepository.findOneBy({ id: Number(id) });

    if (!usuario) {
        res.status(404).json({ mensagem: "Usuário não encontrado" });
        return
    }

        usuario.nome = nome || usuario.nome;
        usuario.email = email || usuario.email;

        res.status(200).json({ mensagem: "Usuário atualizado com sucesso!", usuario });
};


    async deletarUsuario(req: Request, res: Response) {
        const { id } = req.params;

        const usuario = await userRepository.findOneBy({ id: Number(id) });

        if (!usuario) {
            res.status(404).json({ message: 'Usuário não encontrado!' });
            return;
        }

        await userRepository.remove(usuario);

        res.status(204).send();
        return;
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
            res.status(400).json({ mensagem: "Senha inválida!" })
        }

        res.status(201).json({ mensagem: `Bem vindo ${nome}` })
    }
}

