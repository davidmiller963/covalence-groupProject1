import { Router } from 'express';
import products from './controllers/products.ctrl'
import contactFormController from './controllers/contactform.ctrl'

const router = Router();

router
  .use('/products', products)
  .use('/contactforms', contactFormController)



export default router