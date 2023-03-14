import express from 'express';
import userController from '../controllers/users.controller';

const router = express.Router();

router.post('/', userController.create);

export default router;