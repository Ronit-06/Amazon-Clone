const express = require("express");
const router = express.Router();
const store = require("../model/storeModel");
const {getStoreitems, getStoreitem, addCartitem, deleteCartitem, addStoreitem} = require("../controller/routesContoller")

//get all store items
router.get("/", getStoreitems);

//get one store item
router.get("/:id", getStoreitem);

//add store item
// router.post("/", addStoreitem)

//add store item to cart
router.post("/:id", addCartitem);

//delete store item from cart
router.delete("/:id", deleteCartitem);

module.exports = router