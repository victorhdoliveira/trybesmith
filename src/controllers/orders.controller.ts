import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAll = async (req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const newOrder = async (req: Request, res: Response) => {
  const { body: { productsIds } } = req;
  const { body: { user: { id } } } = req;
  const order = await orderService.newOrder(id, productsIds);
  res.status(201).json(order);
};

const orderController = { getAll, newOrder };

export default orderController;