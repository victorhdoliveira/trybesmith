import jwt, { SignOptions } from 'jsonwebtoken';
import { IUser } from '../interfaces/users.interface';

const JWT_SECRET = process.env.JWT_SECRET || 'coding';

const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (payload: IUser) => jwt.sign(payload, JWT_SECRET, JWT_CONFIG);

export default createToken;