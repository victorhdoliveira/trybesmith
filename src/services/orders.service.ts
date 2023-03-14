import { IOrder } from '../interfaces/orders.interface';
import orderModel from '../models/orders.model';

const getAll = async (): Promise<IOrder[]> => orderModel.getAllOrders();

const orderService = { getAll };

export default orderService;