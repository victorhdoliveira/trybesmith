import { Request, Response } from 'express';
import productService from '../services/products.service';

const create = async (req: Request, res: Response) => {
  const { body } = req;
  const productCreated = await productService.createProduct(body);
  res.status(201).json(productCreated);
};

const getAll = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  res.status(200).json(products);
};

const productController = { create, getAll };

export default productController;