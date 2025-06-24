import 'reflect-metadata';
import { DataSource } from 'typeorm'; 
import dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
    type: 'mysql', 
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    entities: ["src/model/*.ts"],
    synchronize: true, 
    logging: false,
})