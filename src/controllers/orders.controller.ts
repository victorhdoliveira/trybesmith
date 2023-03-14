import { Request, Response } from 'express';
import orderService from '../services/orders.service';

const getAll = async (req: Request, res: Response) => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

const orderController = { getAll };

export default orderController;