import { INewProduct, IProduct } from '../interfaces';
import productModel from '../models/products.model';

const createProduct = async (product: INewProduct): Promise<IProduct> => productModel
  .insertNewProduct(product);

const productService = { createProduct };

export default productService;