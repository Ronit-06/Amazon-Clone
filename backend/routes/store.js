const express = require("express");
const router = express.Router();
const store = require("../model/storeModel");

//get all store items
router.get("/", async (req, res) => {
  const storeitem = await store.find({}).sort({ createdAt: -1 });

  res.status(200).json(storeitem);
});

//get one store item

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such item." });
  }

  const storeitem = await store.findById(id);

  if (!store) {
    return res.status(404).json({ error: "No such item." });
  }

  res.status(200).json(storeitem);
});

//add store item
// router.post("/:id", async (req, res) => {
    
// });

//delete store item
router.delete("/:id", async(req, res) => {
    const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({error: 'No such item.'})
  }

  const storeitem = await store.findOneAndDelete({_id: id})

  if(!workout) {
    return res.status(400).json({error: 'No such item.'})
  }

  res.status(200).json(storeitem)
});