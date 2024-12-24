const express = require("express");
const router = express.Router();
const store = require("../model/storeModel");
const {
  getStoreitems,
  getStoreitem,
  addCartitem,
  deleteCartitem,
  getCartitems,
  getCartitem
} = require("../controller/routesContoller");

//get all store items
router.get("/", getStoreitems);

//get cart items
router.get("/cart", getCartitems);

//get one cart item
router.get("/cart/:id", getCartitem);

//get one store item
router.get("/:id", getStoreitem);

//add store item to cart
router.post("/:id", addCartitem);

//delete store item from cart
router.delete("/:id", deleteCartitem);

module.exports = router;
