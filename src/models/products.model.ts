import { ResultSetHeader, RowDataPacket } from 'mysql2';
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
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(
    'SELECT * FROM Trybesmith.products',
  );
  return rows;
};

const productModel = { insertNewProduct, getAllProducts };

export default productModel;