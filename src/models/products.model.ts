import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/orders.interface';
import { INewProduct, IProduct } from '../interfaces/products.interface';
import connection from './connection';

const insertNewProduct = async (product: INewProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

const getAllProducts = async ():Promise<IProduct[]> => {
  const [result] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return result;
};

const updateProduct = async (orderId: number, productId: number) => {
  const [result] = await connection.execute<IOrder[] & RowDataPacket[]>(
    'UPDATE Trybesmith.products SET order_id = ? WHERE id = ?',
    [orderId, productId],
  );
  return result;
};

const productModel = { insertNewProduct, getAllProducts, updateProduct };

export default productModel;