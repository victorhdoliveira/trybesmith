import { Request, Response } from 'express';
import productService from '../services/products.services';

const create = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const productCreated = await productService.createProduct(newProduct);
  res.status(201).json(productCreated);
};

const productController = { create };

export default productController;