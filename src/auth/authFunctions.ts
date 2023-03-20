import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/users.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'coding';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = async (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);
const verifyToken = (token: string) => jwt.verify(token, JWT_SECRET);

const auth = { createToken, verifyToken };

export default auth;