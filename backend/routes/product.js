const express= require('express');
const { getProducts, getSingleProducts } = require('../controllers/productcontroller');
const router = express.Router();

router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleProducts);


module.exports= router;