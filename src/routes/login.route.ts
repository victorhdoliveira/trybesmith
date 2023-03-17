import express from 'express';
import loginController from '../controllers/login.controller';
import loginVerify from '../middlewares/validateLogin';

const router = express.Router();

router.post('/', loginVerify, loginController.login);

export default router;