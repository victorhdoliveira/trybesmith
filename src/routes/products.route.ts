import express from 'express';
import productController from '../controllers/products.controller';
import productValidation from '../middlewares/productsValidation';

const router = express.Router();
const { nameVerify, amountVerify } = productValidation;

router.post('/', nameVerify, amountVerify, productController.create);
router.get('/', productController.getAll);

export default router;