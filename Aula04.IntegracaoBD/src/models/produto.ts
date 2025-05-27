import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity('product') // nome da tabela
export class Produto {

    constructor(name: string, price: number, description: string, password: string) {this.name = name, this.price = price, this.description = description, this.password = password}

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 100, nullable: false })
    name: string;

    @Column({ unique: false, nullable: false })
    price: number;

    @Column({ type: "varchar", length: 1000 })
    description: string;

    @Column({ type: "varchar", length: 255 })
    password: string;
}
