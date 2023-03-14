import express from 'express';
import orderController from '../controllers/orders.controller';

const router = express.Router();

router.get('/', orderController.getAll);

export default router;