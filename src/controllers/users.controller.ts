import { Request, Response } from 'express';
import userService from '../services/users.service';

const create = async (req: Request, res: Response) => {
  const newUser = req.body;
  const token = await userService.createUser(newUser);
  res.status(201).json({ token });
};

const userController = { create };

export default userController;