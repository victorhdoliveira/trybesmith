import express from 'express';
import orderController from '../controllers/orders.controller';
import authMiddleware from '../middlewares/authValidation';
import productsIdVerify from '../middlewares/orderValidation';

const router = express.Router();

router.post('/', authMiddleware, productsIdVerify, orderController.newOrder);
router.get('/', orderController.getAll);

export default router;