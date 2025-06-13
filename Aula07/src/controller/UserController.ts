import { User } from "../models/User";
import { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import bcrypt from 'bcryptjs'; 
import { isDataView } from "util/types";

const userRepository = AppDataSource.getRepository(User)

export class UserController {
    
    async createUser(req:Request, res: Response) {
        const { email, password } = req.body; 

        if(!email || !password) {
            res.status(400).json({ "message": "Preencha os campos 😡" })
            return; 
        }

    const existEmail = await userRepository.findOneBy({ email })

    if(existEmail) {
        res.status(409).json({ message: "Este email já existe 😡" })
        return;
    }

    const user = new User(email, password);
    const newUser = userRepository.create(user);
    await userRepository.save(newUser); 

    res.status(201).json({ message: "Usuario criado com sucesso", usuario: newUser })
    return;
    }

    async Login(req: Request, res:Response) {
        const { email, password } = req.body; 

        if(!email || !password) {
            res.status(400).json({ message: "Preencha os campoooosss 😡" })
            return; 
        }

        const existEmail = await userRepository.findOneBy({ email })

        if(!existEmail) {
            res.status(404).json({ message: "Email invalido 😡" })
            return; 
        }

        const isValid = await bcrypt.compare(password, existEmail.password)

        if (!isValid) {
            res.status(401).json({ message: "Senha invalida 👀" })
            return; 
        }

        res.status(200).json({ message: "Login realizado com sucesso 😉" })
    }
}