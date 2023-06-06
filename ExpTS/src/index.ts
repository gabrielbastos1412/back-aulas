import express from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import { logger } from "./logger";
import router from "./router/router";
import { engine } from 'express-handlebars';
import sass from "node-sass-middleware";

dotenv.config();
console.log(process.env.PORT)
validateEnv();


const app = express();
const PORT = process.env.PORT || 3333;
const publicPath = `${process.cwd()}/public`;


app.use(
  sass({
      src: `${publicPath}/scss`,
      dest: `${publicPath}/css`,
      outputStyle: "compressed",
      prefix: "/css",
  })
);

app.engine("handlebars", engine({
    layoutsDir: `${__dirname}/views/layouts`,
    defaultLayout: "main"
   }));
app.set("view engine", "handlebars");
app.set("views", `${process.cwd()}/src/views`);

app.engine(
  "handlebars",
  engine({
      helpers: require(`${__dirname}/views/helpers/helpers.ts`),
  })
);
app.use(
  '/webfonts',
  express.static(
    `${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`
  )
)

app.use('/css', express.static(`${publicPath}/css`));
app.use('/js', [
  express.static(`${publicPath}/js`),
  express.static(`${__dirname}/../node_modules/bootstrap/dist/js/`)
]);
//app.use(morgan('short'));
app.use(logger('completo'));


app.use(router);

app.listen(PORT, () => {
  console.log(`Express app iniciada na porta ${PORT}.`);
});