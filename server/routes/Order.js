const express = require("express");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, address, products } = req.body;

  if (!email || !address || !products || !products.length) {
    return res.status(400).json({ msg: "Missing required fields" });
  }

  try {
    const order = new Order({ email, address, products });
    await order.save();
    res.json({ msg: "Order placed successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
