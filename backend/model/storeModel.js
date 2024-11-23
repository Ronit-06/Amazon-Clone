const mongoose = require('mongoose')

const Schema = mongoose.Schema

const storeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  productType: {
    type: String,
    required: true
  }
  
},)

const cartSchema = new Schema({
  userId: { type: String, required: true },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Store", required: true },
      quantity: { type: Number, default: 1 },
    },
  ],
});

module.exports = mongoose.model('store', storeSchema)
module.exports = mongoose.model('cart', cartSchema)