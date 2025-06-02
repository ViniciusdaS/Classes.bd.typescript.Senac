import { Entity, PrimaryGeneratedColumn, Column, Double } from 'typeorm';

@Entity('product') // nome da tabela
export class Produto {

    constructor(name: string, price: number, description: string) {this.name = name, this.price = price, this.description = description}

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "varchar", length: 50, nullable: false })
    name: string;

    @Column({  type: "decimal", precision: 6, scale: 2, nullable: false })
    price: number;

    @Column({ type: "text" })
    description: string;

}
