import express from 'express';
import routers from './routes';

const app = express();

app.use(express.json());
app.use('/products', routers.productRouter);
app.use('/users', routers.userRouter);
app.use('/orders', routers.orderRouter);

export default app;
