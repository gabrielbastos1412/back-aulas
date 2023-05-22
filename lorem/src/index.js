import http from "http";
import fs from "fs";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3333;

const readFile = async(file)=>{
    try{
        return await fs.promises.readFile(file,'utf8');
    }
    catch(e){
        return e;
    }
}

const server = http.createServer( async (req, res) =>{
    if(req.url === '/'){
        const html = await readFile('src/page.html');
        if(html){
            res.writeHead(200,{
                'Content-Type': 'text/html'
            });
            res.end(html);
        }
        else{
            res.writeHead(404,{
                'Content-Type': 'text/plain'
            });
            res.end('html not found!');
        }
    }

    if(req.url === '/styles.css'){
        const css = await readFile('src/styles.css');
        if(css){
            res.writeHead(200,{
                'Content-Type': 'text/css'
            });
            res.end(css);
        }
        else{
            res.writeHead(404,{
                'Content-Type': 'text/plain'
            });
            res.end('css not found!');
        }
    }

    if(req.url === '/main.js'){
        const js = await readFile('src/main.js');
        if(js){
            res.writeHead(200,{
                'Content-Type': 'text/javascript'
            });
            res.end(js);
        }
        else{
            res.writeHead(404,{
                'Content-Type': 'text/plain'
            });
            res.end('js not found!');
        }
    }
})

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})