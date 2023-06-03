import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import { logger } from "./logger";
import router from "./router/router";
import { engine } from 'express-handlebars';

dotenv.config();
console.log(process.env.PORT)
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;

app.engine("handlebars", engine({
    helpers: require(`${process.cwd()}/src/views/helpers/helpers.ts`)
   }));
app.set("view engine", "handlebars");
app.set("views", `${process.cwd()}/src/views`);

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', express.static(`${publicPath}/js`));
//app.use(morgan('short'));
app.use(logger('completo'));


app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});