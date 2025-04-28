const express = require('express');
const router = express.Router();
const Product = require('../models/produkModels') 
const apiKeyAuth = require('../middleware/apiKeyAuth');

// create a new product
router.post('/', apiKeyAuth, async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ error: 'Failed to create product' });
    }
});

// read all product
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
})

// update a product
router.put('/:id', apiKeyAuth, async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updateProduct);
    } catch (error) {
        res.status(400).json({ error: 'Failed to update product' });
    }
});