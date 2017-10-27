import{ Router } from 'express';
import * as stripeService from '../services/stripe.svc';

const router = Router();

router.post('/', (req, res) => {
    let amount = Number(req.body.amount);
    stripeService.charge(req.body.token, amount)
    .then((success: any) => {
        res.sendStatus(204);
    })
    .catch((e: any) => {
        console.log(e);
        res.sendStatus(500);
    })
});

export default router;