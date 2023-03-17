import express from 'express';
import userController from '../controllers/users.controller';
import userValidation from '../middlewares/userValidation';

const router = express.Router();
const { usernameVerify, vocationVerify, passwordVerify, levelVerify } = userValidation;

router.post(
  '/', 
  usernameVerify, 
  vocationVerify, 
  passwordVerify, 
  levelVerify,
  userController.create,
);

export default router;