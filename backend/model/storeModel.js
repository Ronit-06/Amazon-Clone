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

module.exports = mongoose.model('products', storeSchema)
