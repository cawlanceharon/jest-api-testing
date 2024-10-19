
const express = require('express');
const { createProduct, getProduct } = require('../controllers/productController');
const router = express.Router();

router.post('/products', createProduct);
router.get('/products/:id', getProduct);

module.exports = router;
