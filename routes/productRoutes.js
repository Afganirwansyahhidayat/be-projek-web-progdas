const express = require('express');
const router = express.Router();
const Product = require('../models/produkModels')
const apiKeyAuth = require('../middleware/apiKeyAuth');

// filter kategori
router.get('/', async (req, res) => {
    const { category } = req.query;
    const filter = category ? { category } : {};
    const products = await Product.find(filter);
    res.json(products);
  })

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
        const readProducts = await Product.find();
        res.json(readProducts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
    }
})

// update a product
router.put('/:id', async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ error: 'Product not found' });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: 'Update failed', detail: err.message });
    }
});


// delete a product
router.delete('/:id', async (req, res) => {
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ error: 'Product not found' });
        res.json({ message: 'Product deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete product' });
    }
});

module.exports = router;