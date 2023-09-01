import { Router } from 'express';

const router = Router();

router.post('/signUp');
router.post('/signIn');
router.post('/signOut');
router.get('/activate/:link');
router.get('/refresh');
router.get('/users');

export default router;
