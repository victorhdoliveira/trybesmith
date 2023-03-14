import express from 'express';
import productController from '../controllers/products.controller';

const router = express.Router();

router.post('/', productController.create);

export default router;