const products = require('../../data/products.json');
const express = require('express');
const productRouter = express.Router();

productRouter.get('/', (req, res) => {
    res.json(products);
}); 

productRouter.get('/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) return res.status(404).send('Product not found');
    res.json(product);
});

module.exports = productRouter;