import { Router } from 'express';
import mainController from '../controllers/main';

const router = Router();
// Main Controller

router.get('/', mainController.index);
router.get('/lorem', mainController.lorem);
router.get('/bemvindo/:nome', mainController.sobre);
router.get('/hb1', mainController.hb1);
router.get('/hb2', mainController.hb2);
router.get('/hb3', mainController.hb3);
router.get('/hb4', mainController.hb4);
router.get('/hb5', mainController.hb5);
// User Controller
export default router;