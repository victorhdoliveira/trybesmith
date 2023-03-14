import { INewProduct, IProduct } from '../interfaces';
import productModel from '../models/products.model';

const createProduct = async (product: INewProduct): Promise<IProduct> => productModel
  .insertNewProduct(product);

const getAll = async (): Promise<IProduct[]> => productModel.getAllProducts();

const productService = { createProduct, getAll };

export default productService;