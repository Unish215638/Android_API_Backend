const mongoose = require('mongoose');

const jwt = require("jsonwebtoken");

const productSchema = new mongoose.Schema({
  product_image: {
    type: String
  },
  produt_name: {
    type: String
  },
  product_price: {
    type: Number
  },
  used_for: {
    type: String
  },
  sellor_name: {
    type: String
  },
  product_condition: {
    type: String
  },
  post_date: {
    type: String
  },
  expiry_date: {
    type: String
  },
  product_description: {
    type: String
  }


})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;