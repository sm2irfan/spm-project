const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// added for production
const productSchema = new Schema({
  productName: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

const Products = mongoose.model('Products', productSchema);

module.exports = Products;