import userRoutes from "./routes/UserRoutes"; 
import express, { Application } from "express";

const app: Application = express(); 

app.use(express.json()) //API REST

app.use(express.urlencoded({ extended: true }));