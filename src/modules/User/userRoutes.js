import { Router } from 'express';
import UserController from './UserController';
import verify from '../../middleware/verify';

const router = Router();
router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.post('/verify-account', UserController.verifyAccount);
router.post('/change-password', verify, UserController.changePassword);
router.post('/export-users', verify, UserController.exportUsers);
// router.post('/upload-users', verify, UserController.uploadUsers);
router.put('/', verify, UserController.updateUser);
router.get('/sub', verify, UserController.getUserProfile);
router.get('/dashboard-analytics', verify, UserController.dashboardAnalytics);
router.get('/:user', verify, UserController.getOneUser);
router.get('/', verify, UserController.getUsers);
router.delete('/', verify, UserController.deleteUser);

export default router;
