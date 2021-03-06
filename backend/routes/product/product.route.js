const router = require('express').Router();
let Product = require("../../model/product/product.model");

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const productName = req.body.productName;
  const description = req.body.description;
  const price = Number(req.body.price);

  const newProduct = new Product({
    productName,
    description,
    price,
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

//get by id.
router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});

//for delete.
router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//for update


router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.productName = req.body.productName;
      product.description = req.body.description;
      product.price = Number(req.body.price);
      

      product.save()
        .then(() => res.json('product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;