import { NextFunction, Request, Response } from 'express';

const usernameVerify = async (req: Request, res:Response, next: NextFunction) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({ message: '"username" is required' });
  }

  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  
  if (username.length <= 2) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  return next();
};

const vocationVerify = async (req: Request, res:Response, next: NextFunction) => {
  const { vocation } = req.body;
  
  if (!vocation) {
    return res.status(400).json({ message: '"vocation" is required' });
  }
  
  if (typeof vocation !== 'string') {
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
    
  if (vocation.length <= 2) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  return next();
};

const levelVerify = async (req: Request, res:Response, next: NextFunction) => {
  const { level } = req.body;
    
  if (level <= 0) {
    return res.status(422)
      .json({ message: '"level" must be greater than or equal to 1' });
  }

  if (!level) {
    return res.status(400).json({ message: '"level" is required' });
  }
    
  if (typeof level !== 'number') {
    return res.status(422).json({ message: '"level" must be a number' });
  }
      
  return next();
};
  
const passwordVerify = async (req: Request, res:Response, next: NextFunction) => {
  const { password } = req.body;
      
  if (!password) {
    return res.status(400).json({ message: '"password" is required' });
  }
      
  if (typeof password !== 'string') {
    return res.status(422).json({ message: '"password" must be a string' });
  }
        
  if (password.length <= 7) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  return next();
};
  
const userValidation = { usernameVerify, vocationVerify, passwordVerify, levelVerify };

export default userValidation;
