import { Router } from 'express';
import FileController from './FileController';
import verify from '../../middleware/verify';

const router = Router();
router.post('/', verify, FileController.uploadFile);
router.get('/', verify, FileController.getFiles);
router.delete('/', verify, FileController.deleteMultipleFiles);
router.delete('/one', verify, FileController.deleteFile);

export default router;
