import { RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders.interface';
import connection from './connection';

const getAllOrders = async ():Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(
    `SELECT o.id, o.user_id AS userId, JSON_ARRAYAGG(p.id) AS productsIds 
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products AS p 
    on o.id = p.order_id
    GROUP BY o.id;`,
  );
  return rows;
};

const orderModel = { getAllOrders };

export default orderModel;