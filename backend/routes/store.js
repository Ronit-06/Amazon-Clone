const express = require("express");
const router = express.Router();
const store = require("../model/storeModel");
const {getStoreitems, getStoreitem, addStoreitem, deleteStoreitem} = require("../controller/routesContoller")

//get all store items
router.get("/", getStoreitems);

//get one store item
router.get("/:id", getStoreitem);

//add store item
router.post("/:id", addStoreitem);

//delete store item
router.delete("/:id", deleteStoreitem);

module.exports = router