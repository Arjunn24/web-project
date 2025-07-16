const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// Add product
router.post('/', async (req, res) => {
  const { name, description, price } = req.body;
  const product = new Product({ name, description, price });
  await product.save();
  res.json({ msg: "Product added" });
});

module.exports = router;
