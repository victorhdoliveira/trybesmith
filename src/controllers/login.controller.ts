import { Request, Response } from 'express';
import { ILogin } from '../interfaces/login.interface';
import loginService from '../services/login.service';

const login = async (
  req: Request<object, object, ILogin>,
  res: Response,
) => {
  const { body } = req;
  const token = await loginService.login(body);
  if (!token) {
    return res.status(401).json({ message: 'Username or password invalid' });
  }
  res.status(200).json({ token });
};

const loginController = { login };

export default loginController;