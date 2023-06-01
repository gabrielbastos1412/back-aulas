import { Router } from 'express';

const router = Router();
const publicPath = `${process.cwd()}/public`;

router.get('/lorem', (req, res) => {
  res.sendFile(`${publicPath}/html/index.html`);
});

router.get('/', (req, res) => {
  res.send('Hello world!');
});

router.get('/sobre', (req, res) => {
  res.send('Página sobre');
});

router.get('/hb1', (req, res) => {
    res.render('hb1', {
    mensagem: 'Olá, você está aprendendo Express + HBS!',
    layout: false,
    });
});
router.get('/hb2', (req, res) => {
    res.render('hb2', {
    poweredByNodejs: true,
    name: 'Express',
    type: 'Framework',
    layout: false,
    });
});
router.get('/hb3', (req, res) => {
    const profes = [
    { nome: 'David Fernandes', sala: 1238 },
    { nome: 'Horácio Fernandes', sala: 1233 },
    { nome: 'Edleno Moura', sala: 1236 },
    { nome: 'Elaine Harada', sala: 1231 }
    ];
    res.render('hb3', { profes, layout: false });
   });
export default router;