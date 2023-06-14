import { Sequelize } from "sequelize-typescript";
import { Funcionarios } from "../models/funcionarios";
const connection = new Sequelize({
 dialect: "mysql",
 host: "localhost",
 username: "root",
 password: "1234",
 database: "mydb",
 logging: false,
 models: [Funcionarios],
});
export default connection;