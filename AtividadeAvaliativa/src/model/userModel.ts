import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import bcrypt from 'bcryptjs';

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn() 
    id!: Number;

    @Column({ unique: false, nullable: false })
    nome: string; 

    @Column({unique: true, nullable: false})
    email: string

    @Column({ nullable: false })
    senha: string;


    constructor(nome: string, senha: string, email: string) {this.nome = nome, this.senha = senha, this.email = email}
}
