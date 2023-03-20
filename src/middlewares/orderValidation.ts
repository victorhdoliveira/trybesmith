import { NextFunction, Request, Response } from 'express';

const productsIdVerify = async (req: Request, res:Response, next: NextFunction) => {
  const { productsIds } = req.body;
  const productsIdIsArray = Array.isArray(productsIds);

  if (!productsIds) {
    return res.status(400).json({ message: '"productsIds" is required' });
  }

  if (!productsIdIsArray) {
    return res.status(422).json({ message: '"productsIds" must be an array' });
  }
  
  if (productsIds.length === 0) {
    return res.status(422).json({ message: '"productsIds" must include only numbers' });
  }
  return next();
};

export default productsIdVerify;
