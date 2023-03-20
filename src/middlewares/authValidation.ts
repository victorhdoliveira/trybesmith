import { NextFunction, Request, Response } from 'express';
import auth from '../auth/authFunctions';

const authMiddleware = async (req: Request, res:Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const payload = auth.verifyToken(authorization);
    req.body.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

export default authMiddleware;