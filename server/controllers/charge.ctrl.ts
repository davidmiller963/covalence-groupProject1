import{ Router } from 'express';
import * as procedure from '../procedures/charge.proc'

const router = Router();

router.post('/', (req, res) => {
    procedure.create(req.body.price, req.body.stripe)
    .then((success: any) => {
        res.sendStatus(204);
    })
    .catch((e: any) => {
        console.log(e);
        res.sendStatus(500);
    })
});

export default router;