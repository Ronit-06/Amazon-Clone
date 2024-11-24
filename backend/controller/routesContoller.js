const express = require("express");
const router = express.Router();
const store = require("../model/storeModel");
const cart = require("../model/cartModel");

//get all store items
const getStoreitems = async (req, res) => {
  try {
    const storeitem = await store.find({}).sort({ createdAt: -1 });
    res.status(200).json(storeitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get one store item

const getStoreitem = async (req, res) => {
  const { id } = req.params;

  try {
    const storeitem = await store.findById(id);
    res.status(200).json(storeitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//add item to the store

// const addStoreitem = async (req, res) => {
//   try {
//     const storeitem = await store.create(req.body);
//     res.status(200).json(storeitem);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

//add item to cart from store
const addCartitem = async (req, res) => {
  const { id } = req.params;

  try {
    const storeItem = await store.findById(id);
    const cartitem = await cart.create({
      title: storeItem.title,
      price: storeItem.price,
      productType: storeItem.productType,
    });
    res.status(200).json(cartitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  const storeitem = await store.findById(id);
  const cartitem = await cart.create(storeitem);

  res.status(200).json(cartitem);
};

//delete item from cart
const deleteCartitem = async (req, res) => {
  const { id } = req.params;

  try {
    const cartitem = await cart.findOneAndDelete({ _id: id });
    res.status(200).json(cartitem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStoreitems,
  // getStoreitem,
  addStoreitem,
  addCartitem,
  deleteCartitem,
};
