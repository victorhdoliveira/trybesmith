import { IOrder } from '../interfaces/orders.interface';
import orderModel from '../models/orders.model';
import productModel from '../models/products.model';

const getAll = async (): Promise<IOrder[]> => orderModel.getAllOrders();

const newOrder = async (userId:number, productsIds: number[]) => {
  const orderId = await orderModel.insertNewOrder(userId);  
  await Promise.all(productsIds.map((ids) => productModel.updateProduct(orderId, ids)));
  return { userId, productsIds };
};

const orderService = { getAll, newOrder };

export default orderService;