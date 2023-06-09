import { Request, Response } from 'express';

const publicPath = `${process.cwd()}/public`;

const index = (req: Request, res: Response) => {
 res.end('Welcome to Web academy!');
};
const hb1 = (req:Request, res:Response) => {
    res.render('hb1', {
        mensagem: 'Universidade federal do amazonas',
    });
};
const hb2 = (req: Request, res: Response) => {
 res.render('hb2', {
    name: 'React',
    type: 'library',
    poweredByNodejs: true,
 });
};

const hb3 = (req: Request, res: Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 }
        ];
        res.render('hb3', { profes, layout: "hb3" });
}

const hb4 = (req:Request,res:Response) => {
    const profes = [
        { nome: 'David Fernandes', sala: 1238 },
        { nome: 'Horácio Fernandes', sala: 1233 },
        { nome: 'Edleno Moura', sala: 1236 },
        { nome: 'Elaine Harada', sala: 1231 },
        ];
        res.render('hb4', { profes });
}

const hb5 = (req:Request,res:Response) => {
    const technologies = [
        { name: 'Express', type: 'Framework', poweredByNodejs: true },
        { name: 'Laravel', type: 'Framework', poweredByNodejs: false },
        { name: 'React', type: 'Library', poweredByNodejs: true },
        { name: 'Handlebars', type: 'Engine View', poweredByNodejs: true },
        { name: 'Django', type: 'Framework', poweredByNodejs: false },
        { name: 'Docker', type: 'Virtualization', poweredByNodejs: false },
        { name: 'Sequelize', type: 'ORM tool', poweredByNodejs: true },
    ];
    res.render('hb5', { technologies });
}

const lorem = (req:Request,res:Response) =>{
    res.sendFile(`${publicPath}/html/index.html`);
}
const sobre = (req:Request,res:Response) => {
    res.send('Página sobre');
}

export default { index, hb5, hb4, hb3, hb2, hb1, lorem, sobre};