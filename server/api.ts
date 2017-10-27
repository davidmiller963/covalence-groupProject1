import { Router } from 'express';
import products from './controllers/products.ctrl';
import contactFormController from './controllers/contactform.ctrl';
import chargeController from './controllers/charge.ctrl';
import purchaseController from './controllers/purchase.ctrl';

const router = Router();

router
  .use('/products', products)
  .use('/contactforms', contactFormController)
  .use('/charge', chargeController)
  .use('/purchase', purchaseController)



export default router;