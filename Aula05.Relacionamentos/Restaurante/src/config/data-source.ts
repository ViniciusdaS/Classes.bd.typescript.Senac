import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: ["src/models/*.ts"],
    synchronize: false,
    logging: false,
});