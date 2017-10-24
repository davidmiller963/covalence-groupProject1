import * as express from 'express';
import * as procedures from '../procedures/products.proc';

let router = express.Router();


// creating route for API/prodcuts/apperal
router.route('/category/:categoryid')
  .get((req, res) => {
      procedures.all(req.params.categoryid)
      .then((products) => {
          res.send(products)
      })
      .catch((err) => {
          console.log(err);
          res.sendStatus(err);
      });
  })


// creating route for API/products/misc
//   router.route('/misc')
//   .get((req, res) => {
//       procedures.all(req.params.categoryid)
//       .then((products) => {
//           res.send(products)
//       })
//       .catch((err) => {
//           console.log(err);
//           res.sendStatus(err);
//       });
//   });


  router.route('/:id')
    .get((req, res) => {
        procedures.single(req.params.id)
        .then((product) => {
            res.send(product)
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(err);
        })
    })

export default router