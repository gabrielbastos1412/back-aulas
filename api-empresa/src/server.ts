import express from "express";
import { funcionariosRouter } from "./routes/funcionarios.routes";

const routes = [
    funcionariosRouter
]
export class Api{
public server: express.Application;
constructor(){
 this.server = express();
 this.middleware();
 this.router();
 }
 private middleware(){
 this.server.use(express.json());
 }
private router(){
 this.server.use(routes);
 }
}