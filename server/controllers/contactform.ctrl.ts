import { Router } from 'express';
import { sendEmail } from '../services/email.svc'

const router = Router();

// api/contact
router.post('/', (req, res) => {
    sendEmail('courtdp2@yahoo.com', req.body.from, 'New Contact Form Submission', req.body.message)
    .then((response) => {
        res.sendStatus(201);
    }).catch((e) => {
        console.log(e);
        res.sendStatus(500);
    })
});

export default router;