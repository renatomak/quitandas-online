const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/products', Controller.getProducts);
router.get('/products/:id', Controller.getProductById);
router.post('/products', Controller.addProduct);
router.put('/products/:id', Controller.changeProduct);

module.exports = router;