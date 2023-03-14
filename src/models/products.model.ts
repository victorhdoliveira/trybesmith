import { ResultSetHeader } from 'mysql2';
import { INewProduct, IProduct } from '../interfaces';
import connection from './connection';

const insertNewProduct = async (product: INewProduct): Promise<IProduct> => {
  const { name, amount } = product;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
    [name, amount],
  );
  return { id: insertId, ...product };
};

// Dar um console.log de result

const productModel = { insertNewProduct };

export default productModel;