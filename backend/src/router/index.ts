import { Router } from 'express';
import userController from '../controllers/user-controller';

const router = Router();

router.post('/signUp', userController.signUp);
router.post('/signIn', userController.signIn);
router.post('/signOut', userController.signOut);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', userController.getUsers);

export default router;
