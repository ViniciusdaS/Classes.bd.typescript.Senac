import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class Users {

    @PrimaryGeneratedColumn() 
    public id!: Number;

    @Column({ unique: false, nullable: false })
    public nome: string; 

    @Column({unique: true, nullable: false})
    public email: string

    @Column({ nullable: false })
    public senha: string;


    constructor(nome: string, senha: string, email: string) {this.nome = nome, this.senha = senha, this.email = email}
}
