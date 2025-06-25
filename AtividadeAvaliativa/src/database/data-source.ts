import 'reflect-metadata';
import { DataSource } from 'typeorm'; 
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql', 
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_SENHA,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    entities: ["src/model/*.ts"],
    synchronize: true, 
    logging: false,
})