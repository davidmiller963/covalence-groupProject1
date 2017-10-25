import { Router } from 'express';
import products from './controllers/products.ctrl'

const router = Router();

router
  .use('/products', products)



export default router